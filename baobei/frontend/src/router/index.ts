import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'

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
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/LoginView.vue'),
            meta: {
                title: 'Baobei : Авторизация'
            }
        },
        {
            path: '/program',
            name: 'program',
            component: () => import('@/views/ProgramView.vue'),
            meta: {
                title: 'Baobei : Образовательные программы'
            }
        },
        {
            path: '/group',
            name: 'group',
            component: () => import('@/views/GroupView.vue'),
            meta: {
                title: 'Baobei : Набор в группы'
            }
        },
        {
            path: '/:catchAll(.*)', // This will catch all unmatched routes
            name: 'notFound',
            component: () => import('@/views/NotFoundView.vue'),
            meta: {
                title: 'Baobei : Страница не найдена'
            }
        }
    ],
    // TODO: fix scrollBehavior
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            document.getElementById('app')?.scrollIntoView()
        }
    }
})

export default router
