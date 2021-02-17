import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    now_playing_movies: null,
    opening_this_week_movies: null,
    theaters: null,
    user: null,
  },
  mutations,
  actions,
  getters,
})
