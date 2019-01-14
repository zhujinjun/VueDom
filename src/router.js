import Vue from 'vue'
import Router from 'vue-router'
//告诉vue使用路由
Vue.use(Router)
let rowses = [
{ //重定项
    path: '/',
    redirect: '/main'
}, {
    path: '/login',
    name: 'login',
    component: () =>
        import('./login.vue')
},
{
    path: '/main',
    name: 'main',
    component: () =>
        import('./main.vue'),
    children: [
    { //概览
        path: 'helloWorld',
        name: 'helloWorld',
        component: () =>
            import('./hello-world.vue')
    }, { //首页
        path: 'home',
        name: 'home',
        component: () =>
            import('./home.vue')
    }, { //购物车
        path: 'dome/cart-dome',
        name: 'cart-dome',
        component: () =>
            import('./dome/cart-dome.vue')
    }, { //表单
        path: 'dome/form-dome',
        name: 'form-dome',
        component: () =>
            import('./dome/form-dome.vue')
    }, { //路由1
        path: 'dome/route-dome1/:id',
        name: 'route-dome1',
        component: () =>
            import('./dome/route-dome1.vue')
    }, { //vuex状态
        path: 'dome/vuex-dome',
        name: 'vuex-dome',
        component: () =>
            import('./dome/vuex-dome.vue')
    }]
}, ]
const router = new Router({
    //History 模式(默认 hash 模式)
    mode: 'history',
    routes: rowses
});
//全局路由守卫
router.beforeEach((to, from, next) => {
    if (to.path !== '/login') {
        if (window.isLogin) {
            next();
        } else {
            next('/login?redirect=' + to.path);
        }
    } else {
        next();
    }
});
export default router;