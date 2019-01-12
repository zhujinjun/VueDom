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
    import schema from 'async-validator';
    export default {

        name: 'FormItem',
        //注入form提供的model数据和rules数据
        inject: ['form'],
        data() {
            return {
                validateState: '',
                validateMessage: '',
            }
        },
        props: {
            label: {
                type: String,
                default: '',
            },
            prop: {
                type: String
            }
        },
        created() {
            //监听formitem派发的事件
            this.$on('validate', this.validate);
        },
        mounted() {
            //挂在form 派发事件
            if (this.prop) {
                this.$parent.$emit('addFormItem', this);
            }
        },
        methods: {
            validate() {
                return new Promise(resolv => {
                    //校验规则
                    var descriptor = {
                        [this.prop]: this.form.rules[[this.prop]]
                    }
                    //校验input 输入值
                    let model = {
                        [this.prop]: this.form.model[[this.prop]]
                    };
                    // let model = {
                    //     [this.prop]: value
                    // };

                    const validator = new schema(descriptor);
                    validator.validate(model, errors => {
                        if (errors) {
                            this.validateState = 'error';
                            this.validateMessage = errors[0].message;
                            resolv(false);
                        } else {
                            this.validateState = '';
                            this.validateMessage = '';
                            resolv(true);
                        }
                    });
                });

            }
        },
    }
</script>

<style scoped>
    .error {
        color: red;
    }
</style>