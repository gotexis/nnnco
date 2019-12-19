import Vue from 'vue'
import VueRouter from 'vue-router'
import Inbox from '../views/Inbox.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inbox',
    component: Inbox
  },
  {
    path: '/compose',
    name: 'compose',
    component: () => import('@/views/Compose.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
