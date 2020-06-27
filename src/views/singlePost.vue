<template>
    <section class="blog-page">

        <v-section :style="{backgroundColor: $vuetify.theme.dark ? '#000 ':'#F9F9F9'}"   >
            <v-card>
                <v-card-title>
                    <p class="google-fonts">{{ post.title }}</p>
                </v-card-title>
                <v-card-subtitle>
                    <v-btn
                        :color="$config.style.color"
                        class="ma-2 white--text"
                    >
                        <span class="fa fa-tag mr-1"></span>
                        {{post.tag}}
                    </v-btn>
                </v-card-subtitle>
                <v-card-text>
                    <v-img height="400px" :src="post.photo" />
                    <div class="body mt-4" v-html="post.body"></div>
                </v-card-text>
            </v-card>
        </v-section>

        <v-section>
            <app-footer />
        </v-section>
    </section>
</template>

<script>
    import VSection from "../components/common/v-section";
    import AppFooter from "../components/common/appFooter";
    export default {
        name: "singlPost",
        computed:{
            post:function(){
                return this.$store.state.posts.find(this.getId);
            },
        },
        methods:{
            getId:function(post){
                return post.slug === this.$route.params.slug;
            },
        },
        components: {AppFooter, VSection}
    }
</script>

<style scoped>

</style>