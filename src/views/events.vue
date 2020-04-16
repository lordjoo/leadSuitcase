<template>
    <section class="events-page">
        <v-section style="background-color: #F9F9F9">
            <p :style="{fontSize:'200%',color:$config.style.color }" class="google-fonts">
                Upcoming Events
            </p>
            <v-layout row wrap>
                <v-flex xs12 md4><event-card></event-card></v-flex>
          </v-layout>
        </v-section>

        <v-section>
            <p :style="{fontSize:'200%',color:$config.style.color }" class="google-fonts">
                Directory of past events
            </p>
            <v-layout wrap row>
                <v-flex xs12 sm6 md4 lg4><past-event-card/></v-flex>
                <v-flex xs12 sm6 md4 lg4><past-event-card/></v-flex>
                <v-flex xs12 sm6 md4 lg4><past-event-card/></v-flex>
                <v-flex xs12 sm6 md4 lg4><past-event-card/></v-flex>
            </v-layout>
        </v-section>

        <v-section><app-footer /></v-section>
    </section>
</template>

<script>
    import VSection from "../components/common/v-section";
    import AppFooter from "../components/common/appFooter";
    import EventCard from "../components/events/eventCard";
    import PastEventCard from "../components/events/pastEventCard";
    export default {
        name: "events",
        components: {PastEventCard, EventCard, AppFooter, VSection},
        data(){
            return {
              events: this.$store.state.events
            };
        }
    }
</script>

<style scoped>

</style>