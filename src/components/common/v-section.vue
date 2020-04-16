<template>
    <v-container fluid >
        <v-layout wrap align-center="true" justify-center="true" row fill-height="true">
            <v-flex xs10 md10 class="">
                <slot />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "v-section",
    }
</script>

<style scoped>

</style>