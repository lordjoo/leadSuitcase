<template>
    <section class="blog-page">

<!--        <v-section :style="{backgroundColor: $vuetify.theme.dark ? '#212121':'#F9F9F9'}">-->
<!--            <v-container fluid>-->
<!--                <v-layout wrap row >-->
<!--                    <v-flex md12 xs12 sm12>-->
<!--                        <p :style="{fontSize:'200%',color:$config.style.color}" class="google-font">-->
<!--                            Announcements-->
<!--                        </p>-->
<!--                    </v-flex>-->
<!--                    <v-flex md4 xs12>-->
<!--                        <announcement/>-->
<!--                    </v-flex>-->
<!--                </v-layout>-->
<!--            </v-container>-->
<!--        </v-section>-->

        <v-section>
            <v-container fluid>
                <v-layout v-if="posts" wrap row >
                    <v-flex md12 xs12 sm12>
                        <p :style="{fontSize:'200%',color:$config.style.color}" class="google-font">
                            Announcements
                        </p>
                    </v-flex>
                    <v-flex v-for="post in posts" :key="post.name" md4 xs12>
                        <post-card :post='post' />
                    </v-flex>
                </v-layout>
                <v-layout justify-center="" v-else wrap row >
                    <p>Coming Soon</p>
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
    export default {
        name: "blog",
        computed:{
            posts:function(){
                return this.$store.state.posts;
            },
            announcements:function(){
                return this.$store.state.announcements;
            },
        },
        components: {PostCard, AppFooter, VSection}
    }
</script>

<style scoped>

</style>