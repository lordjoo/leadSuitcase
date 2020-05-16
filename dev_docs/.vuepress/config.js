module.exports = {
    title: 'LeadSuitCase',
    description: 'A Ready made web app for DSC and GDG Communities',
    themeConfig:{
        nav:[
            {text:"Home",link:'/'},
            {text:"Guide",link:"/introduction/"},
            {text:"What's Coming",link:"/next/"},
            {text:'github',link:"https://github.com/lordjoo/leadSuitcase"}
        ],
        sidebar:[
            {
                title:"Introdduction",
                path:"/introduction/",
            },
            {
                title:"Installation",
                sidebarDepth:2,
                path:"/installation/",
            },
            {
                title:"Get dot ml Domain",
                sidebarDepth:2,
                path:"/get-ml-domain/",
            },

            
        ]
    }
}