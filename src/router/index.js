import Vue from 'vue'
import VueRouter from 'vue-router'
import Inbox from '../views/Inbox.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inbox',
    component: Inbox
  },
  {
    path: '/compose',
    name: 'compose',
    component: () => import('@/views/Compose.vue')
  },
  {
    path: '/sent',
    name: 'sent',
    component: () => import('@/views/Sent.vue')
  }
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'is-active'
})

export default router
