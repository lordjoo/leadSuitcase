<template>
    <section id="home">
        <v-container fluid class="my-4">
            <v-layout wrap align-center="true" justify-center="true" row fill-height="true" class="">
                <v-flex xs11 md11 >
                    <top-header />
                </v-flex>
            </v-layout>
        </v-container>

        <v-container fluid
                     :style="{backgroundColor: $vuetify.theme.dark ? '#212121':'#F9F9F9'}" >
            <v-layout wrap align-center="true" justify-center="true" row fill-height="true">
                <v-flex xs10 md10 class="">
                    <whatWeDo />
                </v-flex>
            </v-layout>
        </v-container>

        <v-container fluid :style="{background:$config.style.color}" >
            <v-layout wrap align-center="true" justify-center="true" row fill-height="true">
                <v-flex xs10 md10 class="">
                    <aboutDSC />
                </v-flex>
            </v-layout>
        </v-container>

        <v-container fluid >
            <v-layout wrap align-center="true" justify-center="true" row fill-height="true">
                <v-flex xs10 md10 class="">
                    <r-events></r-events>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container fluid :style="{backgroundColor: $vuetify.theme.dark ? '#212121':'#F9F9F9'}" >
            <v-layout wrap align-center="true" justify-center="true" row fill-height="true">
                <v-flex xs10 md10 class="">
                    <solution-challenge></solution-challenge>
                </v-flex>
            </v-layout>
        </v-container>

        <v-section>
            <app-footer></app-footer>
        </v-section>
    </section>
</template>

<script>
    import TopHeader from "../components/home/topHeader";
    import WhatWeDo from "../components/home/whatWeDo";
    import AboutDSC from "../components/home/aboutDSC";
    import REvents from "../components/home/rEvents";
    import SolutionChallenge from "../components/home/solutionChallenge";
    import AppFooter from "../components/common/appFooter";
    import VSection from "../components/common/v-section";
    export default {
        name: "home",
        components: {
            VSection,
            AppFooter,
            SolutionChallenge,
            REvents,
            AboutDSC,
            WhatWeDo,
            TopHeader
        }
    }
</script>

<style scoped>

</style>