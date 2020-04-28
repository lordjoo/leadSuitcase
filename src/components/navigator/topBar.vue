<template>
    <div>
        <v-app-bar color="white" dense light>
            <router-link to="/" class="d-flex" style="text-decoration: none">
                <v-img class="mr-2" max-width="50" height="25px" src="../../assets/logo.png"></v-img>
                <v-toolbar-title class="black--text">{{ this.$config.name }}</v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <div class="hidden-sm-and-down hide-onsm">
                <v-btn  class="no-shadow" to="/"  color="#fff"  >
                    <span class="fa fa-home mr-1"></span> Home
                </v-btn>
                <v-btn class="no-shadow" to="/about" color="#fff"  >
                    <span class="fa fa-info mr-1"></span> About
                </v-btn>
                <v-btn class="no-shadow" to="/events" color="#fff"  >
                    <span class="far fa-calendar-alt mr-1"></span> Events
                </v-btn>
                <v-btn class="no-shadow" to="/blog" color="#fff"  >
                    <span class="fa fa-blog mr-1"></span> Blog
                </v-btn>
                <!-- <v-btn text to="/team">
                    <span class="fa fa-users mr-1"></span> Our Team
                </v-btn> -->

            </div>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "topBar",
        methods:{
            darkMode:function () {
                this.$emit('darkOn');
            }
        }
    }
</script>

<style scoped>
    @media only screen and (max-width: 600px) {
       
    }
</style>