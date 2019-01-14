//导入Vue框架
import Vue from 'vue'
//导入App组件对象
import App from './App.vue'

//引入路由
import router from './router'

import './plugins/iview.js'
import store from './store'
//设置项目开发提示
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
//创建Vue实例
new Vue({
    el: '#app',

    // 注入到根实例中
    router,

    store,

    //渲染APP组件
    render: h => h(App)
}).$mount('#app') //将APP组件挂在到根上