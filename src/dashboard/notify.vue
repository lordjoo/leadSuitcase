<template>
    <section class="events">
        <v-container fluid>
            <v-layout justify-space-between="">
                <p style="font-size: 180%" class="google-font mb-3"><span class="fa fa-bell mr-2"></span>Notify</p>
                <v-btn @click.stop="dialog = true" class="blue white--text" text dark><span
                        class="fa mr-2 fa-bullhorn"></span> Notify Users
                </v-btn>
            </v-layout>

            <v-layout wrap row fill-height="true">
                <v-flex md12>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-left">Icon</th>
                                <th class="text-left">Title</th>
                                <th class="text-left">Body</th>
                                <th class="text-left">Date</th>
                                <th class="text-left">Statues</th>
                                <th class="text-left">Link</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="not in notifications" :key="not.id">
                                <td class="text-center">
                                    <v-avatar class="mt-2 mb-2" size="56px">
                                        <img alt="Avatar" :src="not.icon"/>
                                    </v-avatar>
                                </td>
                                <td>
                                    {{not.title}}
                                </td>
                                <td>{{not.body}}</td>
                                <td>{{ moment(not.date.toDate()).format("DD/MM/YYYY - h:m A") }}</td>
                                <td class="text-center">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn color="white" text dark v-on="on">
                                                <i v-if="not.statues === 'Successful'" class="fa green--text fa-2x fa-check-circle"></i>
                                                <i v-else-if="not.statues === 'Sending'" class="fa blue--text fa-2x fa-paper-plane"></i>
                                                <i v-else-if="not.statues === 'Failed'" class="fa orange--text fa-2x fa-exclamation-triangle"></i>
                                            </v-btn>
                                        </template>
                                        <span>{{ not.statues }}</span>
                                    </v-tooltip>
                                </td>
                                <td>
                                    <v-btn outlined :href="not.link" target="_blank">
                                        Visit
                                    </v-btn>
                                </td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-flex>
                <empty v-if="notifications.length === 0" text="You didn't send any notifications yet"></empty>
            </v-layout>

            <v-dialog v-if="dialog" v-model="dialog" max-width="480">
                <loading :loading="loading"/>
                <v-card>
                    <v-form v-model="valid">
                        <v-card-title class="headline"><span class="fa mr-2 fa-calendar-plus"></span>
                            Send Notifications
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field :rules="rules" v-model="notObj.title" color="#3498db"
                                                  label="Notification Title"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field :rules="bodyRules" required :counter="100" v-model="notObj.body"
                                                  color="#3498db"
                                                  label="Notification Body"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field :rules="rules" v-model="notObj.link" color="#3498db"
                                                  label="Notification Click Link"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-file-input id="notIco" color="#3498db"
                                                  label="Notification Icon"></v-file-input>
                                </v-col>
                            </v-row>
                            <v-alert v-if="errorMsg" color="#c0392b" type="error">{{ addError }}</v-alert>

                        </v-card-text>
                        <v-card-actions class="pb-4">
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" text @click="dialog = false">
                                Cancel
                            </v-btn>
                            <v-btn color="#3498db" class="white--text" @click="notify">
                                ADD
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-dialog>

        </v-container>

    </section>
</template>

<script>
    import {db} from '../firebase-setup'
    import Empty from "./components/empty";
    import firebase from 'firebase/app'
    import $ from 'jquery'
    import 'firebase/firestore'
    import 'firebase/storage'
    import Loading from "./components/loading";
    import moment from 'moment'

    export default {
        name: "notify",
        components: {Loading, Empty},
        firestore: {
            notifications: db.collection('notifications'),
        },
        data() {
            return {
                notifications: [],
                notObj: {},
                dialog: false,
                valid: null,
                loading: false,
                errorMsg: null,
                rules: [
                    v => !!v || 'Field is required',
                ],
                bodyRules: [
                    v => !!v || 'Field is required',
                    (v) => v && v.length <= 100 || 'Notification Body must be less than 10 characters',
                ],
            }
        },
        methods: {
            notify: async function () {
                if (this.valid) {
                    this.loading = true;
                    let file = $('#notIco').prop('files')[0];
                    if (file) {
                        let photoRef = firebase.storage().ref().child('notifications_icons').child(this.notObj.title + '.' + file.name.split('.').pop());
                        const photoUploadTask = await photoRef.put(file);
                        this.notObj.icon = await photoUploadTask.ref.getDownloadURL();
                    } else {
                        this.notObj.icon = "https://www.gstatic.com/devrel-devsite/prod/v7edd884088d642c108fc8ea1bd75617f2dc0af2fd196f78fa8668ffffb81a7bc/developers/images/touchicon-180.png";
                    }
                    this.notObj.date = firebase.firestore.Timestamp.now();
                    await firebase.firestore().collection('notifications').add(this.notObj);
                    this.loading = false;
                    //this.notObj = {};
                    this.dialog = false;
                } else {
                    this.errorMsg = "There are required Fields You miss";
                }
            },
            moment: (date) => moment(date),
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