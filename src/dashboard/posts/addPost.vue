<template>
    <section class="posts">
        <v-container fluid>
            <v-layout justify-space-between="">
                <p style="font-size: 180%" class="google-font mb-3"><span class="fa fa-blog"></span> Manage
                    {{ $route.meta.name }}</p>
            </v-layout>
            <v-container>
                <v-form v-model="valid">
                <v-layout row wrap>
                    <v-flex md12>
                        <v-alert v-if="error" type="warning">{{ error }}</v-alert>
                    </v-flex>
                    <v-flex md4 xs12 sm12>
                        <v-text-field :rules="rules" v-model="newPost.title" color="#3498db"
                                      label="Post Title"></v-text-field>
                    </v-flex>
                    <v-flex md4 xs12 sm12>
                        <v-text-field class="ml-2" :rules="rules" v-model="newPost.tag" color="#3498db"
                                      label="Post Tag"></v-text-field>
                    </v-flex>
                    <v-flex md12 xs12 sm12>
                        <v-file-input id="postPhoto" color="#3498db"
                                      label="Post Thumbnail"></v-file-input>
                    </v-flex>
                    <v-flex md12 xs12 sm12>
                        <v-textarea
                                color="#3498db"
                                outlined
                                max="50"
                                auto-grow
                                name="Short Description "
                                label="Short Description "
                                v-model="newPost.desc"
                                :rules="rules"
                        ></v-textarea>
                    </v-flex>

                    <v-flex md12 xs12 sm12>
                        <tinymce id="tmc" v-model="newPost.body"></tinymce>
                    </v-flex>
                </v-layout>
                <v-layout justify-end="true" class='mt-4'>
                    <v-btn @click.prevent="addPost" color="#3498db" type="submit">ADD</v-btn>
                </v-layout>
                </v-form>
            </v-container>
        </v-container>
        <loading :loading="loading"></loading>
    </section>
</template>
<script>
    import tinymce from '../components/tinyMce'
    import Loading from "../components/loading";
    import firebase from 'firebase/app'
    import $ from 'jquery'
    import 'firebase/firestore'
    import 'firebase/storage'
    import {convertToSlug} from '../../helpers'
    export default {
        name: "addPost",
        components: {Loading,tinymce},
        methods:{
            addPost: async function () {
                if (this.valid) {
                    this.loading = true;
                    let _postObj = this.newPost;
                    let file = $('#postPhoto').prop('files')[0];
                    if (file) {
                        let photoRef = firebase.storage().ref().child('postPhotos').child(this.newPost.name + '.' + file.name.split('.').pop());
                        const photoUploadTask = await photoRef.put(file);
                        _postObj.photo = await photoUploadTask.ref.getDownloadURL();
                    } else {
                        this.error = "Photo is required";
                        return;
                    }
                    _postObj.date = firebase.firestore.Timestamp.now();
                    _postObj.slug = convertToSlug(this.newPost.title);
                    _postObj.isAnnouncement = false;
                    await firebase.firestore().collection('posts').add(_postObj);
                    this.newPost = {};
                    this.loading = false;
                    await this.$router.push('/lead/blog');
                } else {
                    this.error = "There are required Fields You miss";
                }
            }
        },
        data() {
            return {
                valid: null,
                loading:false,
                newPost: {},
                error:null,
                data:'',
                rules: [
                    v => !!v || 'Field is required',
                ],
            }
        },
    }
</script>

<style scoped>

</style>