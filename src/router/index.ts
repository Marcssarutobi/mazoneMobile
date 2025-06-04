import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import axiosInstance from '@/plugins/axios';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
    meta: { noTransition: false,requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterPage.vue')
  },
  {
    path: '/liste',
    name: 'ListePage',
    component: () => import('../views/ListePage.vue'),
    meta: { noTransition: false,requiresAuth: true }
  },
  {
    path: '/signal',
    name: 'SignalForm',
    component: () => import('../views/SignalForm.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/single',
    name: 'SingleSignal',
    component: () => import('../views/SingleSignal.vue'),
    meta: {requiresAuth: true}
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export async function isAuthenticated(){
  try {
    const res = await axiosInstance.get('/user',{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })

    if (res.status === 200) {
      return res.data.user
    }

  } catch (error) {
    console.error(error)
    return null
  }
}

router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        try {
            const auth = await isAuthenticated()
            const token = localStorage.getItem("token");

            if (auth && token) {
              next()
            }else{
              localStorage.setItem('redirectAfterLogin', to.fullPath); // <- ici
              next('/login')
            }
        } catch (error) {
            console.error(
                "Erreur lors de la vérification de l'authentification :",
                error
            );
            next("/login");
        }
    }else{
        // Rediriger les utilisateurs authentifiés accédant à la page de connexion
        if (to.path === '/login' ) {
            const auth = await isAuthenticated()
            const token = localStorage.getItem("token");
            if (auth && token) {
                next('/')
            } else {
                next()
            }
        } else {
            next();
        }
    }
})


export default router
