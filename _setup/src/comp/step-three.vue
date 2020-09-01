<template>
    <v-layout class="mb-4" row wrap>
        <v-flex v-if="error" md12>
            <v-alert color="red darken-2" type="error">
                {{ error }}
            </v-alert>
        </v-flex>

        <v-flex md12>
            <v-form v-model="valid">
                <v-flex md12 class="mt-2">
                    <v-text-field outlined hint="Like DSC MUST , GDG 6 October" v-model="name" label="Chapter Name * "/>
                </v-flex>
                <v-flex md12>
                    <v-label>
                        Chapter About Info
                        <v-dialog v-model="dialogAbout" width="1000">
                            <template v-slot:activator="{ on }">
                                <v-btn color="blue darken-3" v-on="on">
                                    Example
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-text class="py-0 px-0">
                                    <v-img src="@/assets/aboutSection.png"></v-img>
                                </v-card-text>
                                <v-divider></v-divider>
                            </v-card>
                        </v-dialog>
                    </v-label>
                    <v-textarea :rules="required" class="mt-4" outlined label="Chapter About Info *"
                                v-model="about"></v-textarea>
                </v-flex>
                <v-flex class="mt-4" md12>
                    <v-label>
                        Website Header
                        <v-dialog v-model="dialog" width="1000">
                            <template v-slot:activator="{ on }">
                                <v-btn color="blue darken-3" v-on="on">
                                    Example
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-text>
                                    <v-img src="@/assets/header.png"></v-img>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" text @click="dialog = false">
                                        Close
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-label>
                    <v-textarea :rules="required" class="mt-4" outlined height="70" label="Header One *"
                                v-model="header.one"></v-textarea>
                    <v-textarea outlined height="70" label="Header Two" v-model="header.two"></v-textarea>
                </v-flex>
                <!-- colors section-->
                <v-flex class="mb-4" md12>
                    <v-label>
                        Website main Color
                    </v-label>
                </v-flex>
                <v-flex md12>
                    <v-btn v-bind:outlined="color === '#DB4437'" @click="color = '#DB4437'" color="#DB4437" large
                           class="mr-2">Red
                    </v-btn>
                    <v-btn v-bind:outlined="color === '#F4B400'" @click="color = '#F4B400'" color="#F4B400" large
                           class="mr-2">Yellow
                    </v-btn>
                    <v-btn v-bind:outlined="color === '#4285f4'" @click="color = '#4285f4'" color="#4285f4" large
                           class="mr-2">Blue
                    </v-btn>
                    <v-btn v-bind:outlined="color === '#0F9D58'" @click="color = '#0F9D58'" color="#0F9D58" large
                           class="mr-2">Green
                    </v-btn>
                </v-flex>

                <!-- social section-->
                <v-flex md12 class="mt-8">
                    <v-label>
                        Social media links
                    </v-label>
                </v-flex>
                <v-flex class="mt-4" md12>
                    <v-text-field v-model="fb" outlined prepend-icon="fab fa-facebook-f"
                                  label="Facebook Page"></v-text-field>
                    <v-text-field v-model="tw" outlined prepend-icon="fab fa-twitter"
                                  label="Twitter Profile"></v-text-field>
                    <v-text-field v-model="yt" outlined prepend-icon="fab fa-youtube"
                                  label="Youtube Channel"></v-text-field>
                    <v-text-field v-model="mt" outlined prepend-icon="fab fa-meetup" label="Meetup URL"></v-text-field>
                </v-flex>

                <!-- other links section-->
                <v-flex md12 class="mt-4 mb-4">
                    <v-label>
                        Other links
                    </v-label>
                </v-flex>
                <v-flex md12>
                    <v-text-field :rules="required" v-model="program" outlined label="Program Link *"></v-text-field>
                    <v-text-field v-model="joinUs" outlined label="Join Us Form Link"></v-text-field>
                </v-flex>
            </v-form>
        </v-flex>

        <v-flex class="mt-4" md12>
            <v-btn color="primary" @click="next">
                Continue
            </v-btn>
        </v-flex>
        <loading :loading="loading"></loading>
    </v-layout>
</template>

<script>
    import axios from 'axios'
    import Loading from "./loading";

    export default {
        name: "step-three",
        components: {Loading},        
        data() {
            return {
                loading:false,
                color: "#4285f4",
                name: null,
                fb: null,
                tw: null,
                dialog: null,
                dialogAbout: null,
                yt: null,
                mt: null,
                program: null,
                joinUs: null,
                about: null,
                header: {
                    one: "",
                    two: ""
                },
                valid: null,
                error: null,
                required: [
                    v => !!v || 'This Field is required',
                ]
            };

        },
        methods: {
            next: function () {
                if (this.valid){
                    let config = {
                        name: this.name,
                        style: {
                            color: this.color
                        },
                        info: {
                            about: this.about,
                        },
                        header: {
                            sub1: this.header.one,
                            sub2: this.header.two
                        },
                        social: {
                            fb: this.fb,
                            meetup: this.mt,
                            twitter: this.tw,
                            yt: this.yt
                        },
                        links: {
                            DSCProgramWebsite: this.program,
                            joinUsForm: this.joinUs
                        }
                    };
                    this.loading = true;
                    config = JSON.stringify(config);
                    let _this = this;
                    setTimeout(() => {
                        axios.post("http://127.0.0.1:8009/project/config", {
                            config: config
                        }).then((res) => {
                            _this.loading = false;
                            _this.loading = false;
                            let data = res.data;
                            if (data.status === "failed"){
                                _this.error = data.msg;
                            } else {
                                _this.error = null;
                                _this.$router.push("/step/4");
                            }
                        });
                    }, 1200);
                } else {
                    window.scroll(0,0)
                    this.error = "Please fil the required Fields";
                }
            }
        },
    }
</script>

<style scoped>

</style>