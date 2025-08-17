import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

import NotFoundView from '../views/NotFoundView.vue'
import ComputerDetail from '@/components/computer/ComputerDetail.vue'
import ComputerAddNew from '@/components/ComputerAddNew.vue'
import ServiceView from '@/views/ServiceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',

      component: AboutView,
    },

    {
      path: '/services',
      name: 'service',

      component: ServiceView,
    },
    {
      path: '/add',
      name: 'computer-add',
      component: ComputerAddNew,
    },
    {
      path: '/computer/:id',
      name: 'computer-detail',

      component: ComputerDetail,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router
