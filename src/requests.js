const key = "8dc32e027aae4d84c1fa3d1a56fd0640"; //netflix clone

const requests = {
  fetchTrending: `/trending/all/week?api_key=${key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${key}&with_genres=10749`,
  fetchDocumantaries: `/discover/movie?api_key=${key}&with_genres=99`,
  fetchTest: `/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
};

export default requests;
// https://api.themoviedb.org/3/discover/movie?api_key=8dc32e027aae4d84c1fa3d1a56fd0640&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
