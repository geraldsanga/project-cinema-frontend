import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    now_playing_movies: null,
    opening_this_week_movies: null,
    theaters: null,
    user_token: null,
    user_info: null,
  },
  mutations,
  actions,
  getters,
  plugins: [createPersistedState()]
})
