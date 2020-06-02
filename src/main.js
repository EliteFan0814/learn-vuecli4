import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import 'element-ui/lib/theme-chalk/index.css'
import messages from './components/common/i18n'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh', // 设置地区
  messages // 设置地区信息
})

new Vue({
  router,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
