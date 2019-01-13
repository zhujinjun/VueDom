<template>
    <div>
        <h3>自定义表单</h3>
        <div class="form">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
                <Form-Item label="用户名" prop="username">
                    <Input v-model="formValidate.username" @input="testinput"></Input>
                </Form-Item>
                <Form-Item label="密码" prop="pwd">
                    <Input v-model="formValidate.pwd" type="password" @input="testinput"></Input>
                </Form-Item>
                <Form-Item>
                    <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                    <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                </Form-Item>
            </Form>
        </div>

    </div>
</template>

<script>
    import Input from "../components/input/input.vue";
    import FormItem from "../components/form/form-item.vue";
    import Form from "../components/form/form.vue";
    export default {
        name: "login",
        components: {
            Input,
            FormItem,
            Form
        },
        data() {
            return {
                someinput: "hello",
                formValidate: {
                    username: "",
                    pwd: ""
                },
                ruleValidate: {
                    username: [
                        { required: true, message: "用户名不能为空", trigger: "blur" },
                        { min: 3, max: 8, message: "用户数量在3到8之间", trigger: "blur" }
                    ],
                    pwd: [{ required: true, message: "密码不能为空", trigger: "blur" }]
                }
            };
        },
        methods: {
            testinput(v) {
                // console.log(v);
            },
            handleSubmit(name) {
                console.log(this.$refs[name]);
                this.$refs[name].validate(valid => {
                    console.log(valid);
                    if (valid) {
                        alert("成功")
                    } else {
                        alert("失败");
                    }
                });
            },
            handleReset(name) {
                console.log(this.$refs[name]);
                this.$refs[name].resetFields();
            }
        }
    };
</script>

<style scoped>
    h3 {
        margin: 10px;
    }

    .form {
        border: 1px solid hsla(31, 15%, 50%, 0.25);
        padding: 10px;
    }
</style>