import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'
import Video from '../views/Video.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/Register',
    name: 'Register',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Register.vue')
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Login.vue')
    }
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Video',
    name: 'Video',
    component: Video
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
