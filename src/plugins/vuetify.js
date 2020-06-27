import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
import colors from 'vuetify/lib/util/colors'

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme:{
    themes:{
      light: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark:{

      },
    }
  }
});
