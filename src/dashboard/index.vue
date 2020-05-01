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
            </v-layout>
        </v-container>
        <v-divider/>
        <v-container fluid>
            <p style="font-size: 180%" class="google-font mb-3">Upcoming Events </p>
            <v-layout v-if="upComing" row wrap fill-height="true" justify-center="true">
                <v-flex md12 xs12>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-left">Event Name</th>
                                <th class="text-left">Event Date</th>
                                <th class="text-left">Event Description</th>
                                <th class="text-left">Event Link</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="event in upComing" :key="event.name">
                                <td>{{ event.name }}</td>
                                <td>{{ moment(event.date.toDate()).format("YYYY-MM-DD") }}<br>{{ event.time }}</td>
                                <td>{{ event.desc }}</td>
                                <td>
                                    <v-btn target="_blank" :href="event.link">Visit</v-btn>
                                </td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>

                </v-flex>
            </v-layout>
            <v-layout v-else row wrap fill-height="true" justify-center="true">
                <v-flex md12 class="mt-4 text-center">
                    <v-img class="ma-auto" width="100" src="@/assets/img/ufo.png"></v-img>
                    <p style="font-size: 140%" class="google-font mt-2">No Upcoming Events </p>
                    <v-btn text class="blue white--text">Add Event</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
    import firebase from 'firebase'
    import 'firebase/firestore'
    import moment from 'moment'
    import InfoCard from "./components/home/infoCard";
    export default {
        name: "index",
        data(){
            return {
                posts:this.$store.state.posts,
                events:this.$store.state.events,
            };
        },
        computed:{
            upComing:function () {
                let check = function (event) {
                    return (event.date > firebase.firestore.Timestamp.now());
                };
                let events = this.$store.state.events;
                let coming = events.filter(check);
                return (coming.length > 0) ? coming : false;
            },
        },
        methods:{
            moment: (date) => moment(date)
        },
        components: {InfoCard}
    }
</script>

<style scoped>

</style>