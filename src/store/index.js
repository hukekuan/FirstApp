/**
 * Created by hukekuan on 17-8-5.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let ol = require('openlayers')

export default new Vuex.Store({
  // 存储状态值
  state: {
  },
  // 状态值的改变方法,操作状态值
  // 提交mutations是更改Vuex状态的唯一方法
  // 要改变状态值只能通过提交mutations来完成
  mutations: {
    flytoLocation (state) {
      state.map.getView().animate({
        center:ol.proj.fromLonLat([120, 60]),
        duration:200,
        zoom: 5,
      },function () {
      })
    }
  },
  // 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
  getters: {
    done (state) {
      return state.map.getView()
    }
  },
  actions: {
  }
})
