import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'
import 'firebase/auth'
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

router.beforeEach((to, from, next) => {
        const user = firebase.auth().currentUser;
        const requiresAuth = to.matched.some(record => record.meta.auth);
        if (requiresAuth) {
            if (!user) {
                next("/403");
            } else {
                next();
            }
        } else {
            next()
        }
    }
);

export default router
