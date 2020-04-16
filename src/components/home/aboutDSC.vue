<template>
    <v-container class="pa-0 white--text">
        <v-layout wrap align-center="true" justify-center="true" row fill-height="true" class="my-3" >
            <v-flex xs12 md12 lg12 class="pa-2">
                <p class="google-font" style="font-size:150%">About {{$config.name}}</p>
                <p class="google-font" style="font-size:110%">
                    {{$config.info.about}}
                </p>
                <v-btn :href="$config.social.twitter" target="_blank" outlined color="white" class="ma-0 google-font" style="border-radius:5px;text-transform: capitalize;">
                    Twitter Page</v-btn>
                &nbsp;
                <v-btn :href="$config.social.fb" target="_blank" outlined color="white" class="ma-0 google-font"
                       style="border-radius:5px;text-transform: capitalize;">Facebook Page</v-btn>
                <br><br>
                <router-link to="/about" class="google-font" style="text-decoration:none;color:white">See More about {{$config.name}}</router-link>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
    export default {
        name: "aboutDSC"
    }
</script>

<style scoped>

</style>