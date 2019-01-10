<template>
    <div>
        <div>
            {{name}}
        </div>

        <div style="margin-top:20px;">
            <table style="border: 1px solid hsla(31,15%,50%,.25);">
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
                carts: [],
            }
        },
        props: {
            name: { type: String, required: true }

        },
        created() {
            this.$bus.$on('addCart', cart => {
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
        }

    }
</script>

<style scoped>

</style>