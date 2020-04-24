<template>
    <v-card class="mr-2 ml-2 mb-2">
        <v-img height="200px" class="white--text align-end" :src="post.photo">
            <v-card-title style="background-color: rgba(0,0,0,0.5)">
                <div class="google-font m-0">
                   {{ post.title }}
                </div>
            </v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">
            <p>
                {{ post.desc }}
            </p>
        </v-card-subtitle>
        <v-card-actions>
            <v-spacer />
            <v-btn :to="{name:'blog.read',params:{slug:post.slug}}" text :color="$config.style.color">
                Read more
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "postCard",
        props:{
            post:{ required:true },
        }
    }
</script>

<style scoped>

</style>