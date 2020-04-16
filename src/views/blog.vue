<template>
    <section class="blog-page">

        <v-section style="background-color: #F9F9F9">
            <v-container fluid>
                <v-layout wrap row >
                    <v-flex md12 xs12 sm12>
                        <p :style="{fontSize:'200%',color:$config.style.color}" class="google-font">
                            Announcements
                        </p>
                    </v-flex>
                    <v-flex md4 xs12>
                        <announcement/>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-section>

        <v-section>
            <v-container fluid>
                <v-layout row wrap>
                    <v-flex md12 xs12 sm12>
                        <v-layout row wrap>
                            <v-flex md4 sm12 xs12>
                                <post-card/>
                            </v-flex>
                            <v-flex md4 sm12 xs12>
                                <post-card/>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-section>

        <v-section>
            <app-footer />
        </v-section>
    </section>
</template>

<script>
    import VSection from "../components/common/v-section";
    import AppFooter from "../components/common/appFooter";
    import PostCard from "../components/blog/postCard";
    import Announcement from "../components/blog/announcement";
    export default {
        name: "blog",
        components: {PostCard, AppFooter, VSection,Announcement}
    }
</script>

<style scoped>

</style>