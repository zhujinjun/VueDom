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
        import('./hello-world.vue')
}, { //首页
    path: '/home',
    name: 'home',
    component: () =>
        import('./home.vue')
}, { //购物车
    path: '/dome/cart-dome',
    name: 'cart-dome',
    component: () =>
        import('./dome/cart-dome.vue')
}, { //表单
    path: '/dome/form-dome',
    name: 'form-dome',
    component: () =>
        import('./dome/form-dome.vue')
}, { //路由1
    path: '/dome/route-dome1/:id',
    name: 'route-dome1',
    component: () =>
        import('./dome/route-dome1.vue')
}, { //路由2
    path: '/dome/route-dome2/:id/:msg',
    name: 'route-dome2',
    component: () =>
        import('./dome/route-dome2.vue')
}]
export default new Router({
    //History 模式(默认 hash 模式)
    mode: 'history',
    routes: rowses
})