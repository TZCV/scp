import App from './App'

// #ifndef VUE3
import Vue from 'vue'

// 导入uview
import uView from "uview-ui";
Vue.use(uView);
uni.$u.config.unit = 'rpx'
// 引入组件
import tabBar from './@/components/tabbar'
import cpBox from './@/components/cpitem'
// 注册组件
Vue.component('tabBar',tabBar)
Vue.component('cpBox',cpBox)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif