<template>
    <main class="page">
        <top-bar></top-bar>

        <v-content class="pb-0">
            <v-slide-y-reverse-transition>
                <router-view/>
            </v-slide-y-reverse-transition>
        </v-content>

        <bottom-nav></bottom-nav>
        <v-dialog v-model="dialog" max-width="420">
            <v-card>
                <v-card-title class="headline">
                    Ask For Notifications Permission</v-card-title>
                <v-card-text>
                    <p>
                        <v-img style="float: left; margin-right: 10px" width="40" src="@/assets/img/badge.png"></v-img>
                        So we could reach to you easily and notify you with our latest activities , Pleas Allow us To send
                        you Notifications about any new activity we made
                    </p>

                    <v-btn color="green darken-1" class="white--text" @click="askForPer">Allow</v-btn>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false"
                    >
                        Cancel
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-btn @click="dialog = true" v-if="notificationOff" fixed color="white" fab bottom right class="v-btn--example">
            <img alt="" style="width: 40px" src="@/assets/img/badge.png" />
        </v-btn>
    </main>
</template>

<script>
    import TopBar from "../components/navigator/topBar";
    import BottomNav from "../components/navigator/bottomNav";
    import firebase from 'firebase/app'
    import 'firebase/functions'
    import {debounce} from 'debounce'

    export default {
        name: "homeLayout",
        components: {BottomNav, TopBar},
        data: function () {
            return {
                dialog: false,
                notificationOff: (Notification.permission !== "granted"),
            }
        },
        async mounted() {
            if (('Notification' in window))
                if (Notification.permission === "granted") {
                    console.log('permission granted');
                } else {
                    this.debounceShow();
                }
        },
        methods: {
            debounceShow: debounce(function () {
                this.dialog = true;
            }, 5500),
            askForPer: async function () {
                const messaging = this.$messaging;
                await messaging.requestPermission();
                const token = await messaging.getToken();
                console.log('User Token Is :', token);
                let sub = firebase.functions().httpsCallable('subscribe');
                let res = await sub(token);
                console.log(res);
                this.dialog = false

            }
        }
    }
</script>

<style scoped>

</style>