<template>
    <v-layout class="mb-4" row wrap>
        <v-flex md11>
            <loading loading="true"></loading>
        </v-flex>
    </v-layout>
</template>

<script>
    import axios from 'axios'
    import Loading from "./loading";
    export default {
        name: "auth",
        components: {Loading},
        mounted() {
            let token = this.$route.query.code;
            console.log(token);
            axios.post('http://127.0.0.1:8009/addAuthToken',{code:token}).then(()=>{
                this.$router.push('/step/6');
            }).catch(err => console.log(err));
        }
    }
</script>

<style scoped>

</style>