import router from '../router'
export default {
  SET_NOW_PLAYING_MOVIES(state, payload){
    state.now_playing_movies = payload
  },
  SET_OPENING_THIS_WEEK_MOVIES(state, payload){
    state.opening_this_week_movies = payload
  },
  SET_THEATERS(state, payload){
    state.theaters = payload
  },
  SET_USER(state, payload){
    state.user_token = payload
  },
  SET_USER_INFO(state, payload){
    state.user_info = payload
  },
  LOG_OUT(state, payload){
    state.user_token = payload
    router.push('/login')
  }
}