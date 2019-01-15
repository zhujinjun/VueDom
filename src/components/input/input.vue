<template>
    <div>
        <input :value="currentValue" :type="type" @input="handleInput">
    </div>
</template>

<script>
    export default {
        name: 'Input',
        data() {
            return {
                currentValue: this.value,
            }
        },
        props: {
            value: {
                type: [String, Number],
                default: ''
            },
            type: {
                type: String,
                default: 'text',
            }
        },
        methods: {
            handleInput(event) {
                this.currentValue = event.target.value;
                //通知父组件，值更新了
                this.$emit('input', this.currentValue);
                //通知formitem组件
                this.$parent.$emit('validate', this.currentValue);
                //通知formitem组件
                this.$parent.$emit('resetField', this.currentValue);
            }
        }
    }
</script>

<style scoped>

</style>