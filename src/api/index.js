// 对axios进行配置  将配置好的axios导出
import axios from 'axios'
import store from '@/store'
// import router from '@/router'

import JSONBIG from 'json-bigint'

// 基准路径
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'

// 处理最大安全数值
axios.defaults.transformResponse = [(data) => {
  // data为原始json字符串 对data进行转换 return的值就是转化后的结果
  // data 在删除接口返回的是 null 使用JSONBIG转换null会报错
  try {
    return JSONBIG.parse(data)
  } catch (error) {
    return data
  }
}]

// 请求头配置
// axios.defaults.headers = {
//   Authorization: `Bearer ${store.getUser().token}`
// }
// 请求拦截器
axios.interceptors.request.use((config) => {
  // 修改 在每次请求前获取一次token 设置头部
//   好处:不会覆盖之前的头部信息
  config.headers.Authorization = `Bearer ${store.getUser().token}`
  return config
}, (err) => {
  return Promise.reject(err)
})

// 响应拦截器
axios.interceptors.response.use((res) => {
  return res
}, (err) => {
  // 获取响应状态码
  // err 错误对象
  // err.response 响应对象
  // err.response.status 响应状态码
  if (err.response.status === 401) {
    // token失效  跳转登录页面
    // 方式1: this.$router.push('/login')  本质  把hash改成了 #/login
    location.hash = '#/login'
    // 方式2:此时没有vue实例,$router对象获取不到,使用routetr实例直接使用
    // 导入 import router from '@/router'
    // router.push('/login')
  }
  return Promise.reject(err)
})

// 导出
export default axios
