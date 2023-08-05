import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import about from '@/components/about/about.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path:'/about',
        name: 'about',
        component: about
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
