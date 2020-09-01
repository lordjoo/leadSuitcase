<template>
    <v-layout class="mb-4" row wrap>
        <v-flex md12>
            <p style="font-size: 130%" class="font-weight-regular">In this step you will add the authentication info for the Dashboard, But First
                You have to enable the authentication in your firebase project , and to do this follow this simple steps :-)
            </p>
            <ol style="font-size: 130%">
                <li>Go to
                    <a target="_blank" :href="'https://console.firebase.google.com/u/3/project/'+id+'/authentication/providers'">Firebase console</a> </li>
                <li>
                    then from the menu choose Email/Password and enbale it then click save
                    <v-dialog v-model="dialog" width="1000">
                        <template v-slot:activator="{ on }">
                            <v-btn color="blue darken-3" v-on="on">
                                Show Picture
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-text>
                                <v-img src="@/assets/auth.png"></v-img>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </li>
                <li class="mt-2">
                    Just one last step :-) ,
                    click
                    <a target="_blank" :href="'https://console.firebase.google.com/u/3/project/'+id+'/database/firestore/'">Here</a>
                    and do as this video does to chose where you want your data to be stored
                    <v-dialog v-model="video" width="1000">
                        <template v-slot:activator="{ on }">
                            <v-btn color="blue darken-3" v-on="on">
                                Show Video
                            </v-btn>
                        </template>
                        <v-card color="transparent">
                            <v-card-text class="py-0 text-center px-0">
                                <video class="ma-auto" width="900" controls autoplay>
                                    <source src="@/assets/firestore.mp4" />
                                </video>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </li>
                <li>
                    After You enabled the Auth Provider and choose where you want to store you data Come here back and write the Login
                    Credentials you want to use for your website
                </li>
            </ol>
        </v-flex>
        <v-divider/>

        <v-layout row wrap class="mt-3">
            <v-flex v-if="error" md12 class="mt-3">
                <v-alert color="red darken-2" type="error">
                    {{ error }}
                </v-alert>
            </v-flex>
            <v-flex md12>
                <v-form v-model="valid">
                    <v-layout row>
                        <v-flex md6>
                            <v-text-field class="mr-4" :rules="notEmpty" v-model="email" outlined prepend-icon="fa fa-user" label="Login Email"></v-text-field>
                        </v-flex>
                        <v-flex md6>
                            <v-text-field class="ml-4"  :rules="password"  v-model="pass" type="password" outlined prepend-icon="fa fa-lock" label="Password"></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-form>
            </v-flex>
            <v-flex md12>
                <v-btn @click="next" class="white--text" color="blue">Save</v-btn>
            </v-flex>
        </v-layout>
    </v-layout>
</template>

<script>
    import axios from 'axios'
    import firebase from 'firebase/app'
    import 'firebase/auth'

    export default {
        name: "step-four",
        data(){
            return {
                id:null,
                dialog:null,
                video:null,
                notEmpty: [
                    v => !!v || 'Email is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
                password: [
                    v => !!v || 'Password is required',
                    (v) => v && v.length > 8 || 'Password must be more than 8 characters',
                ],
                email:null,
                pass:null,
                error:null,
                valid:null,
                fb_config:null,
            };
        },
        mounted() {
            axios.get("http://127.0.0.1:8009/getProjectID").then(res => {
                this.id = res.data;
            });
            axios.get("http://127.0.0.1:8009/getAllConfig").then(res => {
                if (firebase.apps.length)
                    firebase.initializeApp(res.data);
                this.fb_config = res.data;
            });
        },
        methods:{
            next: function () {
                console.log(this.fb_config)
                if (this.valid) {
                    try {
                        firebase.initializeApp(this.fb_config);
                    } catch (e) {
                        console.log("firebase already initialized")
                    }
                    firebase.auth().createUserWithEmailAndPassword(this.email, this.pass).then(res => {
                            this.$router.push("/step/5");
                        console.log(res);
                    }).catch(err => {
                        if (err.code === 'auth/operation-not-allowed')
                            this.error = "PLease make sure you enabled the Auth provider in the firebase Console as we mentioned above ";
                        else
                            this.error = "It seems you are facing a problem, we think that ths email is already exist ";
                        console.log(err);
                    });
                } else {
                    this.error = "Please Fil the inputs";
                }
            }
        }
    }
</script>

<style scoped>

</style>