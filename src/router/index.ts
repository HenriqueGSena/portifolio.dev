import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(import.meta.url),
    routes: [
        {
            path:'/about',
            name: 'about',
            component: () => import('../components/about/about.vue'),
        }
    ]
});

export default router;
