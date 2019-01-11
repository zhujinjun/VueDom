import Vue from 'vue'
import Router from 'vue-router'

//告诉vue使用路由
Vue.use(Router)
let rowses = [
{ //重定项
    path: '/',
    redirect: '/home'
}, {
    path: '/helloWorld',
    name: 'helloWorld',
    component: () =>
        import('./../hello-world.vue')
}, { //首页
    path: '/home',
    name: 'home',
    component: () =>
        import('./../home.vue')
}, { //购物车
    path: '/dome/cart-dome',
    name: 'cart-dome',
    component: () =>
        import('../dome/cart-dome.vue')
}, { //表单
    path: '/dome/form-dome',
    name: 'form-dome',
    component: () =>
        import('../dome/form-dome.vue')
}]
export default new Router({
    routes: rowses
})