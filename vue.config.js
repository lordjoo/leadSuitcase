const firebaseConfig = require('./src/firebase-config').firebaseConfig;
const appConfig = require("./src/config").config;
// const path = require("path");

module.exports = {
  // outputDir: path.resolve(__dirname, "front"),
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title = appConfig.name;
          return args;
        })
  },
  pwa:{
    name:appConfig.name,
    manifestOptions:{
      name:appConfig.name,
      themeColor: '#ffffff',
      msTileColor: appConfig.style.color,
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      gcm_sender_id:firebaseConfig.messagingSenderId
    },
  }
}