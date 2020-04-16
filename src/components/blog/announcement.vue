<template>
    <v-card class="mr-2 ml-2 mb-2">
        <v-img class="white--text align-end" height="200px" src="https://firebase.google.com/images/social.png">
            <v-card-title style="padding: 5px 15px; background-color: rgba(0,0,0,0.5)">
                <router-link to="" style="text-decoration: none;" class="google-font white--text m-0">
                    Firebase Overview <span class="fa fa-arrow-right"></span>
                </router-link>
            </v-card-title>
            <p class="flag blue-grey google-font">Announcement</p>
        </v-img>
    </v-card>
</template>

<script>
    export default {
        name: "postCard"
    }
</script>

<style lang="scss" scoped>
    .flag{
        position: absolute;
        top: 0;
        padding: 5px;
    }
</style>