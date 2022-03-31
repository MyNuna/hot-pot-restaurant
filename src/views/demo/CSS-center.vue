<template>
   <div class='page'>
      <div class="page-card">
         <h1>水平居中</h1>
         <ul><li><h3>子元素为行内元素</h3></li></ul>
         <div>父元素是块级元素直接给父元素设置"text-align: center;"</div>
         <div class="father father01">
            <div class="son01">this is son</div>
         </div>
         <div class="text"></div>
         <div>父元素是行内元素将父元素变成块级元素(),再给父元素设置"text-align: center;"</div>
         <span class="father father02">
            <span class="son02"> this is son</span>
         </span>
         <ul><li><h3>子元素为块级元素</h3></li></ul>
         <div>父元素是块级元素</div>
      </div>
   </div>
</template>
<script>

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//生命周期 - 创建完成（可以访问当前this实例）
created() {},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {},
//如果页面有keep-alive缓存功能，这个函数会触发
activated() {},
//方法集合
methods: {},
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入css类 */
.page {}
.father02 {
   display: block;
   text-align: center;
   .son02 {}
}
.father01 {
   height: 200px;
   text-align: center;
   .son01 {
      border: 1px solid pink;
   }
}
.father {
   background: #f7f7f7;
}
.text {}
</style>