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
        }
    }
</script>

<style scoped>

</style>