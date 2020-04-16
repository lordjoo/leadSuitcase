import Vue from 'vue'
const config = {
    name:"DSC MUST",
    style:{
        color:"#4285f4"
        // color:"#DB4437"
        // color:"#F4B400"
        // color:"#0F9D58"
    },
    info:{
        about:"Developer Students Club MUST University is a tech community for students in the University." +
              "We started our journey in Nov 2019. We try to engage student developers, through our hack events & meetups. The motive is to create a Strong community of programmers & hackers inside the University.",

    },
    header:{
        sub1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, quis!\n",
        sub2:"Lorem ipsum dolor sit amet, consectetur "
    },
    social:{
        fb:"https://fb.com/dscmust",
        meetup:"",
        twitter:"https://twitter.com/dscmust",
        yt:"https://youtube.com"
    },
    links:{
        DSCProgramWebsite:"https://g.co/dev/dsc",
        joinUsForm:""
    }
};

Vue.prototype.$config = config;