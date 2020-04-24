import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            layout: "home"
        },
        component: () => import("../views/home")
    },
    {
        path: '/about',
        meta: {
            layout: "home"
        },
        name: 'About',
        component: () => import('../views/about')
    },
    {
        path: "/events",
        name: "Events",
        meta: {
            layout: "home"
        },
        component: () => import('../views/events')
    },
    {
        path: "/blog",
        name: "blog",
        meta: {
            layout: "home"
        },
        component: () => import('../views/blog')
    },
    {
        path: "/blog/:slug",
        name: "blog.read",
        meta: {
            layout: "home"
        },
        component: () => import('../views/singlePost')
    },

    {
        path: "/team",
        meta: {
            layout: "home"
        },
        name: "Team",
    },
    // Lad Routes { Dashboard Routes }
    {
        path: "/lead/login",
        name: "Login",
        meta: {
            auth: true
        }
    },
    {
        path: "/lead/home",
        name: "dash.home",
        meta: {
            name:"Home",
            layout:"dash"
        },
        component: () => import('../dashboard/index')
    },
    {
        path: "/lead/events",
        name: "dash.events",
        meta: {
            name:"Events",
            layout:"dash",
        },
        component: () => import('../dashboard/events')
    },
    {
        path:'/lead/blog',
        name:"dash.blog",
        meta: {
            name:"Posts",
            layout:"dash",
        },
        component: () => import('../dashboard/posts/posts')
    },
    {
        path:'/lead/blog/appPost',
        name:"dash.blog.add",
        meta: {
            name:"Add Post",
            layout:"dash",
        },
        component: () => import('../dashboard/posts/addPost')
    },
    {
        path:'/lead/blog/editPost/:id',
        name:"dash.blog.edit",
        meta: {
            name:"Edit Post",
            layout:"dash",
        },
        component: () => import('../dashboard/posts/editPost')
    },



    {
        path:"/lead/notify",
        name:"dash.notify"
    },
    {
        path:"/lead/mailer",
        name:"dash.mailer"
    },
    {
        path:"/lead/settings",
        name:"dash.settings"
    },


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
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    beforeEach(to, from, next) {
        const user = firebase.auth().currentUser;
        const requiresAuth = to.matched.some(record => record.meta.auth);
        if (requiresAuth) {
            if (!user) {
                next("/403");
            }
        } else {
            next()
        }
    },
    base: process.env.BASE_URL,
    routes
})

export default router
