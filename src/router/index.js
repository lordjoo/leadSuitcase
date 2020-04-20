import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/home")
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about')
  },
  {
    path:"/events",
    name:"Events",
    component:() => import('../views/events')
  },
  {
    path:"/blog",
    name:"BBlog",
    component:() => import('../views/blog')
  },
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  base: process.env.BASE_URL,
  routes
})

export default router
