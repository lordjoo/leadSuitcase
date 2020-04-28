<template>
    <v-card class="ml-2 mr-2 mb-2 " max-width="344" outlined>
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                    {{event.name}}
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{event.desc}}
                </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80">
                <v-img :src="event.photo"></v-img>
            </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
            <v-btn :href="event.link" target="_blank" :color="$config.style.color" text><v-icon class="mr-1">info</v-icon> Read more</v-btn>
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