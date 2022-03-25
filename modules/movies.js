const axios = require('axios');

async function getMovies(req, res) {
  let keyword = req.query.keyword;
  let url = 'https://api.themoviedb.org/3/search/movie';
  let params = {
    api_key: process.env.MOVIE_API_KEY,
    query: keyword,
  };
  try {
    let movieDataGotten = await axios.get(url,{params});
    let moviesData = movieDataGotten.data.results;
    let movieArray = moviesData.map(movie => new Movie(movie));
    res.send(movieArray);
  } catch (error) {
    Promise.resolve().then(() => {
      throw new Error(error.message);
    });
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

module.exports = getMovies;
