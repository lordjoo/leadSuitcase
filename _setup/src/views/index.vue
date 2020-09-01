<template>
    <v-container fluid class="grey fill-height darken-4">
        <v-layout align-content-center="" row rwap justify-center="">
            <v-flex md10>
                <v-stepper class="white--text" dark v-model="e1">
                    <v-stepper-header>
                        <v-stepper-step color="#fb9538" :complete="e1 > 1" step="1">Welcome</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step color="#fb9538" :complete="e1 > 2" step="2">Firebase Setup</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step color="#fb9538" :complete="e1 > 3" step="3">Website Setup</v-stepper-step>

                        <v-divider></v-divider>
                        <v-stepper-step color="#fb9538" :complete="e1 > 4" step="4">Login Credentials</v-stepper-step>

                        <v-divider></v-divider>
                        <v-stepper-step color="#fb9538" step="5">Miler Setup</v-stepper-step>

                        <v-divider></v-divider>
                        <v-stepper-step color="#fb9538" step="6">Finish</v-stepper-step>

                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <step-one></step-one>
                            <v-btn color="#fb9538" @click="e1 = 2">
                                Continue
                            </v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="2">
                            <v-layout justify-center="" row wrap>
                                <v-flex md11>
                                    <step-two v-on:next="goTo(3)"/>
                                </v-flex>
                            </v-layout>
                        </v-stepper-content>

                        <v-stepper-content step="3">
                            <v-layout justify-center="" row wrap>
                                <v-flex md11>
                                    <step-three v-on:next="goTo(4)"/>
                                </v-flex>
                            </v-layout>
                        </v-stepper-content>
                        <v-stepper-content step="4">
                            <v-layout justify-center="" row wrap>
                                <v-flex md11>
                                    <step-four v-on:next="goTo(5)"/>
                                </v-flex>
                            </v-layout>
                        </v-stepper-content>

                        <v-stepper-content step="5">
                            <v-layout justify-center="" row wrap>
                                <v-flex md11>
                                    <mailer-setup />
                                </v-flex>
                            </v-layout>
                        </v-stepper-content>

                        <v-stepper-content step="6">
                            <v-layout justify-center="" row wrap>
                                <v-flex md11>
                                    <step-five v-on:next="goTo(5)"/>
                                </v-flex>
                            </v-layout>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>

    import StepOne from "../comp/step-one";
    import MailerSetup from "../comp/mailer-setup";
    import StepTwo from "../comp/step-two";
    import StepThree from "../comp/step-three";
    import StepFour from "../comp/step-four";
    import StepFive from "../comp/step-five";

    export default {
        name: 'Wizard',
        components: {StepFive, StepFour, StepThree,MailerSetup, StepTwo, StepOne},

        data() {
            return {
                e1: 5,
            }
        },
        methods: {
            goTo: function (pos) {
                this.e1 = pos;
            }
        },
    };
</script>
