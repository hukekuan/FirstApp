// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Mint from './config/mintUi'
import App from './App'
import router from './router'
import api from './config/api'
import store from './store'
Vue.prototype.$api = api
Vue.config.productionTip = false

/* eslint-disable no-new */
import './assets/css/style.css'

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
