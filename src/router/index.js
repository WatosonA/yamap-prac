import Vue from 'vue'
import Router from 'vue-router'
import vue_input from '@/components/input'
import vue_confirm from '@/components/confirm'
import vue_complete from '@/components/complete'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'input',
      component: vue_input
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: vue_confirm
    },
    {
      path: '/complete',
      name: 'complete',
      component: vue_complete
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
