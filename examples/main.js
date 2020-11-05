import Vue from 'vue'
import App from './App.vue'
import carPlateKeyboard from '../packages'

Vue.config.productionTip = false

Vue.use(carPlateKeyboard)

new Vue({
  render: h => h(App),
}).$mount('#app')
