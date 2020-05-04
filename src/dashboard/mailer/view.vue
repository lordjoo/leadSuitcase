<template>
    <section class="events">
        <v-container fluid>
            <v-layout wrap justify-start="" row>
                <v-flex md4 xs11>
                    <p style="font-size: 180%" class="google-font google-font ml-4 mb-3">
                        <span class="fa fa-envelope-open-text mr-2"></span>View Mailer Campaign</p>
                </v-flex>
            </v-layout>
            <v-layout wrap justify-center="" row>
                <v-flex md11 xs11>
                    <p style="font-size: 110%" class="google-font mb-1">Campaign Title: {{ camp.name }}</p>
                    <p style="font-size: 110%" class="google-font mb-1 mt-0">Email Subject: {{ camp.email_subject }}</p>
                    <p style="font-size: 110%" class="google-font m-1 mt-0">Status: {{ camp.status }}</p>
                    <v-layout wrap row fill-height="true">
                        <v-flex md12>
                            <p style="font-size: 110%" class="google-font mb-1 mt-0">Logs</p>
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                    <tr>
                                        <th class="text-left">Email</th>
                                        <th class="text-left">Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="mail in camp.log" :key="mail.email">
                                        <td>
                                            {{mail.email}}
                                        </td>
                                        <td class="">
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on }">
                                                    <v-btn color="white" text dark v-on="on">
                                                        <i v-if="mail.status === 'Successful'"
                                                           class="fa green--text fa-2x fa-check-circle"></i>
                                                        <i v-else-if="mail.status === 'Pending'"
                                                           class="fa blue--text fa-2x fa-paper-plane"></i>
                                                        <i v-else-if="mail.status === 'Failed'"
                                                           class="fa orange--text fa-2x fa-exclamation-triangle"></i>
                                                    </v-btn>
                                                </template>
                                                <span>{{ mail.status }}</span>
                                            </v-tooltip>
                                        </td>
                                    </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
    import firebase from 'firebase'
    import 'firebase/firestore'

    export default {
        name: "campaign-view",
        data() {
            return {
                camp: null,
            };
        },
        firestore: function () {
            return {
                camp: firebase.firestore().collection('mailer').doc(this.$route.params.id)
            };
        },
        async mounted() {
            if (!this.$store.state.lead){
                this.$store.$router.push('/lead/login');
            }
            this.camp = await firebase.firestore().collection('mailer').doc(this.$route.params.id).get();
            this.camp = this.camp.data();
        },
    }
</script>

<style scoped>

</style>