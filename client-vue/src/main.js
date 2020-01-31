import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './utils/request'
import Vant from './utils/Vant'
Vue.prototype.Api = request
Vue.config.productionTip = false

new Vue({
  router,
  store,
  Vant,
  render: h => h(App)
}).$mount('#app')
