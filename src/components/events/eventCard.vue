<template>
    <v-card style="overflow: hidden; position: relative" class="mr-2 ml-2 mb-2">
        <p v-if="upComing"
           :style="{backgroundColor:$config.style.color}"
           class="upComing" >Up Coming</p>
        <v-img height="200px" :src="event.photo"></v-img>
        <v-card-title>
            <div class="google-font">
                <p>{{ event.name }}</p>
            </div>
        </v-card-title>
        <v-card-subtitle>
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

        </v-card-subtitle>
        <v-card-actions>
            <v-spacer />

            <v-dialog
                    overlay-color="grey darken-3"
                    v-model="dialog"
                    width="500"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" text :color="$config.style.color">
                        <i class="mdi mdi-information-outline"></i>
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
        name: "eventCard",
        props:{
            upComing:{
                default:false,
            },
            event:{
                required:true
            }
        },
        data(){
            return {
                dialog:false,
            }
        },
        methods:{
            moment: (date) => moment(date)
        }
    }
</script>

<style lang="scss" scoped>
    .upComing{
        position: absolute;
        top: 0;
        left: 0px;
        z-index: 50;
        padding: 5px 15px;
        margin: 0;
        border-bottom-right-radius: 15px;
    }
</style>