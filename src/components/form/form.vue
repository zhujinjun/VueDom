<template>
    <div>
        <form>
            <slot></slot>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Form",
        provide() {
            return {
                form: this
            };
        },
        props: {
            model: {
                type: Object,
                required: true
            },
            rules: {
                type: Object
            }
        },
        created() {
            this.arrs = [];
            this.$on("addFormItem", item => {
                this.arrs.push(item);
            });
            console.log(this.arrs);
        },
        methods: {
            async validate(callback) {
                //将formitem校验数组转换为Promise数组,用户异步批量校验
                //   const tasks = this.arrs.map(item => {
                //     return item.validate();
                //     console.log(item.validate());
                //   });
                //   console.log(tasks);
                //   //异步批量校验
                //   const results = await Promise.all(tasks);
                //   let ret = true;
                //   results.forEach(valid => {
                //     if (!valid) {
                //       ret = false;
                //     }
                //   });

                const promises = this.arrs.map(item => {
                    console.log(item.validate());
                    return item.validate();
                });

                //异步批量校验
                Promise.all(promises)
                    .then((succeed) => {
                        callback(true);
                    })
                    .catch((error) => {
                        callback(false);
                    });
            },

            resetFields() {

                this.arrs.forEach(field => {
                    console.log(field);
                    field.resetField();
                });
            },
        }
    };
</script>

<style scoped>
</style>