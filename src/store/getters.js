export default {
  getMovieById: state => id => {
    let all_movies = [...state.now_playing_movies, ...state.opening_this_week_movies]
    let movie = all_movies.find(movie => movie.id == id)
    return movie
  },
  getTheaterById: state => id => {
    return state.theaters.find(theater => theater.id === id)
  },
  getAllMovies: state => {
    let all_movies = [...state.now_playing_movies, ...state.opening_this_week_movies]
    return all_movies
  },
  getAllTheaters: state => state.theaters,

  getScreenings: state => state.screenings,

  getAllCategories: state => state.categories,

  getNowPlayingMovies: state => state.now_playing_movies,

  getOpeningThisWeekMovies: state => state.opening_this_week_movies,

  isAuthenticated: state => !!state.user_token,

  getUserToken: state => state.user_token,
  
  getUserInformation: state => state.user_info,
  
}