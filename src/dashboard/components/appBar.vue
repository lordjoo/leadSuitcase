<template>
    <v-menu
                v-model="menu"
                :nudge-width="200"
                offset-x
                :close-on-content-click=false bottom>
            <template v-slot:activator="{ on }">
                <v-btn v-on="on" class="mx-2" fab dark small color="blue">
                    <v-icon size="40">account_circle</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-list>
                    <v-list-item>
                        <v-list-item-avatar>
                            <img src="@/assets/logo.png" alt="John">
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>{{ $config.name }}</v-list-item-title>
                            <v-list-item-subtitle>{{ $config.name }} Administrator</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                    <v-list-item to="/">
                        <v-list-item-avatar>
                            <span class="fa fa-home"></span>
                        </v-list-item-avatar>
                        <v-list-item-title>
                            Home Page
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item target="_blank" href="https://leadsuitcase.ml">
                        <v-list-item-avatar>
                            <span class="fa fa-code"></span>
                        </v-list-item-avatar>
                        <v-list-item-title>
                            Documentation
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item target="_blank" href="https://leadsuitcase.ml">
                        <v-list-item-avatar>
                            <span class="fa fa-comment"></span>
                        </v-list-item-avatar>
                        <v-list-item-title>
                            Feedback
                        </v-list-item-title>
                    </v-list-item>

                </v-list>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="menu = false">Close</v-btn>
                    <v-btn color="primary" text @click="logout">Log Out</v-btn>
                </v-card-actions>
            </v-card>
        </v-menu>
</template>

<script>
    import firebase from 'firebase'
    import 'firebase/auth'
    export default {
        name: "appBar",
        data(){
            return {
                menu: false,
            };
        },
        methods:{
            logout:function () {
                firebase.auth().signOut().then(()=>{
                    this.$store.commit('logout');
                    this.$router.push('/');
                })
            }
        }
    }
</script>

<style scoped>

</style>