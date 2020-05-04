import Vue from 'vue'
import VueRouter from 'vue-router'
import {dashRoutes} from './dashRoutes'
import {frontRoutes} from './frontRoutes'

Vue.use(VueRouter);

const routes = [
    ...frontRoutes,
    ...dashRoutes,
    // error pages routs
    {
        path: "/403",
        name: "403",
        component: () => import('../views/errorPages/notAuthorized')
    },
    {
        path: "*",
        name: "404",
        component: () => import('../views/errorPages/404')
    }
];


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return {x: 0, y: 0}
    },
});


export default router
