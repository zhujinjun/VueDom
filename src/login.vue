<template>
    <div>
        这是一个登录页面
        <p>
            <button @click="login()">{{loginText}}</button>
        </p>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                loginText: '登录'
            }
        },
        methods: {
            login() {
                window.isLogin = true;
                this.loginText = '已登录'
                //目标跳转地址
                const { redirect } = this.$route.query;
                //等价
                // const redirect = this.$route.query.redirect;
                if (redirect) {
                    //跳转到指定页面
                    this.$route.push(redirect);
                } else {
                    //重定向到首页
                    this.$route.push('/');
                }
            }
        }
    }
</script>

<style scoped>

</style>