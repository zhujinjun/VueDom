<template>
    <div>
        <p>{{msg}}</p>
        <p>{{math}}</p>
        <div>
            <button @click="fn">按钮</button>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'demo',
        props: {
            //不可为空
            msg: {
                type: String,
                required: true,
            },
            //带有默认值
            math: {
                type: Number,
                default: 10
            },
            fn: Function,
            //自定义函数验证
            status: {
                type: String,
                validator: function (params) {
                    // 这个值必须匹配下列字符串中的一个
                    return ['0', '1', '2'].indexOf(params) !== -1
                }
            },
            subjectId: String,
        },

        computed: {
            normalizedSize: function () {
                return this.msg + "1989";
            }
        },
        data: function () {
            return {
                counter: 0,
                newMsg: '',
            }
        },

        created() {
            // this.newMsg = this.msg;
            // console.log(this.newMsg);
            // console.log(this.newMsg.toLowerCase());
            // this.counter = this.a;
            // console.log(this.a + 1)
            // console.log(this.b)
            // alert(11);
            // console.log(this.normalizedSize);
            console.log(this.math);
            console.log(this.status


            );
        },
    }
</script>