import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { store } from '@/store'

Vue.config.productionTip = false

Vue.filter('toUpperCase', function (value) {
  return value.toUpperCase();
})

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
