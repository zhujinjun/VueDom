<template>
    <div>
        <h3>{{$store.state.count}}</h3>
        <div>
            <button @click="execute()">vuex</button>
        </div>
        <h3>购物车练习</h3>

        <div>
            <label for="商品名称">商品名称：</label>
            <input type="text" v-model="cart.name">
            &nbsp;&nbsp;
            <label for="商品价格">商品价格：</label>
            <input type="text" v-model="cart.price">
            &nbsp;&nbsp;
            <!-- <input type="button" value="添加" @click="addcart()"> -->
            <Button type="primary" @click="addcart()">添加</Button>
        </div>
        <div>子组件传值：{{uname}}</div>
        <cart :name="name" @transferUser="getUser"></cart>
    </div>
</template>

<script>
    import cart from "./../components/cart/cart.vue";
    export default {
        name: "cartMain",
        components: {
            cart
        },
        data() {
            return {
                uname: "",
                name: "双十一购物车",
                cart: { name: "", price: 0 }
            };
        },
        methods: {
            //两个组件之间传值($emit 派发事件)
            addcart() {
                this.$bus.$emit("addCart", this.cart);
            },
            //接收子组件值
            getUser(value) {
                console.log(value);
                this.uname = value;
            },
            execute() {
                this.$store.commit('getCount');
            }
        }
    };
</script>