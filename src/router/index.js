import Vue from 'vue'
import Router from 'vue-router'

import index from '../components/page/index'
import content from '../components/page/content'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/content',
      name: 'content',
      component: content
    }
  ]
})
