<template>
    <div>
        <label v-if="label">{{label}}</label>
        <div>
            <slot></slot>
            <!-- 提示消息 -->
            <p v-if="validateState === 'error'" class="error">{{validateMessage}}</p>
        </div>
    </div>
</template>

<script>
    import schema from "async-validator";
    export default {
        name: "FormItem",
        //注入form提供的model数据和rules数据
        inject: ["form"],
        data() {
            return {
                validateState: "",
                validateMessage: ""
            };
        },
        props: {
            label: {
                type: String,
                default: ""
            },
            prop: {
                type: String
            }
        },
        created() {
            //监听formitem派发的事件
            this.$on("validate", this.validate);
            this.$on("resetField", this.validate);
        },
        mounted() {
            //挂在form 派发事件
            if (this.prop) {
                this.$parent.$emit("addFormItem", this);
            }
        },
        methods: {
            //校验表单
            validate(value) {
                return new Promise((resolve, reject) => {
                    //校验规则
                    var descriptor = {
                        [this.prop]: this.form.rules[[this.prop]]
                    };
                    //校验input输入值
                    let model = {
                        [this.prop]: this.form.model[[this.prop]]
                    };
                    const validator = new schema(descriptor);
                    validator.validate(model, errors => {
                        if (errors) {
                            this.validateState = "error";
                            this.validateMessage = errors[0].message;
                            reject();
                        } else {
                            this.validateState = "";
                            this.validateMessage = "";
                            resolve();
                        }
                    });
                });
            },
            //重置表单
            resetField(value) {
                this.validateState = "";
                this.validateMessage = "";
                console.log(this.validate);
                // this.form.rules = [];
                // this.form.model = [];
            }
        }
    };
</script>

<style scoped>
    .error {
        color: red;
    }
</style>