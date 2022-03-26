const axios = require('axios');
let cache = require('./cache.js');

module.exports = getWeather;

function getWeather(latitude, longitude) {
  const key = 'weather-' + latitude + longitude;
  const url = `http://api.weatherbit.io/v2.0/forecast/daily/?key=${process.env.WEATHER_API_KEY}&lang=en&lat=${latitude}&lon=${longitude}&days=5`;

  if (cache[key] && (Date.now() - cache[key].timestamp < 1000 * 60 * 60 * 24 * 1)) {
    console.log('Cache hit');
  } else {
    console.log('Cache miss');
    cache[key] = {};
    cache[key].timestamp = Date.now();
    cache[key].data = axios.get(url)
      .then(response => parseWeather(response.data));
  }

  return cache[key].data;
}

function parseWeather(weatherData) {
  try {
    const weatherSummaries = weatherData.data.map(day => {
      return new Forecast(day);
    });
    return Promise.resolve(weatherSummaries);
  } catch (error) {
    return Promise.reject(error);
  }
}

class Forecast {
  constructor(cityObject) {
    this.date = cityObject.valid_date;
    this.description = `Low of ${cityObject.min_temp}°C and a High of ${cityObject.max_temp}°C with ${cityObject.weather.description}`;
  }
}

module.exports = getWeather;
