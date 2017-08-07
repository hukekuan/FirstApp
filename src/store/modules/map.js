/**
 * Created by hukekuan on 17-8-7.
 */
let ol = require('openlayers')

// initial state
const state = {
  map:{
    type: Object,
    default: {}
  }
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
  flytoLocation (state) {
    state.map.getView().animate({
      center:[118.753859,36.309878],
      duration:200,
      zoom: 8,
    },function () {
    })
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
