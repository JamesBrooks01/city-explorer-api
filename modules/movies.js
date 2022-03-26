const axios = require('axios');
let cache = require('./cache.js');
module.exports = getMovies;

function getMovies(keyword){
  const key = 'Movie-' + keyword;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${keyword}`;

  if (cache[key] && (Date.now() - cache[key].timestamp < 1000 * 60 * 60 * 24 * 30)) {
    console.log('cache hit');
  } else {
    console.log('cache miss');
    cache[key] = {};
    cache[key].timestamp = Date.now();
    cache[key].data = axios.get(url)
      .then(response => parseMovie(response.data));
  }
  return cache[key].data;
}

function parseMovie(movieData) {
  try {
    const movieList = movieData.results.map(movie => {
      return new Movie(movie);
    });
    return Promise.resolve(movieList);
  } catch (error) {
    return Promise.reject(error);
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

