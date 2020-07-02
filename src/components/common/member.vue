<template>
    <div class="membeer-card">
        <v-card v-if="!mobile" elevation="5" :color="$vuetify.theme.dark?'grey darken-3':''">
            <v-layout fill-height="" justify-center="" align-center="" class="card-header py-6">
                <v-avatar width="150" height="150">
                    <img :src="member.photo"
                         :alt="member.name"
                    >
                </v-avatar>
            </v-layout>
            <v-card-title :class="$vuetify.theme.dark?'grey darken-4 justify-center':'grey lighten-4 justify-center'">
                {{member.name}}
            </v-card-title>
            <v-card-subtitle :class="$vuetify.theme.dark?'grey darken-4 d-flex justify-center align-center text-center flex-column':'grey lighten-4 d-flex justify-center align-center text-center flex-column'">
                <span>{{member.role}}</span>
                <div class="btns mt-2">
                    <v-btn v-if="member.email" target="_blank" :href="'mailto:'+member.email" small class="mr-2 white--text" fab :color="$config.style.color"><v-icon>mdi mdi-email</v-icon></v-btn>
                    <v-btn v-if="member.twitter" target="_blank" :href="member.twitter" small class="mr-2 white--text" fab color="blue"><v-icon>mdi mdi-twitter</v-icon></v-btn>
                </div>
            </v-card-subtitle>
        </v-card>
        <v-list-item v-else :class="$vuetify.theme.dark?'grey darken-3 elevation-2':'white elevation-2'">
            <v-list-item-avatar width="70" height="70">
                <v-img width="70" height="70" :lazy-src="member.photo" :src="member.photo" />
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>{{member.name}}</v-list-item-title>
                <v-list-item-subtitle>{{member.role}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
                <v-btn v-if="member.email" elevation="0" target="_blank" :href="'mailto:'+member.email" small class="white--text" fab :color="$config.style.color"><v-icon>mdi mdi-email</v-icon></v-btn>
                <v-btn v-if="member.twitter" elevation="0" target="_blank" :href="member.twitter" small class="mt-2 white--text" fab color="blue"><v-icon>mdi mdi-twitter</v-icon></v-btn>
            </v-list-item-action>
        </v-list-item>
    </div>
</template>

<script>
    export default {
        props:{
            member:{
                required:true
            }
        },
        data(){
            return {
                mobile:false,
            };
        },
        mounted(){
            if (window.innerWidth <= 586){
                this.mobile = true;
            } else {
                this.mobile = false;
            }
        },
        name: "member"
    }
</script>

<style scoped>

</style>