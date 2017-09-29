/**
 * Created by hukekuan on 17-8-5.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import user from './modules/user'
// import map from './modules/map'
// import menus from './modules/menus'
// import chart from './modules/chart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // map, menus, chart
    user
  },
  actions,
  getters
})
