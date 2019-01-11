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
    export default {
        name: 'FormItem',
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
        }
    }
</script>

<style scoped>
    .error {
        color: red;
    }
</style>