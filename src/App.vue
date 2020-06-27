<template>
    <v-app dark>
        <home-layout v-if="this.$route.meta.layout ==='home'"></home-layout>
        <dash-layout v-else-if="this.$route.meta.layout ==='dash'"></dash-layout>
        <v-slide-y-reverse-transition v-else>
            <router-view/>
        </v-slide-y-reverse-transition>

    </v-app>
</template>

<style>
    @import "https://fonts.googleapis.com/icon?family=Material+Icons";
    @import "assets/main.scss";

    @font-face {
        font-family: google-sans;
        src: url(./assets/fonts/GoogleSans-Regular.ttf);
    }

    .google-font {
        font-family: google-sans
    }

    ;

</style>

<script>

    import HomeLayout from "./layouts/homeLayout";
    import DashLayout from "./layouts/dashLayout";

    export default {
        name: 'App',
        mounted(){
            this.$store.dispatch('bindEvents')
            this.$store.dispatch('bindPosts')
            this.$store.dispatch('bindAnnouncements')
        },
        components: {DashLayout, HomeLayout},
    };
</script>
