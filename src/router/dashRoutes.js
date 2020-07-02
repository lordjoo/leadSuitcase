module.exports.dashRoutes = [
    {
        path: "/lead/login",
        name: "Login",
        component: () => import('../dashboard/login')
    },
    {
        path: "/lead/home",
        name: "dash.home",
        meta: {
            auth:true,
            name:"Home",
            layout:"dash"
        },
        component: () => import('../dashboard/index')
    },
    {
        path: "/lead/events",
        name: "dash.events",
        meta: {
            auth:true,
            name:"Events",
            layout:"dash",
        },
        component: () => import('../dashboard/events')
    },
    {
        path: "/lead/team",
        name: "dash.team",
        meta: {
            auth:true,
            name:"Team Members",
            layout:"dash",
        },
        component: () => import('../dashboard/team')
    },
    {
        path:'/lead/blog',
        name:"dash.blog",
        meta: {
            auth:true,
            name:"Posts",
            layout:"dash",
        },
        component: () => import('../dashboard/posts/posts')
    },
    {
        path:'/lead/blog/appPost',
        name:"dash.blog.add",
        meta: {
            auth:true,
            name:"Add Post",
            layout:"dash",
        },
        component: () => import('../dashboard/posts/addPost')
    },
    {
        path:'/lead/blog/editPost/:id',
        name:"dash.blog.edit",
        meta: {
            auth:true,
            name:"Edit Post",
            layout:"dash",
        },
        component: () => import('../dashboard/posts/editPost')
    },
    {
        path:"/lead/notify",
        name:"dash.notify",
        meta: {
            auth:true,
            name:"Notify",
            layout:"dash",
        },
        component: () => import('../dashboard/notify')
    },
    {
        path:"/lead/mailer",
        name:"dash.mailer",
        meta: {
            auth:true,
            name:"Mailer",
            layout:"dash",
        },
        component: () => import('../dashboard/mailer/mailer')
    },
    {
        path:"/lead/mailer/camp/:id",
        name:"dash.mailer.view",
        meta: {
            auth:true,
            name:"Mailer",
            layout:"dash",
        },
        component: () => import('../dashboard/mailer/view')
    },
    {
        path:"/lead/mailer/auth",
        name:"dash.mailer.auth",
        meta: {
            auth:true,
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