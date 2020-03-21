import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewDashboard from '../views/View-Dashboard'
import ViewPerfil from '../views/View-Perfil'
import ViewTutoria from '../views/View-Tutoria'
import ViewSugestao from '../views/View-Sugestao'
import ViewHome from '../views/View-Home.vue'
import ViewRegister from '../views/View-Register.vue'
import ViewLogin from '../views/View-Login.vue'
import ViewChat from '../views/View-Chat.vue'

Vue.use(VueRouter)


let router = new VueRouter({
  mode: 'history',
  routes: [
      {
        path: '/',
        name: 'View-Home',
        component: ViewHome
      },
      {
        path: '/login',
        name: 'View-Login',
        component: ViewLogin,
        meta: {
            guest: false
        }
      },
      {
        path: '/register',
        name: 'View-Register',
        component: ViewRegister,
        meta: {
            guest: false
        }
      },
      {
        path: '/dashboard',
        name: 'View-Dashboard',
        component: ViewDashboard,
        meta: {
            requiresAuth: true
        }
      },
      {
        path: '/dashboard/perfil',
        name: 'View-Perfil',
        component: ViewPerfil,
        meta: {
            requiresAuth: true
        }
      },
      {
        path: '/dashboard/tutorias',
        name: 'View-Dashboard',
        component: ViewTutoria,
        meta: {
            requiresAuth: true
        }
      },
      {
        path: '/dashboard/sugestao',
        name: 'View-Dashboard',
        component: ViewSugestao,
        meta: {
            requiresAuth: true
        }
      },
      {
        path: '/chat',
        name: 'View-Chat',
        component: ViewChat,
      },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('jwt') == null) {
          next({
              path: '/login',
              params: { nextUrl: to.fullPath }
          })
          return localStorage.getItem('jwt')
      } else {
          let user = JSON.parse(localStorage.getItem('user'))
          if(to.matched.some(record => record.meta.is_admin)) {
              if(user.is_admin == 1){
                next()
                return localStorage.getItem('jwt')
              }
              else{
                next({ name: 'userboard'})
                return localStorage.getItem('jwt')
              }
          }else {
            next()
            return localStorage.getItem('jwt')
          }
      }
  }else {
    next()
    return localStorage.getItem('jwt')
  }
})




export default router
