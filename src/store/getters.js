export default {
  getNowPlayingMovieById: state => id => {
    return state.now_playing_movies.find(movie => movie.id === id)
  },

  getOpeningThisWeekMovieById: state => id => {
    return state.opening_this_week_movies.find(movie => movie.id === id)
  },

  getTheaterById: state => id => {
    return state.theaters.find(theater => theater.id === id)
  },

  getAllTheaters: state => state.theaters,

  getAllCategories: state => state.categories,

  getNowPlayingMovies: state => state.now_playing_movies,

  getOpeningThisWeekMovies: state => state.opening_this_week_movies,

  isAuthenticated: state => !!state.user_token,

  getUserToken: state => state.user_token,
  
  getUserInformation: state => state.user_info,
  
}