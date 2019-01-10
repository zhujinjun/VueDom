<template>
    <div id="app">
        <div id="header">
            <h1>
                欢迎使用
                <img alt="Vue logo" src="./assets/logo.png" width="35" height="35">
            </h1>
        </div>
        <div id="nav">
            <router-link to="/helloWorld">概览</router-link>
            <br>
            <router-link to="/home">首页</router-link>
            <h3>组件管理</h3>
            <ul>
                <li>
                    <router-link to="/cart/cartMain">购物车</router-link>
                </li>
            </ul>
            <br>
            <h3>路由管理</h3>
            <ul>
                <router-link to="/ComponentManage/componentDome">路由</router-link>
            </ul>
            <router-link to="/test">测试</router-link>


        </div>
        <div id="section">
            <router-view></router-view>
            <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        </div>

        <!-- <div id="footer">
            © 2018
        </div> -->
    </div>

</template>
<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app'
        // components: {
        //     HelloWorld
        // }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 5px;
    }

    #header {
        background-color: #48a5ef;
        color: white;
        text-align: center;
        padding: 5px;
    }

    #nav {
        line-height: 30px;
        background-color: #dde8f1;
        height: 450px;
        width: 180px;
        float: left;
        padding: 5px;
    }

    #section {
        text-align: left;
        width: 900px;
        float: left;
        padding: 20px;
    }

    #footer {
        background-color: #48a5ef;
        color: white;
        clear: both;
        text-align: center;
        padding: 10px;
    }

    #nav h3 {

        margin: 10px 0 0;
    }

    ul {
        line-height: 10px;
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: 15px 10px;
    }

    a {
        color: #42b983;
    }
</style>