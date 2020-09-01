<template>
    <v-layout class="mb-4" row wrap>
        <v-flex md12>
            <p style="font-size: 130%" class="font-weight-regular">
                in this step we will walk you through enabling the Mailer Function in your website 
            </p>
            <ol style="font-size: 130%">
               <li>Go to <a target="_blank" :href="'https://console.developers.google.com/apis/credentials?project='+getProjectID">Google APIs Console</a></li>
               <li>Then Follow the steps in this video <a target="_blank" href="https://leadsuitcase.ml/installation/#mailer-setup">Here</a></li>
               <li>After You Paste The QAuth2 Client JSON click Authorise then Login with Your Club Email</li>
            </ol>
        </v-flex>
        <v-divider/>

        <v-flex md12>
            <v-layout v-if='client' row wrap class="mt-3">
                <v-flex v-if="error" md12 class="mt-3">
                    <v-alert color="red darken-2" type="error">
                        {{ error }}
                    </v-alert>
                </v-flex>
                <v-flex md12>
                    <v-form v-model="valid">
                        <v-layout row>
                            <v-flex md12>
                                <v-textarea v-model="c_data" class="mr-4 ml-4" :rules="notEmpty" outlined label="Client JSON"></v-textarea>
                            </v-flex>
                        </v-layout>
                    </v-form>
                </v-flex>
            </v-layout>
        </v-flex>
        <v-divider/>
        <v-flex md12>
            <v-layout row wrap class='mt-3'>
                <v-flex class="mb-3" md12>
                    <v-btn @click='getAuth'>Authrise</v-btn>
                </v-flex>
        </v-layout>
        </v-flex>
        <loading :loading="loading"/>
    </v-layout>
</template>

<script>

    import axios from 'axios'
    import Loading from "./loading";

    export default {
        name: "mailer-setup",
        components: {Loading},
        data(){
            return {
                client:true,
                valid:null,
                error:null,
                c_data:null,
                notEmpty: [
                    v => !!v || 'This Field is required',
                ],
                loading:false,
                getProjectID:null,
            };
        },
        async mounted(){
            let res = await axios.get("http://127.0.0.1:8009/getProjectID");
            this.getProjectID = res.data; 
        },
        methods:{
            getAuth: async function () {
                if (this.c_data == null || this.c_data.length == 0){
                    this.error = 'Please Paste The Client JSON inn the Text Area';
                    return;
                }
                this.loading = true;
                await axios.post("http://127.0.0.1:8009/addClient",{
                    client:this.c_data
                });
                this.client = false;
                setTimeout(async function () {
                    let res = await axios.get("http://127.0.0.1:8009/getAuthURL");
                    let link = res.data;
                    location.replace(link);
                    console.log(link);
                },1000);
            },
        }
    }
</script>

<style scoped>

</style>