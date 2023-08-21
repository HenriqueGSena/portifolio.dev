import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Portfolio-Home',
        },
    },
    {
        path:'/about',
        name: 'about',
        component: () => import('../components/about/about.vue'),
        meta: {
            title: 'Portfolio-About',
        },
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('../views/project.vue'),
        meta: {
            title: 'Portfolio-Projects',
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
