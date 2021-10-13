import Vue from 'vue'
import AppShell from './app-shell/AppShell.vue'
import router from './router'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import vuetify from './plugins/vuetify'


// Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(AppShell)
}).$mount('#app')
