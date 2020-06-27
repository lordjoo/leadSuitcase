<template>
    <v-bottom-navigation
            grow
            :color=$config.style.color
            class="overflow-hidden hidden-md-and-up v-bottom-navigation--fixed"
    >
        <v-btn to="/"  :color="$vuetify.theme.dark?'grey darken-4':'#fff'"  >
            <span>Home</span>
            <v-icon>home</v-icon>
        </v-btn>
        <v-btn to="/events" :color="$vuetify.theme.dark?'grey darken-4':'#fff'"  >
            <span>Events</span>
            <v-icon>calendar_today</v-icon>
        </v-btn>
        <v-btn to="/blog" :color="$vuetify.theme.dark?'grey darken-4':'#fff'"  >
            <span>Blog</span>
            <v-icon>list_alt</v-icon>
        </v-btn>
        <v-btn to="/about" :color="$vuetify.theme.dark?'grey darken-4':'#fff'"  >
            <span>About</span>
            <v-icon>error_outline
            </v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
    export default {
        data () {
            return {
                activeBtn: 1,
            }
        },
    }
</script>