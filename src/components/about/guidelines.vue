<template>
    <v-container class="pa-0 my-0">
        <v-layout wrap align-start="true" justify-start="true" row fill-height="true" class="my-0" >

            <v-flex xs12 md8 lg8 class="pa-2 my-0">
                <p class="google-font" style="font-size:180%;color:#0277bd">Community Guidelines</p>
                <v-expansion-panels multiple>
                    <v-expansion-panel v-for="(item,i) in communityGuideline" :key="i">
                        <v-expansion-panel-header class="google-font text--black" style="font-size:120%">
                            {{item.name}}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="google-font grey lighten-3" style="font-size:110%">
                            <p class="pt-3 mb-0 ">
                                {{item.des}}
                            </p>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-flex>

            <v-flex xs12 md4 lg4 class="pa-2 hidden-sm-and-down">
                <v-img
                        :src="require('@/assets/img/bg.svg')"
                        :lazy-src="require('@/assets/img/bg.svg')"
                        width="70%"
                        style="float:right"
                >
                    <v-layout
                            slot="placeholder"
                            fill-height="true"
                            align-center="true"
                            justify-center="true"
                            ma-0
                    >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                </v-img>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
    import data from './data'
    export default {
        name: "guidelines",
        data(){
            return {
                communityGuideline: data.communityGuideline
            }
        }
    }
</script>

<style scoped>

</style>