import Vue from 'vue'
import VueRouter from 'vue-router'  

Vue.use(VueRouter)


let router = new VueRouter({
  mode: 'history',
  routes: [
      {
        path: '/',
        name: 'View-Home',
        component: () => import('../views/View-Home.vue')
      },
      {
        path: '/forgot_password',
        name: 'View-FrorgotPassword',
        component: () => import('../views/View-ForgotPassword')
      },
      {
        path: '/login',
        name: 'View-Login',
        component: () => import('../views/View-Login.vue'),
        meta: {
            guest: false
        }
      },
      {
        path: '/register',
        name: 'View-Register',
        component: () => import('../views/View-Register.vue'),
        meta: {
            guest: false
        }
      },
      {
        path: '/dashboard',
        name: 'View-Dashboard',
        component: () => import('../views/View-Dashboard'),
        meta: {
            requiresAuth: true
        }
      },
      {
        path: '/dashboard/tutores',
        name: 'View-DashTutores',
        component: () => import('../views/View-Tutores'),
        meta: {
            requiresAuth: true
        }
      },
      {
        path: '/dashboard/perfil',
        name: 'View-Perfil',
        component: () => import('../views/View-Perfil'),
        meta: {
            requiresAuth: true
        }
      },
      {
        path: '/dashboard/tutorias',
        name: 'View-Tutoria',
        component: () => import('../views/View-Tutoria'),
        meta: {
            requiresAuth: true
        }
      },
      {
        path: '/dashboard/sugestao',
        name: 'View-Sugestao',
        component: () => import('../views/View-Sugestao'),
        meta: {
            requiresAuth: true
        }
      },
      // ROTAS ADMINISTRATIVAS //////
      {
        path: '/admin',
        name: 'View-Admin',
        component: () => import('../admin/pages/Tutorias'),
        meta: {
            requiresAuth: true
        }
      },
      {
        path: '/admin/administrativa',
        name: 'View-Administrativa',
        component: () => import('../admin/pages/Administrativa'),
        meta: {
          requiresAuth: true
      }
      },
      {
        path: '/admin/perfil',
        name: 'View-Perfil',
        component: () => import('../admin/pages/Perfil'),
        meta: {
          requiresAuth: true
      }
      },
      {
        path: '/admin/agendados',
        name: 'View-Tutorias',
        component: () => import('../admin/pages/Agendados'),
        meta: {
          requiresAuth: true
      }
      },
      {
        path: '/admin/tutores',
        name: 'View-tutores',
        component: () => import('../admin/pages/Tutores'),
        meta: {
          requiresAuth: true
      }
      },
      {
        path: '/admin/completo',
        name: 'View-tutores',
        component: () => import('../admin/pages/Completo'),
        meta: {
          requiresAuth: true
      }
      },
  ]
})



router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('jwt') === null) {
          next({
              path: '/login',
              params: { nextUrl: to.fullPath}
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
  }else {
    next()
  }
})




export default router
