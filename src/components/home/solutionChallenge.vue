<template>
    <v-container class="p-0">
        <v-layout wrap align-center="true" justify-space-between="true" row fill-height="true" class="my-3" >
            <v-flex xl8 sm12 md8>
                <p class="google-font" style="font-size:150%">Solution Challenge</p>
                <p>The Solution Challenge is an annual contest presented by Developer Student Clubs (DSC) that invites students to develop solutions for local community problems using one or more Google products or platforms.</p>
                <v-btn to="solutionChallenge" outlined :color="$config.style.color">Learn more <span class="ml-1 fa fa-arrow-right"></span></v-btn>
            </v-flex>
            <v-flex xl3 sm12 md3>
                <v-img height="300px" lazy-src="../../assets/img/sc.png" src="../../assets/img/sc.png" />
            </v-flex>
        </v-layout>


    </v-container>
</template>

<script>
    export default {
        name: "solutionChallenge"
    }
</script>

<style scoped>

</style>