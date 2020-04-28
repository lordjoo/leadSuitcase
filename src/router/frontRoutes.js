module.exports.frontRoutes = [
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
];
