<template>
    <section class="about-page">
        <div class="page-content">
            <v-section class="mt-1">
                <v-container fluid>
                    <v-layout wrap align-center="true" justify-center="true" row fill-height="true">
                        <v-flex xs12 md4 class="">
                            <p style="font-size: 200%" class="google-fonts">About {{ $config.name }}</p>
                            <v-img class="mb-8" src="../assets/img/aboutV.png" lazy-src="../assets/img/aboutV.png" ></v-img>
                        </v-flex>
                        <v-flex xs12 md8 class="">
                            <p class="google-font">
                                {{ $config.info.about }}
                            </p>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-section>

            <v-section :style="{backgroundColor: $vuetify.theme.dark ? '#212121':'#F9F9F9'}" >
                <guidelines></guidelines>
            </v-section>

            <v-section :style="{backgroundColor: $vuetify.theme.dark ? '#212121':'#F9F9F9'}" >
                <code-of-conduct />
            </v-section>

            <v-section :style="{backgroundColor: $vuetify.theme.dark ? '#212121':'#F9F9F9'}" >
                <anti-Harassment />
            </v-section>

        </div>
        <v-section>
            <app-footer />
        </v-section>
    </section>
</template>

<script>
    import AppFooter from "../components/common/appFooter";
    import VSection from "../components/common/v-section";
    import CodeOfConduct from "../components/about/codeOfConduct";
    import Guidelines from "../components/about/guidelines";
    import AntiHarassment from "../components/about/antiHarassment";
    export default {
        name: "about",
        components: {AntiHarassment, Guidelines, CodeOfConduct, VSection, AppFooter}
    }
</script>

<style scoped>

</style>