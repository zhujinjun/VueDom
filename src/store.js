import Vue from 'vue'
import Vuex from 'vuex'
//挂在插件
Vue.use(Vuex)

export default new Vuex.Store({
    //数据银行（全局共享）
    state: {
        count: 1
    },
    mutations: {
        getCount(state) {
            state.count += 1;
        }
    },
    actions: {

    }
})