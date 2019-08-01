import Vue from 'vue'
import App from './App.vue'

// 产品级别提示  开发阶段建议不开启  提示信息越详细越好
// 上线阶段开启可以减少日志输出, 提高运行速度
Vue.config.productionTip = false

// main.js文件的作用:
// 1: 引入需要依赖的模块(js, css, 包，其他资源)
// 2:创建一个根vue实例

new Vue({
  render: h => h(App)
}).$mount('#app')
