<template>
    <v-layout wrap row>
        <v-flex md12 class="mt-4 text-center">
            <v-img class="ma-auto" width="100" src="@/assets/img/ufo.png"></v-img>
            <p style="font-size: 140%" class="google-font mt-2">{{text}}</p>
            <slot/>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "empty",
        props:{
            text:{
                required:true,
            }
        }
    }
</script>

<style scoped>

</style>