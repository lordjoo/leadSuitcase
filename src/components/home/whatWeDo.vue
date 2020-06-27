    <template>
    <v-container class="pa-0">
        <v-layout wrap align-center="true" justify-center="true" row fill-height="true" >
            <v-flex xs12 md3 lg3 class="pa-2">
                <p class="google-font" style="font-size:180%">What we do?</p>
                <p class="google-font" style="font-size:110%">
                    Developer Student Clubs (DSCs) are university based community groups for students interested in Google developer technologies.
                </p>

                <p class="google-font" style="font-size:110%">About different Google technologies</p>

                <span v-for="(item,i) in whatWeDo" :key="i">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }" >
                            <a :href="item.link" target="_blank" class="ma-1">
                                <img :src="getImgUrl(item.image)" width="30vh" alt="" srcset="" v-on="on">
                            </a>
                        </template>
                        <span>{{item.TechName}}</span>
                    </v-tooltip>
                </span>

                <br><br>
                <v-btn :href="$config.links.DSCProgramWebsite" outlined target="_blank" rounded :color="$config.style.color" style="text-transform: capitalize;border-radius:5px;text-transform: capitalize;" class="ml-0 google-font hidden-md-and-down" dark>Learn More</v-btn>

            </v-flex>
            <v-flex xs12 md9 lg9 class="">
                <v-layout justify-center="true" align-center="true" row wrap>

                    <v-flex xs6 sm6 md3 lg3 class="text-center pa-2">
                        <v-icon large style="font-size:300%">chat_bubble</v-icon>
                        <p class="google-font" style="font-size:130%">Talks</p>
                        <p class="google-font" style="font-size:110%">
                            Get updated with the latest news and announcements</p>
                    </v-flex>

                    <v-flex xs6 sm6 md3 lg3 class="text-center pa-2">
                        <v-icon large style="font-size:300%">code</v-icon>
                        <p class="google-font" style="font-size:130%">Hands-on Workshop</p>
                        <p class="google-font" style="font-size:110%">
                            Review technical content and write code with friends.
                        </p>
                    </v-flex>

                    <v-flex xs6 sm6 md3 lg3 class="text-center pa-2">
                        <v-icon large style="font-size:300%">remove_red_eye</v-icon>
                        <p class="google-font" style="font-size:130%">Showcase</p>
                        <p class="google-font" style="font-size:110%">
                            Shows off solution your DSC has built for local problems
                        </p>
                    </v-flex>

                    <v-flex xs6 sm6 md3 lg3 class="text-center pa-2">
                        <v-icon large style="font-size:300%">airplay</v-icon>
                        <p class="google-font" style="font-size:130%">Live Viewing Parties</p>
                        <p class="google-font" style="font-size:110%">Share knowledge in your college and university</p>
                    </v-flex>

                </v-layout>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
    import whatWeDoData from '../../data/whatWeDo.json'

    export default {
        name:"whatWeDo",
        data() {
            return {
                whatWeDo:whatWeDoData
            }
        },
        methods:{
            getImgUrl(url) {
                if(url.length>0){
                    return require('@/assets/img/what-we-do/'+url)
                }else{
                    return require('@/assets/img/what-we-do/notFound.png')
                }
            },
        }
    }
</script>
