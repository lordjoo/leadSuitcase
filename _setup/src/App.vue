<template>
  <v-app>
    <v-container fluid class="grey fill-height darken-4">
      <v-layout align-content-center="" row rwap justify-center="">
        <v-flex md10>
          <v-stepper class="white--text" dark v-model="e1">
            <v-stepper-header>
              <v-stepper-step color="#fb9538" :complete="e1 > 1" step="1">Welcome</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step color="#fb9538" :complete="e1 > 2" step="2">Firebase Setup</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step color="#fb9538" :complete="e1 > 3" step="3">Website Setup</v-stepper-step>

              <v-divider></v-divider>
              <v-stepper-step color="#fb9538" :complete="e1 > 4" step="4">Login Credentials</v-stepper-step>

              <v-divider></v-divider>
              <v-stepper-step color="#fb9538" :complete="e1 > 5" step="5">Miler Setup</v-stepper-step>

              <v-divider></v-divider>
              <v-stepper-step color="#fb9538" step="6">Finish</v-stepper-step>

            </v-stepper-header>

            <v-stepper-items>
              <v-container fluid>
                <v-layout class="mt-3" row wrap justify-center="">
                  <v-flex md11>
                    <router-view/>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-stepper-items>
            <v-layout row justify-center="">
              <v-flex md8>
                <p>Made with <i class="fa fa-heart red--text"></i> By Youssef Mahmoud
                  <a class="blue--text" style="text-decoration: none" target="_blank" 
                     href="https://twitter.com/lordjoo_20">
                    <span class="fabignore fa-twitter"></span> @lordJoo
                  </a></p>
              </v-flex>
            </v-layout>
          </v-stepper>
        </v-flex>

      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      e1: 6,
    }
  },
  created() {
    console.log(this.$route.meta);
  },
  watch:{
    $route:function (v) {
      this.e1 = v.meta.step
    }
  },
};
</script>
