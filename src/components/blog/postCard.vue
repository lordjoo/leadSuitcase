<template>
    <v-card class="mr-2 ml-2 mb-2">
        <v-img height="200px" class="white--text align-end" src="https://firebase.google.com/images/social.png">
            <v-card-title style="background-color: rgba(0,0,0,0.5)">
                <div class="google-font m-0">
                   Firebase Overview
                </div>
            </v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad exercitationem facere minima quia quis, tempore.
            </p>
        </v-card-subtitle>
        <v-card-actions>
            <v-spacer />
            <v-btn text :color="$config.style.color">
                Read more
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "postCard"
    }
</script>

<style scoped>

</style>