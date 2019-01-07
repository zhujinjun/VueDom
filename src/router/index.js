import Vue from 'vue'
import Router from 'vue-router'
//引入组件
import test from '../components/Test.vue'
import componentDome from '../components/ComponentManage/ComponentDome.vue'
///ComponentManage/CustomCom

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
    path: '/ComponentManage/cartMain',
    name: 'cartMain',
    component: () =>
        import('../components/ComponentManage/CartMain.vue')
}, {
    path: '/test',
    name: 'test',
    component: test
}, {
    //基础组件
    path: '/ComponentManage/componentDome',
    name: 'componentDome',
    component: componentDome
}, { //自定义组件
    path: '/ComponentManage/CustomCom',
    name: 'CustomCom',
    component: () =>
        import('../components/ComponentManage/CustomCom.vue')
}]
export default new Router({
    routes: rowses
})