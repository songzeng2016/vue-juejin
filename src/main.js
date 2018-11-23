import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {get, post} from './axios';

import 'common/stylus/index.styl'

Vue.config.productionTip = false;

Vue.prototype.$get = get;
Vue.prototype.$post = post;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
