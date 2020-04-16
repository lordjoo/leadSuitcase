<template>
    <v-container>
        <v-layout align-center="true" justify-center="true" row fill-height="true" >
            <v-flex xl12 md12 sm12 class="pa-2">
                <p class="google-font text-center" style="font-size: 200%">Recent Events</p>
                <p style="font-size: 100%" class="google-font text-center m-0 p-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus cum, deserunt dolore ex explicabo fugit iusto laborum mollitia numquam quas sit, temporibus voluptas? Laborum.
                </p>
            </v-flex>
        </v-layout>
        <v-layout row fill-height="true" >
            <v-flex sm12 md4 lg4>
                <event-card></event-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import EventCard from "../events/eventCard";
    export default {
        name: "rEvents",
        components: {EventCard}
    }
</script>

<style scoped>

</style>