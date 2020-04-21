import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"

Vue.prototype.$axios  = Axios;
Vue.prototype.HOST = "/baidu_music_api" //跨域

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
