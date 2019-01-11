<template>
    <div>
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
    </div>

</template>

<script>
    export default {
        name: 'cart',
        data() {
            return {
                testValue: 10,
                carts: JSON.parse(localStorage.getItem("cart-Data")) || [],
            }
        },
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
            this.$bus.$on('addCart', cart => {
                console.log(this.testTitle);
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
        inject: {
            testTitle: { default: 'hello' }
        }
    }
</script>

<style scoped>

</style>