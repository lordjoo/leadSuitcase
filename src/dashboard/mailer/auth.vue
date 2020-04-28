<template>
    <section class="events">
        <v-container fluid>
            <v-layout justify-space-between="">
                <p style="font-size: 180%" class="google-font mb-3"><span class="far fa-envelope mr-2"></span>Mailer</p>
                <v-btn @click.stop="dialog = true" class="blue white--text" text dark><span
                        class="fa mr-2 fa-calendar-plus"></span> Make Campaign
                </v-btn>
            </v-layout>
            <loading loading="true"></loading>
        </v-container>
    </section>
</template>

<script>
    import firebase from 'firebase'
    import 'firebase/functions'
    import Loading from "../components/loading";

    export default {
        name: "auth",
        components: {Loading},
        async mounted() {
            let code = this.$route.query.code;
            let _this = this;
            let authorise = firebase.functions().httpsCallable('authoriseWithCode');
            await authorise(code).then(res => {
                if (res.data.msg === 'done'){
                    setTimeout(function(){
                        _this.$router.push('/lead/mailer');
                    },5000);
                }
            });
        }
    }
</script>

<style scoped>

</style>