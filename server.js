'use strict';

//REQUIRE
// IN SERVERS, YOU USE 'REQUIRE' IN PLACE OF IMPORT
const express = require('express');
require('dotenv').config();
const axios = require('axios');
// WE MUST INCLUDE CORS IF WE WANT TO SHARE RESOURCES OVER THE WEB
const cors = require('cors');

//USE
// ONCE SOMETHING IS REQUIRED WE USE IT. THIS IS WEHERE WE ASSIGN THE REQUIRED FIELD A VARIABLE. REACT DOES IT IN ONE STEP WITH IMPORT AND EXPRESS DOES IT IN TWO WITH 'REQUIRE' AND 'USE'
const app = express();
app.use(cors());

//DEFINE PORT AND VALIDATE .env FILE IS WORKING
const PORT = process.env.PORT || 3002;
// IF SERVER IS RUNNING ON 3002, SOMETHING IS WRONG WITH .env FILE OR HOW THE VALUES ARE BEING IMPORTED FROM IT.


//ROUTES
// HERE WE WRITE OUR ENDPOINTS
// app.get() correlates to axios.get
app.get('/', (requestObject, responseObject) => {
  responseObject.send('breaking through to the other side!');
});

app.get('/weather', async (req, res) => {
  try {
    let lat = req.query.lat;
    let lon = req.query.lon;
    let url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&days=3&lat=${lat}&lon=${lon}`;
    let weatherDataGotten = await axios.get(url);
    let cityObject = weatherDataGotten.data;
    let cityArray = [];
    for (let i = 0; i < cityObject.data.length; i++) {
      cityArray.push(new Forecast(cityObject.data[i]));
    }
    res.send(cityArray);
  } catch (error) {
    // eslint-disable-next-line no-undef
    next(error);
  }
});

app.get('/movies', async (req, res) => {
  try {
    let keyword = req.query.keyword;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${keyword}&page=1`;
    let movieDataGotten = await axios.get(url);
    let movieObject = movieDataGotten.data;
    let movieArray = [];
    for (let i = 0; i < movieObject.results.length; i++) {
      movieArray.push(new Movie(movieObject.results[i]));
    }
    res.send(movieArray);
  } catch (error) {
    // eslint-disable-next-line no-undef
    next(error);
  }
});

// THE LAST ROUTE IS A CATCH ALL OR STAR ROUTE
app.get('*', (requestObject, responseObject) => {
  responseObject.send('The page you are looking for doesn\'t exist');
});

//ERROR HANDLING
// HANDLE ERRORS
// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

//CLASS CONSTRUCTOR
class Forecast {
  constructor(cityObject) {
    this.date = cityObject.valid_date;
    this.description = `Low of ${cityObject.min_temp}°C and a High of ${cityObject.max_temp}°C with ${cityObject.weather.description}`;
  }
}
class Movie {
  constructor(movieObject) {
    this.title = movieObject.title;
    this.overview = movieObject.overview;
    this.avgVotes = movieObject.vote_average;
    this.imgURL = movieObject.poster_path;
    this.popularity = movieObject.popularity;
    this.releaseDate = movieObject.release_date;
  }
}

//LISTEN
// START THE SERVER
// LISTEN IS AN EXPRESS METHOD THAT TAKES IN A A PORT VALUE AND A CALLBACK FUNCTION
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
