const axios = require('axios');

async function getWeather (req, res) {
  let lat = req.query.lat;
  let lon = req.query.lon;
  let url = `https://api.weatherbit.io/v2.0/forecast/daily`;
  let params = {
    key: process.env.WEATHER_API_KEY,
    days: 3,
    lat: lat,
    lon: lon,
  };
  try {
    let weatherDataGotten = await axios.get(url, {params});
    let weatherData = weatherDataGotten.data.data;
    let weatherArray = weatherData.map(day => new Forecast(day));
    res.send(weatherArray);
  } catch (error) {
    Promise.resolve().then(() => {
      throw new Error(error.message);
    });
  }
}

class Forecast {
  constructor(cityObject) {
    this.date = cityObject.valid_date;
    this.description = `Low of ${cityObject.min_temp}°C and a High of ${cityObject.max_temp}°C with ${cityObject.weather.description}`;
  }
}

module.exports = getWeather;
