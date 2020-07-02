<template>
    <v-container class="mb-8" fluid>
        <v-layout wrap align-center="true" justify-center="true" row fill-height="true">
            <v-flex xs12 md12 lg12>
                <v-layout wrap align-start="true" justify-start="true" row class="my-2">
                    <v-flex xs12 md5 lg5>
                        <v-layout wrap align-start="true" justify-start="true" row class="my-2">
                            <v-flex xs12 md4 sm4 lg4 class="py-2">
                                <p class="google-font mb-0" style="font-size: 140%;font-weight: 300;">
                                    <b>About</b>
                                </p>
                                <div class="mt-1">
                                    <router-link to="/about" class="google-font"
                                                 :style="{color:$vuetify.theme.dark?'#eee':'#3E4551',textDecoration: 'none',fontSize:'110%'}">
                                        {{ $config.name }}
                                    </router-link>
                                    <br>
                                    <a href="https://www.womentechmakers.com/" class="google-font"
                                       target="_blank"
                                       :style="{color:$vuetify.theme.dark?'#eee':'#3E4551',textDecoration: 'none',fontSize:'110%'}">
                                        Women Techmakers
                                    </a>
                                    <br>
                                    <a href="https://developers.google.com/community/gdg" class="google-font"
                                       target="_blank"
                                       :style="{color:$vuetify.theme.dark?'#eee':'#3E4551',textDecoration: 'none',fontSize:'110%'}">
                                        Google Developers Group
                                    </a>
                                    <br>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-flex>


                    <v-flex xs12 md4 lg4>
                        <v-layout wrap align-start="true" justify-start="true" row class="my-2">
                            <v-flex xs12 md12 sm12 lg12 class="py-2">
                                <p class="google-font mb-0" style="font-size: 140%;font-weight: 300;">
                                    <b>Follow Us: </b>
                                </p>
                            </v-flex>
                            <v-flex xs12 md12>
                                <v-btn v-if="$config.social.fb" :href="$config.social.fb"
                                       fab small elevation="0" style="background-color: #3b5998"
                                       target="_blank"
                                       slot="activator">
                                    <span class="fab fa-facebook"></span>
                                </v-btn>
                                <v-btn :href="$config.social.twitter"
                                       v-if="$config.social.twitter"
                                       fab small elevation="0"
                                       class="blue ml-2"
                                       target="_blank"
                                       slot="activator">
                                    <span class="fab fa-twitter"></span>
                                </v-btn>
                                <v-btn v-if="$config.social.yt" :href="$config.social.yt"
                                       fab small elevation="0"
                                       class="red ml-2"
                                       target="_blank"
                                       slot="activator">
                                    <span class="fab fa-youtube"></span>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "appFooter"
    }
</script>

<style scoped>

</style>