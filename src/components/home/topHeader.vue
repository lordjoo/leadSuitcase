<template>
    <v-container class="top-header">
        <v-layout
                fill-height="true"
                row
                wrap
                align-center="true"
                justify-center="true"
        >
            <v-flex xs12 sm12 md5 lg5 xl3 class="text-xs-center pa-3">
                <v-img
                        width="550px"
                        height="350px"
                        contain
                        src="../../assets/img/banner.svg"
                        lazy-src="../../assets/img/banner.svg"
                >
                    <v-layout
                            slot="placeholder"
                            fill-height="true"
                            align-center="true"
                            justify-center="true"
                            ma-0
                    >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                </v-img>
            </v-flex>
            <v-flex xs12 sm7 md5 lg7 xl8 class="">
                <p class="google-font mb-1" :style="{fontWeight: '300',color:$vuetify.theme.dark?'white':'#616161',fontSize:'300%'}"><b>
                    Build good things <span :style="{color:$config.style.color}">together</span>.</b>
                </p>
                <p class="google-font mt-0" style="font-size:180%">
                    {{ $config.header.sub1 }} </p>
                <p class="google-font" style="font-size:110%">
                    {{ $config.header.sub2 }}</p>
                <p class="google-font" style="font-size:110%;color:#9e9e9e">

                </p>

                <v-btn @click="not" :href="$config.links.joinUsForm" class="ma-0 google-font elevation-1" :color="$config.style.color"
                       style="text-transform: capitalize;border-radius:5px;color:white">
                    Become a Member</v-btn>
                &nbsp;

                <v-btn :color="$config.style.color" to="/about" rounded style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;"
                       outlined class="ml-md-1">
                    Learn More</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import firebase from 'firebase/app'
    import 'firebase/functions'

    export default {
        name: "topHeader",
        methods:{
            not(){
                let send = firebase.functions().httpsCallable('notifyUsers');
                send({
                    link:"https://fast.com",
                    title:"UpComing event | Build Actions For Assistant ",
                    body:'Build your own action for Google Assistant Now , Register to attend the workshop now  ',
                    icon:"https://dscmust.ml/img/logo.3568bbee.png"})
                    .then( r => { console.log(r) });
            }
        }
    }
</script>

<style scoped>

</style>