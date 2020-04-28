<template>
    <v-card class="mr-2 ml-2 mb-2">
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
            <v-btn :href="event.link" target="_blank" text :color="$config.style.color">
                Read more
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import moment from 'moment'

    export default {
        name: "eventCard",
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