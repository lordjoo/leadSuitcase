<template>
    <v-card elevation="1" class="mx-auto" max-width="344" outlined>
        <v-list-item style="margin: 0; padding: 0">
            <v-list-item-avatar style="margin-bottom: 0;margin-top: 0; padding: 0" :color="color" tile size="80">
                <span style="font-size: 250%;color: white" :class="icon"></span>
            </v-list-item-avatar>
            <v-list-item-content style="padding-bottom: 0;padding-top: 0;">
                <v-list-item-title class="headline">
                    {{ number }}
                    <v-spacer/>
                    {{ title }}
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

    </v-card>
</template>

<script>
    export default {
        name: "infoCard",
        props:{
            title:{
                required:true,
            },
            number:{
                required:true
            },
            color:{
                required:true
            },
            icon:{
                required:true
            },
        }
    }
</script>

<style scoped>

</style>