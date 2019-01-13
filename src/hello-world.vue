<template>
    <div class="hello">
        <h2>{{title}}</h2>
        <h3>CLI安装插件</h3>
        <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
        </ul>
        <h3>基本连接</h3>
        <ul>
            <li><a href="https://cn.vuejs.org/v2/guide/" target="_blank" rel="noopener">Vue.js</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">论坛</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
        </ul>
        <h3>生态系统</h3>
        <ul>
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli</a>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
        <h3>Vue框架</h3>
        <ul>
            <li><a href="https://zh.nuxtjs.org" target="_blank" title="如果你想要构建一个高性能的 Vue 应用程序，就需要基于组件的路由、服务器端渲染、代码拆分和其他尖端的功能。你还需要像 SEO 标签这样的功能" rel="noopener">Nuxt</a></li>
            <li><a href="https://vuetifyjs.com/zh-Hans/" target="_blank" title="" rel="noopener">Vuetify</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',

        data() {
            return {
                title: 'Vue生态'
            }
        },
    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>