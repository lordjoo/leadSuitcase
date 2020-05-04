<template>
    <section class="events">
        <v-container fluid>
            <v-layout justify-space-between="">
                <p style="font-size: 180%" class="google-font mb-3"><span class="fa fa-calendar-day"></span> Manage
                    Events</p>
                <v-btn @click.stop="dialog = true" class="blue white--text" text dark><span
                        class="fa mr-2 fa-calendar-plus"></span> Add Event
                </v-btn>
            </v-layout>

            <v-layout wrap row fill-height="true">
                <v-flex md12>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-left">Event Name</th>
                                <th class="text-left">Event Date</th>
                                <th class="text-left">Event Description</th>
                                <th class="text-left">Instructor</th>
                                <th class="text-left">Event Link</th>
                                <th class="text-left">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="event in events" :key="event.name">
                                <td>{{ event.name }}</td>
                                <td>{{ moment(event.date.toDate()).format("YYYY-MM-DD") }}<br>{{ event.time }}</td>
                                <td>{{ event.desc }}</td>
                                <td>{{ event.instructor }}</td>
                                <td>
                                    <v-btn target="_blank" :href="event.link">Visit</v-btn>
                                </td>
                                <td>
                                    <div class="actions d-flex">
                                        <v-btn @click="showEditDialog(event)" class="blue mr-2 white--text mx-2" fab dark small text><span
                                                class="fa fa-edit"></span></v-btn>
                                        <v-btn @click="deleteEvent(event.id)" class="red darken-2 white--text mx-2" fab dark small text><span
                                                class="fa fa-trash"></span></v-btn>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-flex>
                <empty v-if="events.length === 0" text="You didn't make any events yet."></empty>
            </v-layout>

            <v-dialog v-if="dialog" v-model="dialog" max-width="480">
                <v-card>
                    <loading :loading="loading"/>
                    <v-form v-model="valid">
                        <v-card-title class="headline"><span class="fa mr-2 fa-calendar-plus"></span> Create New Event
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field :rules="rules" v-model="event.name" color="#3498db"
                                                  label="Event Name"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field :rules="rules" v-model="event.desc" color="#3498db"
                                                  label="Event Short Description"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field :rules="rules" v-model="event.link" color="#3498db"
                                                  label="Event Link"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field :rules="rules" v-model="event.instructor" color="#3498db"
                                                  label="Instructor"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-file-input id="eventPhoto" color="#3498db"
                                                  label="Event Photo"></v-file-input>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <p class="google-font">Event Date</p>
                                    <input class="v-input" v-model="event.date" type="date"/>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <p class="google-font">Event Time</p>
                                    <v-text-field :rules="rules" v-model="event.time" color="#3498db" label="Event Time"/>
                                </v-col>
                            </v-row>
                            <v-alert v-if="addError" color="#c0392b" type="error">{{ addError }}</v-alert>

                        </v-card-text>
                        <v-card-actions class="pb-4">
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" text @click="dialog = false">
                                Cancel
                            </v-btn>
                            <v-btn color="#3498db" class="white--text" @click="addEvent">
                                ADD
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-dialog>

            <v-dialog v-if="editDialog" v-model="editDialog" max-width="480">
                <v-card>
                    <loading :loading="loading"/>

                    <v-form v-model="editValid">
                        <v-card-title class="headline"><span class="fa mr-2 fa-calendar-plus"></span> Create New Event
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field :rules="rules" v-model="editEvent.name" color="#3498db"
                                                  label="Event Name"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field :rules="rules" v-model="editEvent.desc" color="#3498db"
                                                  label="Event Short Description"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field :rules="rules" v-model="editEvent.link" color="#3498db"
                                                  label="Event Link"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field :rules="rules" v-model="editEvent.instructor" color="#3498db"
                                                  label="Instructor"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-file-input id="editEventPhoto" color="#3498db"
                                                  label="Event Photo"></v-file-input>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <p class="google-font">Event Date</p>
                                    <input class="v-input" v-model="editDate" type="date"/>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <p class="google-font">Event Time</p>
                                    <v-text-field :rules="rules" v-model="editEvent.time" color="#3498db" label="Event Time"/>
                                </v-col>
                            </v-row>
                            <v-alert v-if="addError" color="#c0392b" type="error">{{ addError }}</v-alert>

                        </v-card-text>
                        <v-card-actions class="pb-4">
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" text @click="editDialog = false">
                                Cancel
                            </v-btn>
                            <v-btn color="#3498db" class="white--text" @click="updateEvent">
                                SAVE
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-dialog>

        </v-container>
    </section>
</template>

<script>
    // eslint-disable-next-line
    import moment from 'moment'
    import Empty from "./components/empty";
    import firebase from 'firebase/app'
    import $ from 'jquery'
    import 'firebase/firestore'
    import 'firebase/storage'
    import Loading from "./components/loading";

    export default {
        name: "events",
        components: {Loading, Empty},
        data: function () {
            return {
                valid:false,
                editValid:null,
                addError: null,
                loading:false,
                dialog: false,
                editDialog: false,
                editDate:"",
                event: {},
                editEvent: {},
                rules: [
                    v => !!v || 'Field is required',
                ],
            };
        },
        computed: {
            events: function () {
                return this.$store.state.events;
            },
        },
        methods: {
            addEvent: async function () {
                if (this.valid) {
                    this.loading = true;
                    let _eventObj = this.event;
                    let file = $('#eventPhoto').prop('files')[0];
                    if (file) {
                        let photoRef = firebase.storage().ref().child('eventPhotos').child('photos').child(this.event.name + '.' + file.name.split('.').pop());
                        const photoUploadTask = await photoRef.put(file);
                        _eventObj.photo = await photoUploadTask.ref.getDownloadURL();
                    } else {
                        this.addError = "Photo is required";
                        return;
                    }
                    _eventObj.date = firebase.firestore.Timestamp.fromDate(new Date(this.event.date));
                    await firebase.firestore().collection('events').add(_eventObj);
                    this.event = {};
                    this.dialog = false;
                    this.loading = false;
                } else {
                    this.addError = "There are required Fields You miss";
                }
            },
            deleteEvent: async function (id) {
                await firebase.firestore().collection('events').doc(id).delete();
            },


            showEditDialog: function (event){
                this.editDate = moment(event.date.toDate()).format("YYYY-MM-DD");
                this.editDialog = true;
                this.editEvent = event;
            },
            updateEvent: async function () {
                this.loading = true;
                let _eventObj = this.editEvent;
                let file = $('#editEventPhoto').prop('files')[0];
                if (file) {
                    let photoRef = firebase.storage().ref().child('eventPhotos').child('photos').child(this.event.name + '.' + file.name.split('.').pop());
                    const photoUploadTask = await photoRef.put(file);
                    _eventObj.photo = await photoUploadTask.ref.getDownloadURL();
                }
                _eventObj.date = firebase.firestore.Timestamp.fromDate(new Date(this.editDate));
                await firebase.firestore().collection('events').doc(_eventObj.id).set(_eventObj);
                this.editEvent = {};
                this.editDialog = false;
                this.loading = false;
            },
            moment: (date) => moment(date)
        },
        mounted() {
            if (!this.$store.state.lead){
                this.$router.push('/lead/login');
            }
        }
    }
</script>

<style scoped>

</style>