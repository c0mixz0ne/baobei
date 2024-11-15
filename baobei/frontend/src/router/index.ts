import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
      meta: {
        title: 'Baobei : Главная'
      }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    //   meta: {
    //     title: 'Baobei:О Нас'
    //   }
    // },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue'),
      meta: {
        title: 'Baobei : Авторизация'
      }
    },
    {
      path: '/program',
      name: 'program',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProgramView.vue'),
      meta: {
        title: 'Baobei:Образовательные программы'
      }
    },
    {
      path: '/:catchAll(.*)', // This will catch all unmatched routes
      name: 'notFound',
      component: () => import('../views/NotFoundView.vue'),
      meta: {
        title: 'Baobei : Страница не найдена'
      }
    }
  ]
})

export default router
