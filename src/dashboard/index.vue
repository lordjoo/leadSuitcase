<template>
    <section class="home">
        <v-container fluid>
            <p style="font-size: 180%" class="google-font mb-3">Quick Overview</p>
            <v-layout row wrap fill-height="true">
                <v-flex xs12 md4>
                    <info-card :number="events.length" icon="fa fa-calendar-day" title="Events" color="#3498db"></info-card>
                </v-flex>
                <v-flex xs12 md4>
                    <info-card title="Posts" :number="posts.length" color="#d35400" icon="fa fa-blog"></info-card>
                </v-flex>
                <v-flex xs12 md4>
                    <info-card title="Visits" number="300" color="#8e44ad" icon="fa fa-door-open"></info-card>
                </v-flex>
            </v-layout>
        </v-container>
        <v-divider/>
        <v-container fluid>
            <p style="font-size: 180%" class="google-font mb-3">Upcoming Events </p>
            <v-layout row wrap fill-height="true" justify-center="true">
                <v-flex v-if="upComing.length" md12>
                    {{ upComing }}
                </v-flex>
                <v-flex v-else md12 class="mt-4 text-center">
                    <v-img class="ma-auto" width="100" src="@/assets/img/ufo.png"></v-img>
                    <p style="font-size: 140%" class="google-font mt-2">No Upcoming Events </p>
                    <v-btn text class="blue white--text">Add Event</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
    import InfoCard from "./components/home/infoCard";
    export default {
        name: "index",
        data(){
            return {
                posts:this.$store.state.posts,
                upComing:this.$store.state.upComing,
                events:this.$store.state.events,
            };
        },
        components: {InfoCard}
    }
</script>

<style scoped>

</style>