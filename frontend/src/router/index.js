import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewHome from '../views/ViewHome.vue'
import ViewRegister from '../views/ViewRegister.vue'
import ViewLogin from '../views/ViewLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ViewHome',
    component: ViewHome,
  },
  {
    path: '/register',
    name: 'ViewRegister',
    component: ViewRegister,
  },
  {
    path: '/login',
    name: 'ViewLogin',
    component: ViewLogin,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
