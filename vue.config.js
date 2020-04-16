const firebaseConfig = require('./src/firebase-config').firebaseConfig;
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa:{
    manifestOptions:{
      name:"LeadSuitCase",
      themeColor: '#4DBA87',
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      gcm_sender_id:firebaseConfig.messagingSenderId
    },
  }
}