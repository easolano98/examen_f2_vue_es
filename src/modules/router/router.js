import { createRouter, createWebHashHistory } from "vue-router";

const routes = [{ path: "/", component: () => import('../page/GenerarPage.vue') },
{ path: "/registro", component: () => import('../page/RegistroPage.vue') },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router