import Vue from 'vue'
import App from './App.vue'
import VueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(VueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
