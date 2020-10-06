import Vue from 'vue'
import App from './App.vue'
import VueFriendlyIframe from 'vue-friendly-iframe'
import vuetify from './plugins/vuetify';
Vue.config.productionTip = false
Vue.use(VueFriendlyIframe);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
