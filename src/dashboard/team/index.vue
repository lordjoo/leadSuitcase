<template>
    <section class="posts">
        <v-container fluid>
            <v-layout justify-space-between="">
                <p style="font-size: 180%" class="google-font mb-3"><span class="fa fa-users"></span> Manage
                    {{ $route.meta.name }}</p>
                <v-btn @click="dialog = !dialog" class="blue white--text" text dark><span
                        class="fa mr-2 fa-user-plus"></span> Add Team Member
                </v-btn>
            </v-layout>
            <!-- Posts Table -->
            <v-layout wrap row fill-height="true">
                <v-flex md12>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-left">Photo</th>
                                <th class="text-left">Name</th>
                                <th class="text-left">Email</th>
                                <th class="text-left">Twitter</th>
                                <th class="text-left">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="member in members"
                                :key="member.name"
                            >
                                <td class="py-2">
                                    <v-avatar>
                                        <img :src="member.photo"
                                             alt="John"
                                        >
                                    </v-avatar>
                                </td>
                                <td>{{member.name}}</td>
                                <td>{{member.email}}</td>
                                <td><v-btn :href="member.twitter"
                                           :color="member.twitter?'blue':'grey darken-1'"
                                           class="mr-2 white--text mx-2"
                                           fab
                                           dark
                                           small><span
                                        class="fab fa-twitter"></span></v-btn>
                                </td>
                                <td>
                                    <div class="actions d-flex">
                                        <v-btn @click="showEditDialog(member)"
                                               class="blue darken-1 mr-2 white--text mx-2" fab dark small text><span
                                                class="fa fa-edit"></span></v-btn>
                                        <v-btn @click="deleteMember(members.id)" class="red darken-2 white--text mx-2"
                                               fab dark small text><span
                                                class="fa fa-trash"></span></v-btn>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-flex>
                <empty v-if="members.length === 0" text="You didn't add any members yet."></empty>
            </v-layout>
        </v-container>
        <v-dialog overlay-color="grey darken-3" v-model="dialog" width="500">
            <loading :loading="loading"/>
            <v-card>
                <v-card-title class="headline elevation-4" primary-title>
                    <v-icon class="fa fa-user-plus mr-1"></v-icon>
                    Add Team Member
                </v-card-title>

                <v-form v-model="valid">
                    <v-card-text class="">
                        <v-divider/>
                        <div class="form-body mt-4 mb-4">
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field :rules="rules" v-model="member.name" color="#3498db"
                                                  label="Member Name"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field v-model="member.email" color="#3498db"
                                                  label="Member Email"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field v-model="member.twitter" color="#3498db"
                                                  label="Member Twitter Account"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-select v-model="member.role" item-text="name" item-value="value" :items="roles" label="Role"
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-file-input id="eventPhoto" color="#3498db"
                                                  label="Member Photo"></v-file-input>
                                </v-col>
                            </v-row>
                            <v-alert v-if="addError" color="#c0392b" type="error">{{ addError }}</v-alert>
                        </div>
                    </v-card-text>

                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="#3498db" class="white--text" @click="add">
                            ADD
                        </v-btn>
                        <v-btn
                                color="primary"
                                text
                                @click="dialog = false"
                        >
                            OK
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
        <v-dialog overlay-color="grey darken-3" v-model="editDialog" width="500">
            <loading :loading="loading"/>
            <v-card>
                <v-card-title class="headline elevation-4" primary-title>
                    <v-icon class="fa fa-user-plus mr-1"></v-icon>
                    Edit Team Member
                </v-card-title>

                <v-form v-model="valid">
                    <v-card-text class="">
                        <v-divider/>
                        <div class="form-body mt-4 mb-4">
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field :rules="rules" v-model="member_e.name" color="#3498db"
                                                  label="Member Name"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field v-model="member_e.email" color="#3498db"
                                                  label="Member Email"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-text-field v-model="member_e.twitter" color="#3498db"
                                                  label="Member Twitter Account"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-select v-model="member_e.role" item-text="name" item-value="value" :items="roles" label="Role"
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" md="12">
                                    <v-file-input id="editEventPhoto" color="#3498db"
                                                  label="Member Photo"></v-file-input>
                                </v-col>
                            </v-row>
                            <v-alert v-if="addError" color="#c0392b" type="error">{{ addError }}</v-alert>
                        </div>
                    </v-card-text>

                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="#3498db" class="white--text" @click="updateMember">
                            Update
                        </v-btn>
                        <v-btn
                                color="primary"
                                text
                                @click="dialog = false"
                        >
                            OK
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </section>
</template>

<script>
    // eslint-disable-next-line
    import moment from 'moment'
    import Empty from "../components/empty";
    import firebase from 'firebase/app'
    import $ from 'jquery'
    import 'firebase/firestore'
    import 'firebase/storage'
    import Loading from "../components/loading";

    export default {
        name: "index",
        components: {Loading, Empty},
        data() {
            return {
                team: [],
                addError: null,
                loading: false,
                dialog: false,
                rules: [
                    v => !!v || 'Field is required',
                ],
                member: {
                    name: null,
                    email: null,
                    photo: null,
                    role: null,
                    twitter:null
                },
                editValid: null,
                valid: null,
                editDialog: false,
                member_e: {},
                roles:[
                    {name:"Founder",value:"Founder"},
                    {name:"Leader",value:"Leader"},
                    {name:"Co-Leader",value:"Co-Leader"},
                    {name:"Media Team Head",value:"Media Team Head"},
                    {name:"Marketing Team Head",value:"Marketing Team Head"},
                    {name:"Organiser",value:"Organiser"},
                    {name:"IT Member",value:"IT Member"},
                    {name:"Media Member",value:"Media Member"},
                    {name:"Marketing Member",value:"Marketing Member"},
                ]
            };
        },
        methods: {
            add: async function () {
                if (this.valid) {
                    this.loading = true;
                    let _memberObj = this.member;
                    let file = $('#eventPhoto').prop('files')[0];
                    if (file) {
                        let photoRef = firebase.storage().ref().child('teamPhotos').child(this.member.name);
                        const photoUploadTask = await photoRef.put(file);
                        _memberObj.photo = await photoUploadTask.ref.getDownloadURL();
                    } else {
                        this.loading = false;
                        this.addError = "Photo is required";
                        return;
                    }
                    await firebase.firestore().collection('team').add(_memberObj);
                    this.event = {};
                    this.dialog = false;
                    this.loading = false;
                    this.member=null;
                } else {
                    this.loading = false;
                    this.addError = "There are required Fields You miss";
                }
            },
            deleteMember: async function (id) {
                await firebase.firestore().collection('team').doc(id).delete();
            },


            showEditDialog: function (event) {
                this.editDialog = true;
                this.member_e = event;
            },
            updateMember: async function () {
                this.loading = true;
                let _eventObj = this.member_e;
                let file = $('#editEventPhoto').prop('files')[0];
                if (file) {
                    let photoRef = firebase.storage().ref().child('teamPhotos').child(_eventObj.name);
                    const photoUploadTask = await photoRef.put(file);
                    _eventObj.photo = await photoUploadTask.ref.getDownloadURL();
                }
                await firebase.firestore().collection('team').doc(_eventObj.id).set(_eventObj);
                this.member_e = {};
                this.editDialog = false;
                this.loading = false;
            },
        },
        computed: {
            members: function () {
                return this.$store.state.team;
            }
        }
    }
</script>

<style scoped>

</style>