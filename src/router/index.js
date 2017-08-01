import Vue from 'vue'
import Router from 'vue-router'

// import index from '../components/page/index.vue'
import content from '../components/page/content.vue'

import Frame from '../components/frame/subroute.vue'
import userindex from '../components/page/user/index.vue'
import userinfo from '../components/page/user/info.vue'
import userlove from '../components/page/user/love.vue'

import myMap from '../components/page/mymap.vue'

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
      name: 'myMap',
      component: myMap
    },
    {
      path: '/content',
      name: 'content',
      component: content
    },{
      path: '/user',
      name: 'Frame',
      component: Frame,
      children:[
        {path: '/',component: userindex},
        {path: 'info',component: userinfo},
        {path: 'love',component: userlove}
      ]
    }
  ]
})
