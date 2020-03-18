// 此文件职责:初始化路由对象  提供main.js使用
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入sessionStorage封装函数
import store from '@/store'

// 导入路由
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import Article from '@/views/article'
import NotFound from '@/views/404'
import Image from '@/views/image'
import Publish from '@/views/publish'
import Comment from '@/views/comment'
import Fans from '@/views/fans'
import Setting from '@/views/setting'

// 第一种 路由懒加载 一个路由就相当于一个js文件
// const Login = () => import('@/views/login')
// const Home = () => import('@/views/home')
// const Welcome = () => import('@/views/welcome')
// const Article = () => import('@/views/article')
// const NotFound = () => import('@/views/404')
// const Image = () => import('@/views/image')
// const Publish = () => import('@/views/publish')
// const Comment = () => import('@/views/comment')
// const Fans = () => import('@/views/fans')
// const Setting = () => import('@/views/setting')

Vue.use(VueRouter)

// const router = new VueRouter({
//   routes: [
//     // 第二种写法(推荐) 路由懒加载  直接在路由组件上定义
//     { path: '/login', name: 'login', component: () => import('@/views/login') },
//     {
//       path: '/',
//       component: () => import('@/views/home'),
//       children: [
//         { path: '/', name: 'welcome', component: () => import('@/views/welcome') },
//         { path: '/article', name: 'article', component: () => import('@/views/article') },
//         { path: '/image', name: 'image', component: () => import('@/views/image') },
//         { path: '/publish', name: 'publish', component: () => import('@/views/publish') },
//         { path: '/comment', name: 'comment', component: () => import('@/views/comment') },
//         { path: '/fans', name: 'fans', component: () => import('@/views/fans') },
//         { path: '/setting', name: 'setting', component: () => import('@/views/setting') }
//       ]
//     },
//     // 路径404
//     { path: '*', name: '404', component: () => import('@/views/404') }
//   ]
// })

const router = new VueRouter({
  routes: [
    // 跳转路由 $router.push('/login') 或者 $router.push({name:'login'})
    { path: '/login', name: 'login', component: Login },
    {
      path: '/',
      component: Home,
      children: [
        { path: '/', name: 'welcome', component: Welcome },
        { path: '/article', name: 'article', component: Article },
        { path: '/image', name: 'image', component: Image },
        { path: '/publish', name: 'publish', component: Publish },
        { path: '/comment', name: 'comment', component: Comment },
        { path: '/fans', name: 'fans', component: Fans },
        { path: '/setting', name: 'setting', component: Setting }
      ]
    },
    // 路径404
    { path: '*', name: '404', component: NotFound }
  ]
})

// 加上全局前置导航守卫
router.beforeEach((to, from, next) => {
  // 1.如果是登录页,放行
  // if (to.path === '/login') return next()
  // 2.获取用户信息 如果没有 拦截登录
  // if (!store.getUser().token) return next('/login')
  // 3.放行
  // next()
  // 简写
  if (to.path !== '/login' && !store.getUser().token) return next('/login')
  next()
})

export default router
