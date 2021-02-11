export default {
  SET_NOW_PLAYING_MOVIES(state, payload){
    state.now_playing_movies = payload
  },
  SET_OPENING_THIS_WEEK_MOVIES(state, payload){
    console.log('Mutating')
    state.opening_this_week_movies = payload
    console.log(state.opening_this_week_movies)
  },
  SET_THEATERS(state, payload){
    state.theaters = payload
  },
  // Will come back to you later
  SET_USER(state, username){
    state.user = username
  },
  LOG_OUT(state, payload){
    state.user = payload
  }
}