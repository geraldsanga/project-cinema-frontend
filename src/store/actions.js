import axios from 'axios';
export default {
  async fetchNowPlayingMovies({commit}){
    let now_playing_movies = await axios.get('core/now_playing_movies/')
    commit('SET_NOW_PLAYING_MOVIES', now_playing_movies.data)
  },
  async fetchOpeningThisWeekMovies({commit}){
    let opening_this_week_movies = await axios.get('core/opening_this_week_movies/')
    commit('SET_OPENING_THIS_WEEK_MOVIES', opening_this_week_movies.data)
  },
  async fetchAllTheaters({commit}){
    let all_theaters = await axios.get('core/theaters')
    commit('SET_THEATERS', all_theaters.data)
  },
  //Will come back to you later
  async Register({dispatch}, form){
    await axios.post('auth/register', form)
    let UserForm = new FormData()
    UserForm.append('username', form.username)
    UserForm.append('password', form.password)
    await dispatch('Login', UserForm)
  },

  async Login({commit}, User){
    await axios.post('auth/login/', User)
    await commit('SET_USER', User.get('username'))
  },

  async LogOut({commit}){
    let user = null
    commit('LOG_OUT', user)
  }
}