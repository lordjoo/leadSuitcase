<template>
    <section class="team-members">
        <v-section >
            <v-row>
                <p :style="{fontSize:'200%',color:$config.style.color}" class="google-font">
                    Meet Our Awesome Team
                </p>
            </v-row>
            <v-layout column>
                <v-row>
                    <v-col v-for="member in founders.slice().reverse()"
                           :key="member.name"
                           md="3"
                           cols="12"
                    >
                        <member :member="member"></member>
                    </v-col>
                </v-row>
                <v-divider/>
                <v-row>
                    <v-col v-for="member in heads"
                           :key="member.name"
                           md="3" cols="12">
                        <member :member="member"></member>
                    </v-col>
                </v-row>
                <v-divider/>
                <v-row>
                    <v-col v-for="member in normal"
                           :key="member.name"
                           md="3" cols="12">
                        <member :member="member"></member>
                    </v-col>
                </v-row>


            </v-layout>
        </v-section>
        <v-section>
            <app-footer />
        </v-section>
    </section>
</template>

<script>
    import AppFooter from "../components/common/appFooter";
    import VSection from "../components/common/v-section";
    import Member from "../components/common/member";
    export default {
        name: "team",
        computed:{
            members:function () {
                return this.$store.state.team;
            },
            founders:function () {
                let str = ['Founder',"Leader","Co-Leader"];
                return this.members.filter(function (i) {
                    return (str.some( v => i.role.includes(v)));
                })
            },
            heads:function () {
                let str = ['Head'];
                return this.members.filter(function (i) {
                    return (str.some( v => i.role.includes(v)));
                })
            },
            normal:function () {
                let str = ['Member',"Organiser"];
                return this.members.filter(function (i) {
                    return (str.some( v => i.role.includes(v)));
                })
            },

        },
        components: {Member, VSection, AppFooter}
    }
</script>

<style scoped>

</style>