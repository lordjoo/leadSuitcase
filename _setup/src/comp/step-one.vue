<template>
    <v-layout class="mb-4 ml-2" row wrap>
        <v-flex md12>
            <h1 class="font-weight-medium">Welcome to LeadSuitCase Setup</h1>
            <p>
                Hi there, in his page we will walk you through a step by step setup to the leadSuitCase
                <br>
                You will go for 2 Main Steps
                <ol>
                    <li>Firebase Setup</li>
                    <li>Your WebSite Info</li>
                </ol>
                Please make sure you logged into firebase with the account you want to deploy the website to in the last step
            <br>if you are not sure Open a terminal or cmd and run
            <br>
                <code class="pa-4 px-4">firebase logout<br>firebase login</code>
            </p>
        </v-flex>
        <v-flex md12 class="mt-3">
            <v-btn to='/step/2' large color="primary">
                Next <v-icon class="fa fa-arrow-right ml-2"></v-icon>
            </v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "step-one"
    }
</script>

<style scoped>

</style>