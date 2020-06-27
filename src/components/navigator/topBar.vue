<template>
    <div>
        <v-app-bar :color="$vuetify.theme.dark?'grey darken-4':'white'"
                   dense
        >
            <router-link to="/" class="d-flex" style="text-decoration: none">
                <v-img class="mr-2" max-width="50" height="25px" src="../../assets/logo.png"></v-img>
                <v-toolbar-title :class="$vuetify.theme.dark ? 'white--text' : 'black--text'">{{ this.$config.name }}</v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <div class="hidden-sm-and-down hide-onsm">
                <v-btn class="no-shadow" to="/"  :color="$vuetify.theme.dark?'black':'#fff'"  >
                    <span class="fa fa-home mr-1"></span> Home
                </v-btn>
                <v-btn class="no-shadow" to="/about" :color="$vuetify.theme.dark?'black':'#fff'"   >
                    <span class="fa fa-info mr-1"></span> About
                </v-btn>
                <v-btn class="no-shadow" to="/events" :color="$vuetify.theme.dark?'black':'#fff'"   >
                    <span class="far fa-calendar-alt mr-1"></span> Events
                </v-btn>
                <v-btn class="no-shadow" to="/blog" :color="$vuetify.theme.dark?'black':'#fff'"   >
                    <span class="fa fa-blog mr-1"></span> Blog
                </v-btn>
                <v-btn text @click="darkMode">
                    <span style="font-size: 170%" :class="$vuetify.theme.dark?'mdi mdi-weather-sunny mr-1':'mdi mdi-weather-night mr-1'"></span>
                </v-btn>

            </div>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "topBar",
        methods:{
            darkMode:function () {
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            }
        }
    }
</script>

<style scoped>
    @media only screen and (max-width: 600px) {
       
    }
</style>