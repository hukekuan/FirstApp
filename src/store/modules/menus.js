/**
 * Created by hukekuan on 17-8-7.
 */
import api from '../../config/api'

// initial state
const state = {
}

// getters
const getters = {
}

// actions
const actions = {
  get_data: function (context) {
    // 异步获取数据
    api.get('topics', {}, function(r) {
      console.log(r.data)
    })
  }
}

// mutations
const mutations = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
