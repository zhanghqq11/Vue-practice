import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/study01',
      component: r => require.ensure([], () => r(require('../study/vue-study01/src/study01')), 'day1')
    }
  ]
})
