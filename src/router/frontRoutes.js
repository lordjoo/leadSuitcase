module.exports.frontRoutes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            name:"Home",
            layout: "home"
        },
        component: () => import("../views/home")
    },
    {
        path: '/about',
        meta: {
            name:"About",
            layout: "home"
        },
        name: 'About',
        component: () => import('../views/about')
    },
    {
        path: '/team',
        meta: {
            name:"Team",
            layout: "home"
        },
        name: 'Team',
        component: () => import('../views/team')
    },
    {
        path: "/events",
        name: "Events",
        meta: {
            name:"Events",
            layout: "home"
        },
        component: () => import('../views/events')
    },
    {
        path: "/blog",
        name: "blog",
        meta: {
            name:"Blog",
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
];
