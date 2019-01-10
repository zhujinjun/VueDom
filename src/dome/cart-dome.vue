<template>
    <div>
        <h3>购物车练习</h3>

        <div>
            <label for="商品名称">商品名称：</label>
            <input type="text" v-model="cart.name">
            &nbsp;&nbsp;
            <label for="商品价格">商品价格：</label>
            <input type="text" v-model="cart.price">
            &nbsp;&nbsp;
            <input type="button" value="添加" @click="addcart()">
        </div>
        <cart :name='name'></cart>

    </div>
</template>

<script>
    import cart from './../components/cart/cart.vue'
    export default {
        name: 'cartMain',
        components: {
            cart
        },
        data() {
            return {
                name: '双十一购物车',
                cart: { name: '', price: 0, },
            }
        },
        methods: {
            addcart() {
                this.$bus.$emit('addCart', this.cart);
            }
        },
    }
</script>