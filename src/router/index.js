import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: __dirname,
  base: '/',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/main',
      component: resolve => require(['../components/common/Home.vue'],resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../components/page/Main.vue'],resolve)
        },
        {
          path: '/usermanage',
          component: resolve => require(['../components/page/UserManage.vue'], resolve)
        },
        {
          path: '/vuetable',
          component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
        },
        {
          path: '/baseform',
          component: resolve => require(['../components/page/BaseForm.vue'], resolve)
        },
        {
          path: '/vueeditor',
          component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'],resolve)
    }
  ]
})
