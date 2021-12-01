import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddTask from '../views/AddTask.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddTask',
    component: AddTask
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
