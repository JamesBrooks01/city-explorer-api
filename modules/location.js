const axios = require('axios');
let cache = require('./cache.js');
module.exports = getLocation;

function getLocation(cityName) {
  let key = 'Location- ' + cityName;
  let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATIONIQ_API_KEY}&q=${cityName}&format=json`;

  if (cache[key] && (Date.now() - cache[key].timestamp < 1000 * 60 * 60 * 24 * 30)) {
    console.log('cache hit');
  } else {
    console.log('cache miss');
    cache[key] = {};
    cache[key].timestamp = Date.now();
    cache[key].data = axios.get(url)
      .then(response => parseLocation(response.data[0]));
  }
  return cache[key].data;
}

function parseLocation(locationData) {
  try {
    const sentLocation = new Location(locationData);
    return Promise.resolve(sentLocation);
  } catch (error) {
    return Promise.reject(error);
  }
}

class Location {
  constructor(locationData) {
    this.name = locationData.display_name;
    this.lat = locationData.lat;
    this.lon = locationData.lon;
    this.imgURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.LOCATIONIQ_API_KEY}&center=${locationData.lat},${locationData.lon}&zoom=12`;
  }
}
