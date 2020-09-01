<template>
    <v-layout class="mb-4" row wrap>
        <v-flex v-if="error" md12>
            <v-alert color="red darken-2" type="error">
                {{ error }}
            </v-alert>
        </v-flex>
        <v-flex md6>
            <v-layout class="ml-2 mr-2" row wrap>
                <v-flex md12>
                <h2 class="mb-4">Firebase Project ID</h2>
                <v-form v-model="valid">
                    <v-flex class="mb-3">
                        <v-text-field :rules="required" outlined hint="The Project UNIQUE ID" v-model="p_id" label="Google Cloud Project ID"/>
                    </v-flex>
                </v-form>
                </v-flex>
                <v-flex md12>
                    <v-btn color="primary" @click="useCurrent">
                        Use a current project
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex md6>
            <v-layout row>
                <p>
                    Go To <a href="https://console.firebase.google.com/">console.firebase.google.com</a>
                    and Login with Your Club Gmail account <br>
                    Then Create a new Project, Write your Project Name Ex: DSC MUST,
                    and choose a unique id for your project Then Click Continue and create your project <br>
                    After you finished creating your project come back here and put your project id here
                </p>
            </v-layout>
        </v-flex>
        <loading :loading="loading"></loading>
    </v-layout>
</template>

<script>
    import axios from 'axios'
    import Loading from "./loading";
    export default {
        name: "step-two",
        components: {Loading},
         data(){
            return {
                p_name:null,
                p_id:null,
                valid:null,
                error:null,
                loading:false,
                required:[
                    v => !!v || 'This Field is required',
                ]
            }
        },
        methods: {
            useCurrent:function () {
              if (this.valid) {
                  this.loading = true;
                  axios.post("http://127.0.0.1:8009/firebase/init", {p_id:this.p_id}).then(res=>{
                      this.loading = false;
                      let data = res.data;
                      if (data.status === "failed"){
                          this.error = data.msg;
                      } else {
                          this.error = null;
                          this.$router.push("/step/3");
                      }
                  }).catch(err => {
                      this.loading = false;
                      alert("An Error Happened, Please Submit the Problem in https://leadsuitcase.ml");
                      console.log(err);
                  });
              }  
            },
            next: function () {
                if (this.valid){
                    this.loading = true;
                    this.p_id.replace(/\s+/g, '-').toLowerCase();
                    axios.post('http://127.0.0.1:8009/firebase/create',{
                        p_name:this.p_name,
                        p_id:this.p_id
                    }).then(res => {
                        this.loading = false;
                        let data = res.data;
                        if (data.status === "failed"){
                            this.error = data.msg;
                        } else {
                            this.error = null;
                            this.$router.push("/step/3");
                        }
                    }).catch(err => {
                        this.loading = false;
                        alert("An Error Happened, Please Submit the Problem in https://leadsuitcase.ml");
                        console.log(err);
                    });
                } else {
                    this.error = "Please fill the inputs"
                }
            }
        }

    }
</script>

<style scoped>

</style>