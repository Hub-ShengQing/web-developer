import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入所有组件
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
