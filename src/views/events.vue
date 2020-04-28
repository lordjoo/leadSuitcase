<template>
    <section class="events-page">
        <v-section v-if="upComing"  style="background-color: #F9F9F9">
            <p :style="{fontSize:'200%',color:$config.style.color }" class="google-fonts">
                Upcoming Events
            </p>
            <v-layout row wrap>
                <v-flex xs12 md4 v-for="event in upComing" :key="event.name">
                    <event-card :event='event'></event-card>
                </v-flex>
          </v-layout>
        </v-section>

        <v-section>
            <p :style="{fontSize:'200%',color:$config.style.color }" class="google-fonts">
                Directory of past events
            </p>
            <v-layout v-if="pastEvents" wrap row>
                <v-flex v-for="event in pastEvents" :key="event.name" xs12 sm6 md4 lg4>
                    <past-event-card :event='event' />
                </v-flex>
            </v-layout>
            <v-layout wrap row v-else>
                <empty text="No Past Events Yet"></empty>
            </v-layout>
        </v-section>

        <v-section><app-footer /></v-section>
    </section>
</template>

<script>
    import firebase from 'firebase'
    import 'firebase/firestore'
    
    import VSection from "../components/common/v-section";
    import AppFooter from "../components/common/appFooter";
    import EventCard from "../components/events/eventCard";
    import PastEventCard from "../components/events/pastEventCard";
    import Empty from "../dashboard/components/empty";
    export default {
        name: "events",
        components: {Empty, PastEventCard, EventCard, AppFooter, VSection},
        data(){
            return {};
        },
        computed:{
            pastEvents: function () {
                let check = function (event) {
                    return (event.date < firebase.firestore.Timestamp.now());
                };
                let events = this.$store.state.events;
                let coming = events.filter(check);
                return (coming.length > 0) ? coming : false;
            
            },
            upComing: function () {
                let check = function (event) {
                    return (event.date > firebase.firestore.Timestamp.now());
                };
                let events = this.$store.state.events;
                let coming = events.filter(check);
                return (coming.length > 0) ? coming : false;
            }
        }
    }
</script>

<style scoped>

</style>