import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/home.vue'
import Meteo from '../components/meteo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meteo/:city',
    name: 'Meteo',
    component: Meteo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
