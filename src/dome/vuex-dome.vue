<template>
    <div>
        <div class="com">
            <h3>父组件</h3>
            <p>初始数字：{{$store.state.count}}</p>
            <p>递增金额：{{$store.getters.doneTodos}}</p>
        </div>
        <div>
            <button @click="execute()">vuex</button>
        </div>
        <div class="com">
            <comvuex></comvuex>
        </div>

    </div>
</template>

<script>
    import comvuex from "../components/vuex/com-vuex.vue";
    export default {
        components: {
            comvuex
        },
        methods: {
            execute() {
                this.$store.commit('increment');
            }
        }
    }
</script>

<style scoped>
    .com {
        border: 1px solid hsla(31, 15%, 50%, .25);
        padding: 10px;
        margin: 10px;
    }
</style>