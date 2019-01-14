import Vue from 'vue'
import Vuex from 'vuex'
//挂在插件
Vue.use(Vuex)

export default new Vuex.Store({
    //数据存储（全局共享）
    state: {
        count: 1
    },
    //数据加工
    getters: {
        doneTodos: state => {
            return state.count + '元';
        }
    },
    //修改state中存储的值
    mutations: {
        increment(state) {
            state.count += 1;
        }
    },
    //异步执行
    actions: {

    }
})