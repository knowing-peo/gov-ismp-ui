import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import i18n from 'vue-i18n'

import '@/styles/index.scss' // global css
import '@/assets/iconfont/iconfont.css' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ElementUI, { 
	elementZhLocale,
	size: 'medium', // set element-ui default size
	// i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
