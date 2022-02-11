import Vue from 'vue'
import Vuex from 'vuex'
import { user } from './modules/user.js'
import { app } from './modules/app.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 1,
    },
    mutations: {
        addmu(state) { state.count++ },
        lessmu(state) { state.count-- },
    },
    actions: {},
    modules: {
        // user,
        // app,
    }
})