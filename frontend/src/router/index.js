import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewHome from '../views/View-Home.vue'
import ViewRegister from '../views/View-Register.vue'
import ViewLogin from '../views/View-Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'View-Home',
    component: ViewHome,
  },

  {
    path: '/register',
    name: 'View-Register',
    component: ViewRegister,
  },
  {
    path: '/login',
    name: 'View-Login',
    component: ViewLogin,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
