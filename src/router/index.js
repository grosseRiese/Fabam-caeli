import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component:  () => import('@/views/Landing.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('@/views/Menu.vue')
  },
  {
    path: '/nav',
    name: 'Nav',
    component: () => import('@/components/Nav.vue')
  },
  {
    path: '/status',
    name: 'Status',
    component: () => import('@/views/Status.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
