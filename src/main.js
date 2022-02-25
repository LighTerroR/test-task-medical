import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';

import '@/assets/scss/styles.scss';

Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  render(h) { return h(App); },
}).$mount('#app');
