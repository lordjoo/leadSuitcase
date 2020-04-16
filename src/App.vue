<template>
  <v-app :dark=true>
    <top-bar v-on:darkOn="darkOn"></top-bar>

    <v-content class="pb-0">
      <v-slide-y-reverse-transition>
        <router-view />
      </v-slide-y-reverse-transition>
    </v-content>


    <bottom-nav></bottom-nav>
  </v-app>
</template>

<style>
  @import "https://fonts.googleapis.com/icon?family=Material+Icons";
  @import "assets/main.scss";
  @font-face {
    font-family: google-sans;
    src: url(./assets/fonts/GoogleSans-Regular.ttf);
  }
  .google-font{
    font-family: google-sans
  };

</style>

<script>

import TopBar from "./components/navigator/topBar";
import BottomNav from "./components/navigator/bottomNav";
export default {
  name: 'App',
  components: {BottomNav, TopBar},
  data: () => ({
    dark: false,
  }),
  methods:{
    darkOn: function () {
      console.log("emitted")
      this.dark = !this.dark;
    }
  }
};
</script>
