import Vue from 'vue'
import VueRouter from 'vue-router'
import Views from '../views' // 默认加载index.vue
import Home from '../views/pages/Home.vue'
import About from '../views/pages/About.vue'
import Login from '../views/pages/Login.vue'
import MyLove from '../views/pages/MyLove.vue'
import Person from '../views/pages/Person.vue'

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