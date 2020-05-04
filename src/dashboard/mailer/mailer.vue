<template>
    <section class="events">
        <v-container fluid>
            <v-layout wrap justify-start="" row>
                <v-flex md4 xs11>
                    <p style="font-size: 180%" class="google-font ml-4 mb-3"><span class="far fa-envelope mr-2"></span>Mailer</p>
                </v-flex>
                <v-flex md8 xs11 sm11>
                    <div class="d-md-flex flex-md-row-reverse ml-4 mr-md-3">
                        <v-btn @click.stop="dialog = !dialog" outlined color="blue" class="mr-2 d-flex flex-row-reverse white--text" dark><span
                                class="fa mr-2 fa-envelope-open-text"></span> Make Campaign
                        </v-btn>
                        <v-btn outlined @click.stop="openStatus = !openStatus"
                               :color="((auth && auth.state) && (client && client.state))?'green':'red'" class="mb-2 mr-2 white--text" dark>
                            <span v-if="(auth && auth.state) && (client && client.state)" class="fa mr-2 fa-check-circle"></span>
                            <span v-else class="fa mr-2 fa-exclamation-triangle"></span>

                            Status
                        </v-btn>
                    </div>
                </v-flex>
            </v-layout>

            <v-layout v-show="openStatus" justify-center="true" wrap row>
                <v-flex md12>
                    <v-alert icon="fa fa-info-circle" class="black--text" color="grey lighten-5">
                        <h3>Mailer Service Status</h3>
                        <ul>
                            <li>
                                Client Status:
                                <span v-if="client && client.state">
                                    <i class="fa green--text fa-check-circle "></i>
                                    Working
                                </span>
                                <span v-else-if="auth && auth.state === false">
                                    <i class="fa red--text fa-exclamation-triangle "></i>
                                    Not Working
                                    <v-dialog v-model="solve" width="700">
                                        <template v-slot:activator="{ on }">
                                            <v-btn outlined color="green" v-on="on">
                                                Solve
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title>
                                                <h1>Mailer</h1>
                                            </v-card-title>
                                            <v-card-text>
                                                <h2 class="mt-3">
                                                    Welcome To LeadSuitCase Mailer,
                                                    You reached to this page because the mailer is not configured yet
                                                    <br>
                                                    we will walk you through some steps to get it ready now
                                                </h2>
                                                <v-divider class="mt-2"/>
                                                <div class="steps mt-3">
                                                <ol>
                                                    <li>First Go to Google credentials console
                                                        <a target="_blank" :href="'https://console.developers.google.com/apis/credentials?project='+fb_id">here</a></li>
                                                    <li>
                                                        Then Open This Video and follow the steps
                                                    </li>
                                                    <li>
                                                        Then Come here and paste the client_json file contents
                                                    </li>
                                                </ol>
                                                </div>
                                                <div class="mt-3">
                                                    <v-textarea v-model="client_json" outlined></v-textarea>
                                                    <v-btn @click="saveClient" dark color="green">Add Client JSON</v-btn>
                                                </div>
                                            </v-card-text>
                                            <v-divider></v-divider>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </span>
                                <span v-else>
                                  <v-progress-circular size="20" indeterminate color="blue"></v-progress-circular>checking
                                </span>
                            </li>
                            <li>
                                Auth Status:
                                <span v-if="auth && auth.state">
                                    <i class="fa green--text fa-check-circle "></i>
                                    Authorised
                                </span>
                                <span v-else-if="auth && auth.state === false">
                                    <i class="fa red--text fa-exclamation-triangle "></i>
                                    Not Working,
                                    <span v-if="auth.info && auth.info.error === 'no_auth'">
                                        You need to give access to {{ $config.name }} to send emails vie Gmail
                                    </span>
                                    <br>
                                    <v-btn v-if="auth.info.link" :href="auth.info.link" small color="red" outlined>
                                        Authorise {{$config.name}} Now
                                    </v-btn>
                                </span>
                                <span v-else>
                                  <v-progress-circular size="20" indeterminate color="blue"></v-progress-circular>checking
                                </span>
                            </li>
                        </ul>
                    </v-alert>
                </v-flex>
            </v-layout>
            <v-layout v-if="dialog">
                <v-flex md12 >
                    <v-card elevation="5" class="grey lighten-5">
                        <v-form v-model="valid">
                            <v-card-title class="headline"><span class="fa mr-2 fa-envelope-open-text"></span>
                                Create Campaign
                            </v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" md="12">
                                        <v-text-field :rules="rules" v-model="campaign.title" color="#3498db"
                                                      label="Campaign Title"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" md="12">
                                        <v-text-field :rules="rules" v-model="campaign.email.subject" color="#3498db"
                                                      label="Email Subject"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" md="12">
                                        <v-textarea
                                                label="To"
                                                height="150"
                                                outlined
                                                v-model="campaign.email.to"
                                        ></v-textarea>
                                        <p v-if="campaign.email.to" class="mt-0 pt-0">{{ campaign.email.to.split("\n").length }} Recipients </p>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12" md="12">
                                        <tinymce id="tmce" v-model="campaign.email.body"></tinymce>
                                    </v-col>
                                </v-row>

                                <v-alert v-if="errorMsg" color="#c0392b" type="error">{{ addError }}</v-alert>
                            </v-card-text>
                            <v-card-actions class="pb-4">
                                <v-spacer></v-spacer>
                                <v-btn color="green darken-1" text @click="dialog = false">
                                    Cancel
                                </v-btn>
                                <v-btn color="#3498db" class="white--text" @click="createCampaign">
                                    CREATE
                                </v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout wrap row fill-height="true">
                <v-flex md12>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-left">Campaign Name</th>
                                <th class="text-left">Mail Subject</th>
                                <th class="text-left">Status</th>
                                <th class="text-left">Date</th>
                                <th class="text-left">View</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="camp in camps" :key="camp.id">
                                <td>
                                    {{camp.name}}
                                </td>
                                <td>{{camp.email_subject}}</td>
                                <td>{{ moment(camp.date.toDate()).format("DD/MM/YYYY - h:m A") }}</td>
                                <td class="text-center">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on }">
                                            <v-btn color="white" text dark v-on="on">
                                                <i v-if="camp.status === 'Successful'" class="fa green--text fa-2x fa-check-circle"></i>
                                                <i v-else-if="camp.status === 'Sending'" class="fa blue--text fa-2x fa-paper-plane"></i>
                                                <i v-else-if="camp.status === 'Failed'" class="fa orange--text fa-2x fa-exclamation-triangle"></i>
                                            </v-btn>
                                        </template>
                                        <span>{{ camp.status }}</span>
                                    </v-tooltip>
                                </td>
                                <td>
                                    <v-btn outlined :to="{name:'dash.mailer.view',params:{id:camp.id}}">
                                        View
                                    </v-btn>
                                </td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-flex>
                <empty v-if="camps.length === 0" text="You didn't make any Mail campaigns  yet"></empty>
            </v-layout>
            <loading :loading="loading"/>
        </v-container>
    </section>
</template>

<script>
    import firebase from 'firebase'
    import {firebaseConfig} from '../../firebase-config'
    import 'firebase/functions'
    import 'firebase/firestore'
    import Loading from "../components/loading";
    import Tinymce from "../components/tinyMce";
    import Empty from "../components/empty";
    import moment from 'moment'

    export default {
        name: "mailer",
        components: {Empty, Tinymce, Loading},
        async mounted() {
            if (!this.$store.state.lead){
                await this.$router.push('/lead/login');
            }
            let getServiceState = firebase.functions().httpsCallable('mailerCheck');
            let Status = await getServiceState();
            Status = Status.data;
            console.log(Status);
            this.check.client = Status[0]
            this.check.auth = Status[1]
        },
        data() {
            return {
                fb_id:firebaseConfig.projectId,
                camps:null,
                solve:null,
                client_json:'',
                openStatus:false,
                dialog: false,
                valid: null,
                loading: false,
                errorMsg: null,
                rules: [
                    v => !!v || 'Field is required',
                ],
                campaign:{
                    email:{}
                },
                check: {
                    client: null,
                    auth: null,
                }
            };
        },
        methods:{
            reCheck:async function(){
                let getServiceState = firebase.functions().httpsCallable('mailerCheck');
                let Status = await getServiceState();
                Status = Status.data;
                this.check.client = Status[0]
                this.check.auth = Status[1]
            },
            saveClient:async function(){
                let addClientJSON = firebase.functions().httpsCallable('addClientJSON');
                let status = await addClientJSON(this.client_json);
                if (status){
                    this.reCheck();
                    this.solve = false;
                }
            },
            moment: (date)=> moment(date),
            createCampaign:function () {
                this.loading = true;
                let _this = this;
                let mails = [];
                this.campaign.email.to.split('\n').forEach(mail=>{
                    mails.push({email:mail,state:"Pending"});
                })
                firebase.firestore().collection('mailer').add({
                    "name":this.campaign.title,
                    "email_subject":this.campaign.email.subject,
                    "email_body":this.campaign.email.body,
                    "to":mails,
                    "status":"Sending",
                    "date":firebase.firestore.Timestamp.now()
                }).then(()=>{
                    _this.loading = false;
                    _this.dialog = false;
                });
            },
        },
        firestore:{
            camps: firebase.firestore().collection('mailer')
        },
        computed: {
            client: function () {
                return this.check.client;
            },
            auth: function () {
                return this.check.auth;
            },
        }
    }
</script>

<style scoped>

</style>