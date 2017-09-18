import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import AuthLogin from '@/components/auth/login/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'AuthLogin',
      component: AuthLogin
    }
  ],
  linkActiveClass: 'active'
})
