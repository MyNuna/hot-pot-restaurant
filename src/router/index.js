import Vue from 'vue'
import VueRouter from 'vue-router'
import Views from '../views' // 默认加载index.vue
import Home from '../views/home/Home.vue'
import Demo from '../views/demo/Demo.vue'
import echarts from '../views/demo/echarts/index.vue'
import lineEcharts from '../views/demo/echarts/lineEcharts.vue'
import storeTest from '../views/demo/storeTest.vue'
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

export default router