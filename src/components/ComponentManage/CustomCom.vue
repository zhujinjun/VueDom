<template>
    <div>
        <p @click="emit">{{msg}}</p>
    </div>
</template>

<script>
    export default {
        name: "demo",
        data() {
            return {
                msg: "点击派发事件"
            };
        },
        created() {
            this.$on("wash_Goods", arg => {
                console.log(arg);
            });
        },
        methods: {
            emit() {
                this.$emit("wash_Goods", ["fish", true, { name: "vue", verison: "2.4" }]);
            }
        }
    };
</script>