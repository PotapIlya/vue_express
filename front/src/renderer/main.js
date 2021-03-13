import Vue from 'vue'
// import vuetify from 'vuetify'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import scss from './assets/scss/app.scss'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;



/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  scss,
  // vuetify,
  template: '<App/>'
}).$mount('#app');
