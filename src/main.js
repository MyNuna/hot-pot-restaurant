import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import '@/components/index'
import '@/style/index.scss'
import '@/common/iconfont.js'
import i18n from '@/locales'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts

new Vue({
    router,
    store,
    // i18n,
    render: h => h(App)
}).$mount('#app')