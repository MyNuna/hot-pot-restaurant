import Vue from 'vue'
import VueRouter from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV);
const Views = _import('index');
const Home = _import('home/Home');
const Demo = _import('demo/Demo');
const lineEcharts = _import('demo/echarts/lineEcharts');
const storeTest = _import('demo/storeTest');
const listTest = _import('demo/listTest');
const About = _import('about/About');
const Login = _import('login/Login');
const MyLove = _import('MyLove/MyLove');
const Person = _import('person/Person');
const Flex = _import('demo/other/flex');
const CSScenter = _import('demo/other/CSS-center');
const UpLoad = _import('demo/Upload');

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
            name: 'Home',
            component: Home,
        }, {
            path: 'Demo',
            name: 'Dome',
            component: Demo,
            children: [{
                path: 'storeTest',
                name: 'storeTest',
                component: storeTest,
            }, {
                path: 'listTest',
                name: 'listTest',
                component: listTest,
            }, {
                path: 'lineEcharts',
                name: 'lineEcharts',
                component: lineEcharts,
            }, {
                path: 'Flex',
                name: 'Flex',
                component: Flex,
            }, {
                path: 'CSS-center',
                name: 'CSS-center',
                component: CSScenter,
            }, {
                path: 'UpLoad',
                name: 'UpLoad',
                component: UpLoad,
            }, ]
        }, {
            path: 'About',
            name: 'About',
            component: About,
        }, {
            path: 'MyLove',
            name: 'MyLove',
            component: MyLove,
        }, {
            path: 'Person',
            name: 'Person',
            component: Person,
        }, {
            path: 'Login',
            name: 'Login',
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