// 此文件职责:初始化路由对象  提供main.js使用
import Vue from 'vue'
import VueRouter from 'vue-router'

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

// 导入sessionStorage封装函数
import store from '@/store'

Vue.use(VueRouter)

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
