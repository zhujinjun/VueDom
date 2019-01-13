<template>
    <div>
        <h3>动态路由配置</h3>
        <p>传入的值：{{ $route.params.id }}</p>
            <br>
            <div>
                <button @click="go_route">跳转路由2</button>
            </div>

    </div>
</template>

<script>
    export default {
        methods: {
            go_route() {
                //动态跳转路由
                this.$router.push({ name: 'route-dome2', params: { id: 10082, msg: '100元' } })
            },
        }
    }
</script>

<style scoped>

</style>