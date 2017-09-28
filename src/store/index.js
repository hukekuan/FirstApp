/**
 * Created by hukekuan on 17-8-5.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import user from './modules/user'
// import map from './modules/map'
// import menus from './modules/menus'
// import chart from './modules/chart'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    // map, menus, chart
    user
  }
})
