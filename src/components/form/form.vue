<template>
    <div>
        <form>
            <slot></slot>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Form',
        provide() {
            return {
                form: this
            }
        },
        props: {
            model: {
                type: Object,
                required: true
            },
            rules: {
                type: Object,
            }
        },
        created() {
            this.arrs = [];
            this.$on('addFormItem', item => {
                this.arrs.push(item);
            })
        },
        methods: {
            async validate(callback) {
                //将formitem校验数组转换为Promise数组,用户异步批量校验
                const tasks = this.arrs.map(item => {
                    item.validate();
                });
                //异步批量校验
                const results = await Promise.all(tasks);
                let ret = true;
                results.forEach(valid => {
                    if (!valid) {
                        ret = false;
                    }
                })
                callback(ret);
            }
        }
    }
</script>

<style scoped>

</style>