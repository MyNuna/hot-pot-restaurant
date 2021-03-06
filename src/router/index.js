import Vue from 'vue'
import VueRouter from 'vue-router'

const original = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return original.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const _import = require('./_import_' + process.env.NODE_ENV);
const Views = _import('index');
const Home = _import('home/Home');
const About = _import('about/About');
const Login = _import('login/Login');
const Happy = _import('happy/happy');
const Translate = _import('happy/translate');
const drawCard = _import('happy/drawCard');
const Demo = _import('demo/Demo');
const lineEcharts = _import('demo/lineEcharts');
const storeTest = _import('demo/storeTest');
const listTest = _import('demo/listTest');
const flexLayout = _import('demo/flexLayout');
const CSScenter = _import('demo/CSS-center');
const UpLoad = _import('demo/Upload');
const Bevel = _import('demo/bevel');
const ArrayAPI = _import('demo/ArrayAPI');
const swipeView = _import('demo/swipeView');

Vue.use(VueRouter)

const routes = [{
    path: 'Login',
    name: 'Login',
    component: Login,
}, {
    path: '/',
    name: 'Views',
    redirect: '/Home',
    component: Views,
    children: [{
        path: 'Home',
        name: 'home',
        component: Home,
        meta: { index: "1", },
    }, {
        path: 'Demo',
        name: 'demo',
        component: Demo,
        meta: { index: "2", },
        // redirect: '/Demo/storeTest',
        children: [{
            path: 'storeTest',
            name: 'storeTest',
            component: storeTest,
            meta: { index: "1", },
        }, {
            path: 'listTest',
            name: 'listTest',
            component: listTest,
            meta: { index: "2", },
        }, {
            path: 'lineEcharts',
            name: 'lineEcharts',
            component: lineEcharts,
            meta: { index: "3", },
        }, {
            path: 'flexLayout',
            name: 'flexLayout',
            component: flexLayout,
            meta: { index: "4", },
        }, {
            path: 'CSS-center',
            name: 'CSS-center',
            component: CSScenter,
            meta: { index: "5", },
        }, {
            path: 'UpLoad',
            name: 'UpLoad',
            component: UpLoad,
            meta: { index: "6", },
        }, {
            path: 'bevel',
            name: 'bevel',
            component: Bevel,
            meta: { index: "7", },
        }, {
            path: 'ArrayAPI',
            name: 'ArrayAPI',
            component: ArrayAPI,
            meta: { index: "8", },
        }, {
            path: 'swipeView',
            name: 'swipeView',
            component: swipeView,
            meta: { index: "9", },
        }, ]
    }, {
        path: 'Happy',
        name: 'happy',
        component: Happy,
        meta: { index: "3", },
        children: [{
            path: 'Translate',
            name: 'translate',
            component: Translate,
            meta: { index: "1" },
        }, {
            path: 'drawCard',
            name: 'drawCard',
            component: drawCard,
            meta: { index: "2" },
        }, ],
    }, {
        path: 'About',
        name: 'about',
        component: About,
        meta: { index: "4", },
    }, ]
}, ]

const router = new VueRouter({
        // mode: 'history',
        // base: process.env.BASE_URL,
        routes
    })
    // ??????????????????????????????????????????
    // router.beforeEach((to, from, next) => {
    // ?????? false ???????????????
    // return false
    // ????????????????????????
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