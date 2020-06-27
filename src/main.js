import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import appConfig  from './config'
import './firebase-setup'
import store from './store'
import './registerServiceWorker'

Vue.prototype.$config = appConfig.config;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
