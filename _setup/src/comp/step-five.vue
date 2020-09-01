<template>
    <v-layout class="mb-4" row wrap>
        <v-flex>
            <p class="font-weight-bold" style="font-size: 200%">
                Congratulations your website is now officially ready to deploy
            </p>
            <p style="font-size: 150%">
                * You now can deploy to firebase and start using your website by running <code>npm run deploy</code> in your terminal or cmd
                <br>
                * You now can test it before deploying it by running <code>npm run test</code> in your terminal or cmd
            </p>
            <p style="font-size: 150%">
                to access the Dashboard follow the website domain by /lead/login <br>
                Example : <code>http://domain.com/lead/login</code>
            </p>
        </v-flex>
    </v-layout>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "step-five",
        methods:{
            test:function () {
                axios.post('http://localhost:8009/run-test').then(res=>{
                    console.log('running',res);
                });
            }
        }
    }
</script>

<style scoped>

</style>