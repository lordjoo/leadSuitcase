<template>
    <v-overlay z-index="50" :value="loading">
        <v-progress-circular :rotate="360" :size="100" :width="15" indeterminate color="#3498db">
        </v-progress-circular>
    </v-overlay>
</template>

<script>
    export default {
        name: "loading",
        props:{
            loading:{required:true}
        }
    }
</script>

<style scoped>

</style>