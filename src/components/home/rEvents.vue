<template>
    <v-container>
        <v-layout align-center="true" justify-center="true" row fill-height="true" >
            <v-flex xl12 md12 sm12 class="pa-2">
                <p class="google-font text-center" style="font-size: 200%">Recent Events</p>
                <p style="font-size: 100%" class="google-font text-center m-0 p-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus cum, deserunt dolore ex explicabo fugit iusto laborum mollitia numquam quas sit, temporibus voluptas? Laborum.
                </p>
            </v-flex>
        </v-layout>
        <v-layout row fill-height="true" >
            <v-flex v-for="event in upComing" :key="event.name" sm12 md4 lg4>
                <event-card :event="event"></event-card>
            </v-flex>
            <v-flex v-for="event in pastEvents" :key="event.name" sm12 md4 lg4>
                <event-card :event="event"></event-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import firebase from 'firebase'
    import 'firebase/firestore'
    
    import EventCard from "../events/eventCard";
    export default {
        name: "rEvents",
        components: {EventCard},
        computed:{
            pastEvents: function () {
                let check = function (event) {
                    return (event.date < firebase.firestore.Timestamp.now());
                };
                let events = this.$store.state.events;
                let coming = events.filter(check);
                return (coming.length > 0) ? coming.slice(0,2) : false;  
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