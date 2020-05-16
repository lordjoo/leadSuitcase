<template>
    <v-content>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col
                        cols="12"
                        sm="8"
                        md="4"
                >
                    <v-card class="elevation-12">
                        <v-layout align-center="" justify-center="true" row wrap>
                            <v-flex md3 xs3 class="text-center">
                                <v-img class="ma-auto mt-4" width="100" src="@/assets/suitcase.svg"></v-img>
                            </v-flex>
                            <v-flex md6 xs6>
                                <p style="font-size: 200%" class="mb-0 font-weight-bold mt-6 pb-0">LeadSuitCase</p>
                            </v-flex>
                        </v-layout>
                        <v-card-text>
                            <v-alert class="mt-2" v-if="error" type="warning">{{ error }}</v-alert>
                            <v-divider/>
                            <v-form v-model="valid">
                                <v-text-field
                                        :rules="emailRules"
                                        label="Login"
                                        name="login"
                                        prepend-icon="person"
                                        type="email"
                                        color="#fb9538"
                                        v-model="email"
                                />

                                <v-text-field
                                        :rules="rules"
                                        id="password"
                                        color="#fb9538"
                                        label="Password"
                                        name="password"
                                        prepend-icon="lock"
                                        type="password"
                                        v-model="pass"
                                />
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn @click="login" class="ma-auto mb-3" outlined large color="#fb9538">Login</v-btn>
                        </v-card-actions>
                    </v-card>
                    <loading :loading="loading"></loading>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import firebase from 'firebase/app'
    import 'firebase/auth'
    import Loading from "./components/loading";

    export default {
        name: "login",
        components: {Loading},
        mounted() {

        },
        data(){
            return {
                email:null,
                pass:null,
                rules: [
                    v => !!v || 'Password is required',
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                valid:null,
                loading:false,
                error:null,
            };
        },
        methods:{
            login:function () {
                if (this.valid){
                    this.loading = true;
                    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=> {
                        firebase.auth().signInWithEmailAndPassword(this.email,this.pass).then( (user) => {
                            this.$store.commit('login',user);
                            this.loading = false;
                            this.error = null;
                            this.$router.push('/lead/home');
                        }).catch(err=>{
                            this.error = err.message;
                            this.loading = false;
                        });
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>