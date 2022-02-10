import Vue from 'vue'
import VueRouter from 'vue-router'
import Views from '../views' // 默认加载index.vue
import Home from '../views/home/Home.vue'
import Demo from '../views/demo/Demo.vue'
import demo1 from '../views/demo/demo1.vue'
import About from '../views/about/About.vue'
import Login from '../views/login/Login.vue'
import MyLove from '../views/MyLove/MyLove.vue'
import Person from '../views/person/Person.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/Views/Home/home1'
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
                path: 'demo1',
                component: demo1,
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