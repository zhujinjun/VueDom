#### 一、组件介绍
> 可复用的Vue实例（可复用）、类似面向对象中的继承或组合。
#### 二、组件名大小写
- kebab-case:定义组件命名和引用组件命名保持一致。
- PascalCase:定义组件和引用组件两种命名格式都是指。注意`在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的`。为了直观性，规范性推荐 ``kebab-case``命名方式
#### 三、Prop
``prop`` 写法

prop 可以接受如下数据类型
```
//推存写法（易读、易维护）
props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object
}
```
``prop 传递对象的两种写法``
```
html:
<blog-post v-bind="post"></blog-post>

js:
post: { id: 1, name: 'hello' }
```
等价于
```
html:
<blog-post v-bind:id="post.id" v-bind:name="post.name"></blog-post>

js:
id:1,
name:'hello',
```
#### 四、数据流向
- prop只能父组件向子组件单向流动。
- 流向子组件的prop值不能发生改变。(改变方式：1、本地自定属性改变，2、用计算属性)
>注意：在 JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变这个对象或数组本身将会影响到父组件的状态。

#### 五、Prop 验证
健壮组件。友好提示，方便调用者排错。
```
props: {
    /不可为空
    sg: {
       type: String,
       required: true,
    ,
    /带有默认值
    ath: {
       type: Number,
       default: 10
    ,
    /自定义函数验证
    status: {
       type: String,
       validator: function (params) {
           // 这个值必须匹配下列字符串中的一个
           return ['0', '1', '2'].indexOf(params) !== -1
       }
    }
}
```
#### 六、访问根实例
通过 `$root`
```
// 获取根组件的数据
this.$root.foo

// 写入根组件的数据
this.$root.foo = 2
```
#### 七、访问父级组件实例
通过 `$parent`
```
// 获取根组件的数据
this.$parent.foo
```
注意：这种只能访问当前组件的父级，不能隔代访问。最好使用prop方式传入子组件。
#### 八、访问子组件实例或子元素
尽管存在 prop 和事件，有的时候你仍可能需要在 JavaScript 里直接访问一个子组件。为了达到这个目的，你可以通过 ref 特性为这个子组件赋予一个 ID 引用
```
<base-input ref="usernameInput"></base-input>
```
访问
```
this.$refs.usernameInput
```
#### 九 依赖注入（provide和inject）、
- provide：提供给后代组件的数据和方法
  ```
  provide: {
    foo: 'bar'
  }
  ```
- inject：子组件注入父组件提供的属性和方法
  ```
  inject: {
    foo: { default: 'foo' }
  }
  //用法
  this.foo
  ```


