import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: 'Comfibo — Web Design & Development Studio' },
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
      meta: { title: 'Services — Comfibo' },
    },
    {
      path: '/initiative',
      name: 'initiative',
      component: () => import('../views/InitiativeView.vue'),
      meta: { title: 'Small Business Website Initiative — Comfibo' },
    },
    {
      path: '/work/:slug',
      name: 'work-detail',
      component: () => import('../views/WorkDetailView.vue'),
      meta: { title: 'Work — Comfibo' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About — Comfibo' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: { title: 'Contact — Comfibo' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: { title: 'Page Not Found — Comfibo' },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Comfibo'
})

export default router
