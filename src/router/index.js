import Vue from 'vue'
import Router from 'vue-router'
import CmpInput from '@/components/input'
import CmpConfirm from '@/components/confirm'
import CmpComplete from '@/components/complete'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'input',
      component: CmpInput
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: CmpConfirm
    },
    {
      path: '/complete',
      name: 'complete',
      component: CmpComplete
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
