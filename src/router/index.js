import Vue from 'vue'
import VueRouter from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV);
const Views = _import('index');
const Home = _import('home/Home');
const Demo = _import('demo/Demo');
const echarts = _import('demo/echarts/index');
const lineEcharts = _import('demo/echarts/lineEcharts');
const storeTest = _import('demo/storeTest');
const listTest = _import('demo/listTest');
const About = _import('about/About');
const Login = _import('login/Login');
const MyLove = _import('MyLove/MyLove');
const Person = _import('person/Person');

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/Views/Home'
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
            path: 'MyLove',
            component: MyLove,
        }, {
            path: 'Person',
            component: Person,
        }, {
            path: 'Login',
            component: Login,
        }, ]
    },
]

const router = new VueRouter({
        // mode: 'history',
        // base: process.env.BASE_URL,
        routes
    })
    // 路由守卫，监测每一次路由跳转
    // router.beforeEach((to, from, next) => {
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
    // next();
    // })

export default router