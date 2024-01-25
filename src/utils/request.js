const api_key = process.env.REACT_APP_API_KEY;
const movieReq = {
  trending: `/trending/all/week?api_key=${api_key}&language=en-US`,
  originals: `/discover/tv?api_key=${api_key}&with_networks=213`,
  comedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
  actionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
  adventureMovies: `/discover/movie?api_key=${api_key}&with_genres=12`,
  familyMovies: `/discover/movie?api_key=${api_key}&with_genres=10751`,
  documentaryMovies: `/discover/movie?api_key=${api_key}&with_genres=99`,
  warMovies: `/discover/movie?api_key=${api_key}&with_genres=10752`,
  tvShow: `tv/popular?api_key=${api_key}&language=en-US&page=1`,
};
export default movieReq;

// https://api.themoviedb.org/3/discover/tv?api_key=d6164d624d12f58076a890a3b08ccbdf&with_networks=213