// 封装一个vue插件
// 作用:注册compontents下的组件为全局组件
import MyBread from '@/components/my-bread'

// 导入频道封装组件
import MyChannel from '@/components/my-channel'

// 导入发布文章-封面封装组件
import MyImage from '@/components/my-image'

// vue插件定义的规则 暴露一个对象 {} 在对象中的选项 install 对应的一个函数 有形参 vue对象
export default {
  install (Vue) {
    // Vue.use(使用插件) Vue就是use之前的Vue
    // 全局注册组件
    Vue.component(MyBread.name, MyBread)
    Vue.component(MyChannel.name, MyChannel)
    Vue.component(MyImage.name, MyImage)
  }
}
