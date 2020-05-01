<template>
    <section class="page">
        <v-app-bar app dark>
            <v-app-bar-nav-icon @click="drawer = !drawer" />
            <v-toolbar-title>Dashboard {{ title ? ' | '+title : '' }}</v-toolbar-title>
            <v-spacer/>
            <app-bar></app-bar>
        </v-app-bar>


        <v-navigation-drawer v-model="drawer" app>
            <v-list dense>
                <v-list-item class="mb-4">
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            Lead Suitcase
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            Dashboard
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item v-for="item in items" :to="{name:item.url}" :key="item.title" link>
                    <v-list-item-action>
                        <span :class="item.icon"></span>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-content class="pb-0 X">
            <v-slide-y-reverse-transition>
                <router-view/>
            </v-slide-y-reverse-transition>
            <v-card height="150">
                <v-footer
                        absolute
                        class="font-weight-medium"
                >
                    <v-col
                            class="text-center"
                            cols="12"
                    >
                        <p class="google-font p-0 ma-auto">
                            Made With <span class="red--text">💟</span> by Youssef Mahmoud
                        </p>
                    </v-col>
                </v-footer>
            </v-card>

        </v-content>

    </section>
</template>

<script>
    import AppBar from "../dashboard/components/appBar";
    export default {
        name: "dashLayout",
        components: {AppBar},
        computed:{
            title:function () {
                return this.$route.meta.name ?? null;

            }
        },
        data(){
            return {
                drawer: true,
                items: [
                    {
                        title: "Dashboard",
                        icon: "fa fa-tachometer-alt",
                        url: "dash.home"
                    },
                    {
                        title: "Evens",
                        icon: "fa fa-calendar-week",
                        url: "dash.events"
                    },
                    {
                        title: "Blog",
                        icon: "fa fa-blog",
                        url: "dash.blog"
                    },
                    {
                        title: "Notifications",
                        icon: "fa fa-bell",
                        url: "dash.notify"
                    },
                    {
                        title: "Send Emails",
                        icon: "fa fa-paper-plane",
                        url: "dash.mailer"
                    },
                ],
            };
        }
    }
</script>

<style scoped>

</style>