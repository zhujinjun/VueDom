<template>
    <div>
        <input type="text" v-model="userName" @change="setUser">
        <div style="margin-top:20px;">
            <table border="1">
                <tr>
                    <td colspan="4">
                        {{name}}
                    </td>
                </tr>
                <tr>
                    <th>序号</th>
                    <th>商品名称</th>
                    <th>商品价格</th>
                    <th>数量</th>
                </tr>
                <tr v-for="(item, index) in carts" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.count}}</td>
                </tr>
            </table>
        </div>
        <div>
            <h3>
                <h3>{{$store.state.count}}</h3>
            </h3>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'cart',
        data() {
            return {
                userName: '',
                carts: JSON.parse(localStorage.getItem("cart-Data")) || [],
            }
        },
        //接收到父组件值
        props: {
            name: { type: String, required: true }
        },
        watch: {
            carts: {
                handler(val, oldVal) {
                    localStorage.setItem("cart-Data", JSON.stringify(val));
                },
                deep: true
            }
        },
        created() {
            //两个组件之间传值($on 监听事件)
            this.$bus.$on('addCart', cart => {
                if (cart.name === '') {
                    alert("商品名称并不能为空！")
                    return;
                }
                let _cart = this.carts.find(x => x.name === cart.name);
                if (_cart) {
                    _cart.price = parseInt(_cart.price) + parseInt(cart.price)
                    _cart.count += 1;

                } else {
                    this.carts.push({
                        id: this.carts.length + 1,
                        ...cart,
                        count: 1
                    });
                }
            });
        },
        methods: {
            setUser: function () {
                //事件传递给父组件
                this.$emit("transferUser", this.userName);
            }
        }
    }
</script>

<style scoped>

</style>