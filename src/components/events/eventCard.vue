<template>
    <v-card class="mr-2 ml-2 mb-2">
        <v-img height="200px" src="https://firebase.google.com/images/social.png"></v-img>
        <v-card-title>
            <div class="google-font">
                <p>Firebase Overview</p>
            </div>
        </v-card-title>
        <v-card-subtitle>
            <p class="mb-0">
                <span class="far fa-clock mr-1"></span>
                12:00PM
            </p>
            <p class="mb-0">
                <span class="fa fa-calendar-day mr-1"></span>
                26, Feb, 2020
            </p>
            <p class="mb-0">
                <span class="fa fa-chalkboard-teacher mr-1"></span>
                Eng, John Wick
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
        name: "eventCard"
    }
</script>

<style scoped>

</style>