export default {
  getAllTheaters: state => state.theaters,

  getNowPlayingMovies: state => state.now_playing_movies,

  getOpeningThisWeekMovies: state => state.opening_this_week_movies,

  isAuthenticated: state => !!state.user
  
}