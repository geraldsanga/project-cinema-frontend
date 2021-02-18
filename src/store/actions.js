import axios from 'axios';
export default {
  async fetchNowPlayingMovies({state, commit}){
    console.log(state.user_token)
    let now_playing_movies = await axios.get('core/now_playing_movies/', {headers: {'Authorization': `Token ${state.user_token}`}})
    commit('SET_NOW_PLAYING_MOVIES', now_playing_movies.data)
  },
  async fetchOpeningThisWeekMovies({state, commit}){
    console.log(state.user_token)
    let opening_this_week_movies = await axios.get('core/opening_this_week_movies/', {headers: {'Authorization': `Token ${state.user_token}`}})
    commit('SET_OPENING_THIS_WEEK_MOVIES', opening_this_week_movies.data)
  },
  async fetchAllTheaters({state, commit}){
    let all_theaters = await axios.get('core/theaters/', {headers: {'Authorization': `Token ${state.user_token}`}})
    commit('SET_THEATERS', all_theaters.data)
  },
  async fetchUserInfo({state, commit}){
    let user_info = await axios.get('/auth/user/', {headers: {'Authorization': `Token ${state.user_token}`}})
    console.log(user_info)
    commit('SET_USER_INFO', user_info.data)
  },
  async logout({commit}){
    let user_token = null
    commit('LOG_OUT', user_token)
  }
}