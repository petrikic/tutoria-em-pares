import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewFeed from '../views/View-Feed'
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
        name: 'View-Feed',
        component: ViewFeed,
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
      } else {
          let user = JSON.parse(localStorage.getItem('user'))
          if(to.matched.some(record => record.meta.is_admin)) {
              if(user.is_admin == 1){
                  next()
              }
              else{
                  next({ name: 'userboard'})
              }
          }else {
              next()
          }
      }
  } else if(to.matched.some(record => record.meta.guest)) {
      if(localStorage.getItem('jwt') == null){
          next()
      }
      else{
          next({ name: 'userboard'})
      }
  }else {
      next()
  }
})




export default router
