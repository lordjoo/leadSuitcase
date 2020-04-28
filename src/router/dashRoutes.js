module.exports.dashRoutes = [
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
        name:"dash.notify",
        meta: {
            name:"Notify",
            layout:"dash",
        },
        component: () => import('../dashboard/notify')
    },
    {
        path:"/lead/mailer",
        name:"dash.mailer",
        meta: {
            name:"Mailer",
            layout:"dash",
        },
        component: () => import('../dashboard/mailer/mailer')
    },
    {
        path:"/lead/mailer/camp/:id",
        name:"dash.mailer.view",
        meta: {
            name:"Mailer",
            layout:"dash",
        },
        component: () => import('../dashboard/mailer/view')
    },
    {
        path:"/lead/mailer/auth",
        name:"dash.mailer.auth",
        meta: {
            name:"Mailer",
            layout:"dash",
        },
        component: () => import('../dashboard/mailer/auth')
    },
    {
        path:"/lead/settings",
        name:"dash.settings"
    },
];