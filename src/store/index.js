import Vue from 'vue'
import Vuex from 'vuex'
import { user } from './modules/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
    // 在.vue的监听属性里用
    state: {
        count: 1,
        todos: [
            { id: 1, text: '..1..', done: true },
            { id: 2, text: '..2..', done: false },
            { id: 3, text: '..3..', done: true },
        ],
    },
    getters: {
        doneTodos: state => { return state.todos.filter(todos => todos.done) },
        doneTodosCount: (state, getters) => { return getters.doneTodos },
        getTodoById: state => (index) => { return state.todos.find(todo => todo.id === index) },
    },
    mutations: {
        addmu(state) { state.count++; },
        lessmu(state) { state.count-- },
        sum(state, value) { state.count += value },
    },
    actions: {
        addmu1(context) { context.commit("addmu") },
        lessmu1(context) { context.commit("lessmu") },
        sum1(context) { context.commit("sum") },
    },
    modules: {
        // user,
    }
})