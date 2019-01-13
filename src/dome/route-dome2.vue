<template>
    <div>
        <h3>动态路由配置</h3>
        <p>传入的值：{{ $route.params.id }}</p>
            <p>传入的值：{{ $route.params.msg}}</p>
                <p>查询参数：{{ $route.query.foo}}</p>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>