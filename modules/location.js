const axios = require('axios');

async function getLocation(req,res) {
  let cityName = req.query.cityName;
  let url = `https://us1.locationiq.com/v1/search.php`;
  let params = {
    key: process.env.LOCATIONIQ_API_KEY,
    q: cityName,
    format: `json`,
  };
  try{
    let locationDataGotten = await axios.get(url, {params});
    let locationData = locationDataGotten.data[0];
    let sentLocation = new Location(locationData);
    res.send(sentLocation);
  }catch(error){
    Promise.resolve().then(() => {
      throw new Error(error.message);
    });
  }
}

class Location {
  constructor(locationData){
    this.name = locationData.display_name;
    this.lat = locationData.lat;
    this.lon = locationData.lon;
    this.imgURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.LOCATIONIQ_API_KEY}&center=${locationData.lat},${locationData.lon}&zoom=12`;
  }
}

module.exports = getLocation;
