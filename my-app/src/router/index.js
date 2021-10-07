import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects-list',
    name: 'ProjectsList',
   
    component: () => import(/* webpackChunkName: "ProjectsList" */ '../views/ProjectsList.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
