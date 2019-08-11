import Vue from 'vue'
import App from './App.vue'

// 调用element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// @是一个路径别名,是src路径 在vue-cli项目下有效
// index是目录的索引文件,默认使用的索引文件 index.js index.vue index.json
// 导入路由模块
import router from '@/router'

// 导入样式
import '@/styles/index.less'

// 导入自定义插件
import myPlugin from '@/components'

// 导入axios库
import axios from '@/api'
Vue.use(myPlugin)

// 使用element-ui
Vue.use(ElementUI)
// 注册为全局
Vue.prototype.$http = axios

// 产品级别提示  开发阶段建议不开启  提示信息越详细越好
// 上线阶段开启可以减少日志输出, 提高运行速度
Vue.config.productionTip = false

// main.js文件的作用:
// 1: 引入需要依赖的模块(js, css, 包，其他资源)
// 2:创建一个根vue实例

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
