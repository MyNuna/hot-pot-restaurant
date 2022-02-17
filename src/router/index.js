import Vue from 'vue'
import VueRouter from 'vue-router'
import Views from '../views' // 默认加载index.vue
import Home from '../views/home/Home.vue'
import Demo from '../views/demo/Demo.vue'
import echarts from '../views/demo/echarts/index.vue'
import lineEcharts from '../views/demo/echarts/lineEcharts.vue'
import storeTest from '../views/demo/storeTest.vue'
import listTest from '../views/demo/listTest.vue'
import About from '../views/about/About.vue'
import Login from '../views/login/Login.vue'
import MyLove from '../views/MyLove/MyLove.vue'
import Person from '../views/person/Person.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/Views/Demo/storeTest'
    },
    {
        path: '/Views',
        name: 'Views',
        component: Views,
        children: [{
            path: 'Home',
            component: Home,
        }, {
            path: 'Demo',
            component: Demo,
            children: [{
                path: 'storeTest',
                component: storeTest,
            }, {
                path: 'listTest',
                component: listTest,
            }, {
                path: 'echarts',
                component: echarts,
                children: [{
                    path: 'lineEcharts',
                    component: lineEcharts,
                }, ]
            }, ]
        }, {
            path: 'About',
            component: About,
        }, {
            path: 'Login',
            component: Login,
        }, {
            path: 'MyLove',
            component: MyLove,
        }, {
            path: 'Person',
            component: Person,
        }, ]
    },
]

const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    })
    // 路由守卫，监测每一次路由跳转
router.beforeEach((to, from, next) => {
    // 返回 false 以取消导航
    // return false
    // 获取用户登录标志
    // let isLogin = 
    // if (isLogin) {
    //     next();
    // } else {
    //     if (to.path === "/login") {
    //         next()
    //     } else {
    //         next('/login')
    //     }
    // }
    // console.log(to);
    // console.log(from);
    next();
})

export default router