<template>
    <v-card class="ml-2 mr-2 mb-2 " max-width="344" outlined>
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey">

            </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
            <v-btn :color="$config.style.color" text><v-icon class="mr-1">info</v-icon> Read more</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "pastEventCard"
    }
</script>

<style scoped>

</style>