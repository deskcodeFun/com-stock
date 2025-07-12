import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

import NotFoundView from '../views/NotFoundView.vue'
import ItServicesView from '@/views/ItServicesView.vue'
import ComputerView from '@/views/ComputerView.vue'
import ComputerAddNew from '@/components/ComputerAddNew.vue'

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
      name: 'it-services',

      component: ItServicesView,
    },
    {
      path: '/add',
      name: 'computer-add',

      component: ComputerAddNew,
    },
    {
      path: '/computer/:id',
      name: 'computer-view',

      component: ComputerView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router
