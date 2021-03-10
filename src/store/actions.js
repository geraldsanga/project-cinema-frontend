import axios from 'axios';

// Several actions to interact with the API (not that axios is pre-configured globally)
export default {
  async fetchNowPlayingMovies({state, commit}){
    let now_playing_movies = await axios.get('core/now_playing_movies/',
    {headers: {'Authorization': `Token ${state.user_token}`}})
    commit('SET_NOW_PLAYING_MOVIES', now_playing_movies.data)
  },
  async fetchOpeningThisWeekMovies({state, commit}){
    let opening_this_week_movies = await axios.get('core/opening_this_week_movies/', {headers: {'Authorization': `Token ${state.user_token}`}})
    commit('SET_OPENING_THIS_WEEK_MOVIES', opening_this_week_movies.data)
  },
  async fetchAllTheaters({state, commit}){
    let all_theaters = await axios.get('core/theaters/', {headers: {'Authorization': `Token ${state.user_token}`}})
    commit('SET_THEATERS', all_theaters.data)
  },
  async fetchAllCategories({state, commit}){
    let all_categories = await axios.get('core/categories', {headers: {'Authorization': `Token ${state.user_token}`}})
    commit('SET_CATEGORIES', all_categories.data)
  },
  async fetchUserInfo({state, commit}){
    let user_info = await axios.get('/auth/user/', {headers: {'Authorization': `Token ${state.user_token}`}})
    commit('SET_USER_INFO', user_info.data)
  },
  async fetchScreenings ({state, commit}, id){
    let screenings = await axios.get(`core/movie_screenings/${id}`,
    {headers: {'Authorization': `Token ${state.user_token}`}})
    commit('SET_SCREENINGS', screenings.data)
  },
  async fetchFreeSeats({state, commit}, id){
    let free_seats = await axios.get(`core/get_free_seats/${id}`, 
    {headers: {'Authorization': `Token ${state.user_token}`}})
    commit('SET_SEATS', free_seats.data)
  },
  async bookSeat({state, commit},seat_info){
    let remaining_seats = await axios.post(`core/book_a_ticket/${seat_info.screening}/${seat_info.seat}/`,
    {headers: {'Authorization': `Token ${state.user_token}`}})
    commit('SET_SEATS', remaining_seats.data)
  },
  async logout({commit}){
    let user_token = null
    commit('LOG_OUT', user_token)
  }
}