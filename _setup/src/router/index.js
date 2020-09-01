import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      step: 1
    },
    component: () => import('../comp/step-one')
  },
  {
    path: '/step/2',
    name: 'Firebase Project',
    meta: {
        step: 2
    },
    component: () => import('../comp/step-two')
  },
  {
    path: '/step/3',
    meta: {
      step: 3
    },
    name: 'Website setup',
    component: () => import('../comp/step-three')
  },
  {
    path: '/step/4',
    name: 'Login Setup',
    meta: {
      step: 4
    },
    component: () => import('../comp/step-four')
  },
  {
    path: '/step/5',
    name: 'Mailer Setup',
    meta: {
      step: 5
    },
    component: () => import('../comp/mailer-setup')
  },
  {
    path:"/auth",
    meta:{
      step:5,
    },
    component:() => import('../comp/auth')
  },
  {
    path: '/step/6',
    name: 'finish',
    meta: {
      step: 6
    },
    component:() => import('../comp/step-five')
  },

]

const router = new VueRouter({
    base: process.env.BASE_URL,
    mode:"history",
    routes
})

export default router
