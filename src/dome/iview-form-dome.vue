<template>
    <div>
        <h3>iview表单</h3>
        <div class="form">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <FormItem label="用户名" prop="username">
                    <Input v-model="formValidate.username" placeholder="输入用户名称"></Input>
                </FormItem>
                <FormItem label="密  码" prop="pwd">
                    <Input v-model="formValidate.pwd" placeholder="输入密码"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                    <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                </FormItem>
            </Form>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                formValidate: {
                    username: '',
                    pwd: ''
                },
                ruleValidate: {
                    username: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    pwd: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                    ],
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        console.log("成功");
                    } else {
                        console.log("失败");
                    }
                })
            },
            handleReset(name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>

<style scoped>
    h3 {
        margin: 10px;
    }

    .form {
        border: 1px solid hsla(31, 15%, 50%, .25);
        padding: 10px;
    }
</style>