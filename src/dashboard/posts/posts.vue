<template>
    <section class="posts">
        <v-container fluid>
            <v-layout justify-space-between="">
                <p style="font-size: 180%" class="google-font mb-3"><span class="fa fa-blog"></span> Manage
                    {{ $route.meta.name }}</p>
                <v-btn :to="{name:'dash.blog.add'}" class="blue white--text" text dark><span
                        class="fa mr-2 fa-calendar-plus"></span> Add Post
                </v-btn>
            </v-layout>
            <!-- Posts Table -->
            <v-layout wrap row fill-height="true">
                <v-flex md12>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-left">Post Title</th>
                                <th class="text-left">Post Tag</th>
                                <th class="text-left">Post Photo</th>
                                <th class="text-left">View Post</th>
                                <th class="text-left">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="post in posts" :key="post.name">
                                <td>{{ post.title }}</td>
                                <td>{{ post.tag }}</td>
                                <td>
                                    <v-img height="100" width="100" :src="post.photo" />
                                </td>
                                <td>
                                    <v-btn :to="{name:'blog.read', params:{slug:post.slug}}" class="orange darken-4 mr-2 white--text mx-2" fab dark small text><span
                                            class="fa fa-eye"></span></v-btn>
                                </td>
                                <td>
                                    <div class="actions d-flex">
                                        <v-btn :to="{name:'dash.blog.edit',params:{id:post.id}}" class="blue mr-2 white--text mx-2" fab dark small text><span
                                                class="fa fa-edit"></span></v-btn>
                                        <v-btn @click="deletePost(post.id)" class="red darken-2 white--text mx-2" fab dark small text><span
                                                class="fa fa-trash"></span></v-btn>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-flex>
                <empty v-if="posts.length === 0" text="You didn't make any events yet."></empty>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
    import Empty from "../components/empty";
    import 'firebase/firestore'
    import firebase from 'firebase/app'


    export default {
        name: "posts",
        components: {Empty},
        mounted(){
            if (!this.$store.state.lead){
                this.$router.push('/lead/login');
            }
        },
        methods:{
            deletePost: async function (id) {
                await firebase.firestore().collection('posts').doc(id).delete();
            }
        },
        computed:{
            posts: function () {
                return this.$store.state.posts;
            }
        },
        data(){
            return {

            };
        },
    }
</script>

<style scoped>

</style>