'use strict';

// REQUIRE
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const movie = require('./modules/movies');
const weather = require('./modules/weather');
const location = require('./modules/location');

//USE
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3002;
// IF SERVER IS RUNNING ON 3002, SOMETHING IS WRONG WITH .env FILE OR HOW THE VALUES ARE BEING IMPORTED FROM IT.


//ROUTES
app.get('/', (request, response) => {
  response.send('The Code Works');
});

app.get('/location', locationHandler);
app.get('/weather', weatherHandler);
app.get('/movies', moviesHandler);

//Handlers
function weatherHandler(request, response) {
  const { lat, lon } = request.query;
  weather(lat, lon)
    .then(summaries => response.send(summaries))
    .catch((error) => {
      console.error(error);
      response.status(500).send('Sorry. Something went wrong!');
    });
}

function moviesHandler(request, response) {
  const keyword = request.query.keyword;
  movie(keyword)
    .then(summaries => response.send(summaries))
    .catch((error) => {
      console.error(error);
      response.status(500).send('Sorry. Something went wrong!');
    });
}

function locationHandler(request, response) {
  const cityName = request.query.cityName;
  location(cityName)
    .then(summaries => response.send(summaries))
    .catch((error) => {
      console.error(error);
      response.status(500).send('Sorry. Something went wrong!');
    });
}

app.get('*', (request, response) => {
  response.send('The page you are looking for doesn\'t exist');
});

//ERROR HANDLING
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

//LISTEN
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
