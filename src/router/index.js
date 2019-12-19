import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
