import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'

// 1. 创建路由组件
// 2. 将路由与组件进行映射
// 3. 创建router实例

// 定义路由
const routes = [
    // 主路由
    {
        path: '/',
        component: Main,
        redirect: '/home', // 重定向
        children: [
            { path: 'home', component: Home },
            { path: 'user', component: User },
            { path: 'mall', component: Mall },
            { path: 'page1', component: PageOne },
            { path: 'page2', component: PageTwo },
         ]
    }
]
// 创建 router 实例
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router

Vue.use(VueRouter)
