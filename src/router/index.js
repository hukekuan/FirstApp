import Vue from 'vue'
import Router from 'vue-router'

// import index from '../components/page/airindex.vue'
// import content from '../components/page/content.vue'
import Frame from '../components/frame/subroute.vue'
import userindex from '../components/page/user/index.vue'
import userinfo from '../components/page/user/info.vue'
import userlove from '../components/page/user/love.vue'

import airSubroute from '../components/frame/airSubroute.vue'
import airindex from '../components/page/air/airindex.vue'

import c3gis from '../components/page/c3gis.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'c3gis',
      component: c3gis
    },

    // ,
    // {
    //   path: '/content',
    //   name: 'content',
    //   component: content
    // }
    {
      path: '/user',
      name: 'Frame',
      component: Frame,
      children:[
        {path: '/',component: userindex},
        {path: 'info',component: userinfo},
        {path: 'love',component: userlove}
      ]
    },
    {
      path: '/air',
      name: 'AirFrame',
      component: airSubroute,
      children:[
        {path: '/',component: airindex}
      ]
    }
  ]
})
