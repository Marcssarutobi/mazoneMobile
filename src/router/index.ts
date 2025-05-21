import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
    meta: { noTransition: false }
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
    meta: { noTransition: false }
  },
  {
    path: '/signal',
    name: 'SignalForm',
    component: () => import('../views/SignalForm.vue')
  },
  {
    path: '/single',
    name: 'SingleSignal',
    component: () => import('../views/SingleSignal.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
