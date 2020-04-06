import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


let router = new VueRouter({
  mode: 'history',
  routes: [
      {
        path: '/',
        name: 'View-Home',
        component: () => import('../views/home/View-Home.vue')
      },
      {
        path: '/forgot_password',
        name: 'View-FrorgotPassword',
        component: () => import('../views/auth/View-ForgotPassword')
      },
      {
        path: '/login',
        name: 'View-Login',
        component: () => import('../views/auth/View-Login.vue'),
        meta: {
            guest: false
        }
      },
      {
        path: '/register',
        name: 'View-Register',
        component: () => import('../views/auth/View-Register.vue'),
        meta: {
            guest: false
        }
      },
      {
        path: '/dashboard/pagina/:page',
        name: 'View-Dashboard',
        component: () => import('../views/dashboard/View-Dashboard'),
        meta: {
            requiresAuth: true
        }
      },
      {
        path: '/dashboard/tutores',
        name: 'View-DashTutores',
        component: () => import('../views/dashboard/View-Tutores'),
        meta: {
            requiresAuth: true
        }
      },
      {
        path: '/dashboard/perfil/:id',
        name: 'View-Perfil',
        component: () => import('../views/dashboard/View-Perfil'),
        meta: {
            requiresAuth: true
        }
      },
      {
        path: '/dashboard/tutorias/pagina/:page',
        name: 'View-Tutoria',
        component: () => import('../views/dashboard/View-Tutoria'),
        meta: {
            requiresAuth: true
        }
      },
      {
        path: '/dashboard/sugestao',
        name: 'View-Sugestao',
        component: () => import('../views/dashboard/View-Sugestao'),
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
            requiresAuth: true,
            is_admin: true
        }
      },
      {
        path: '/admin/administrativa',
        name: 'View-Administrativa',
        component: () => import('../admin/pages/Administrativa'),
        meta: {
          requiresAuth: true,
          is_admin: true
      }
      },
      {
        path: '/admin/perfil',
        name: 'View-adminPerfil',
        component: () => import('../admin/pages/Perfil'),
        meta: {
          requiresAuth: true,
          is_admin: true
      }
      },
      {
        path: '/admin/agendados',
        name: 'View-agendados',
        component: () => import('../admin/pages/Agendados'),
        meta: {
          requiresAuth: true,
          is_admin: true
      }
      },
      {
        path: '/admin/tutores',
        name: 'View-tutores',
        component: () => import('../admin/pages/Tutores'),
        meta: {
          requiresAuth: true,
          is_admin: true
      }
      },
      {
        path: '/admin/completo',
        name: 'View-completo',
        component: () => import('../admin/pages/Completo'),
        meta: {
          requiresAuth: true,
          is_admin: true
      }
      },
      {
        path: '/reset_password',
        name: 'View-ResetPassword',
        component: () => import('../views/auth/View-ResetPassword'),
      }
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
              if(user.admin){
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
