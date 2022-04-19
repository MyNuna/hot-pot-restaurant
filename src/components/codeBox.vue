<template>
   <div class='page'>
       <pre>{{code}}</pre>
   </div>
</template>
<script>

export default {
//这里接收父组件传递进来的数据
props: {
    code: {
        type: String,
    },
},
data() {
//这里存放数据
return {
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    console.log(this.code);
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {},
//方法集合
methods: {},
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入css类 */
.page{}
</style>