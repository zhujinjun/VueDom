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
        import('../components/HelloWorld.vue')
}, { //首页
    path: '/home',
    name: 'home',
    component: () =>
        import('../components/Home.vue')
}, { //购物车
    path: '/dome/cart-dome',
    name: 'cartMain',
    component: () =>
        import('../dome/cart-dome.vue')
}]
export default new Router({
    routes: rowses
})