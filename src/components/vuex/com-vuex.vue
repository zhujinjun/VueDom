<template>
    <div>
        <h3>子组件</h3>
        <p>初始数字：{{$store.state.count}}</p>
        <p>递增金额：{{$store.getters.doneTodos}}</p>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>