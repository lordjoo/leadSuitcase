<template>
    <v-card class="ml-2 mr-2 mb-2 " max-width="344" outlined>
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                    {{event.name}}
                </v-list-item-title>
                <v-list-item-subtitle v-if="event.instructor">
                    <span class="mdi mdi-account"></span> {{event.instructor}}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                    <span class="mdi mdi-calendar"></span> {{moment(event.date.toDate()).format("Y/MM/DD  ")}}
                </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80">
                <v-img :src="event.photo"></v-img>
            </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>

            <v-dialog
                    overlay-color="grey darken-3"
                    v-model="dialog"
                    width="500"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" text :color="$config.style.color">
                        <i class="fa fa-info-circle mr-1"></i>
                        Read more
                    </v-btn>
                </template>

                <v-card>
                    <v-card-title class="headline elevation-4" primary-title>
                        {{ event.name }}
                    </v-card-title>

                    <v-card-text class="">
                        <div class="event-info mt-4 mb-4">
                            <p class="mb-0">
                                <span class="far fa-clock mr-1"></span>
                                {{ event.time }}
                            </p>
                            <p class="mb-0">
                                <span class="fa fa-calendar-day mr-1"></span>
                                {{ moment(event.date.toDate()).format("DD, MMMM, YYYY") }}
                            </p>
                            <p v-if="event.instructor" class="mb-0">
                                <span class="fa fa-chalkboard-teacher mr-1"></span>
                                {{ event.instructor }}
                            </p>

                        </div>
                        <v-divider/>
                        <div class="event-description mt-4 mb-4">
                            {{ event.desc }}
                        </div>
                        <v-img :src="event.photo" />
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn :href="event.link" target="_blank" text :color="$config.style.color">
                            Event Link
                        </v-btn>
                        <v-btn
                                color="primary"
                                text
                                @click="dialog = false"
                        >
                            OK
                        </v-btn>

                    </v-card-actions>
                </v-card>
            </v-dialog>

        </v-card-actions>
    </v-card>
</template>

<script>
    import moment from 'moment'

    export default {
        name: "pastEventCard",
        props:{
           event:{
                required:true
            }
        },
        methods:{
            moment: (date) => moment(date)
        }
    }
</script>

<style scoped>

</style>