<template>
  <div id="app">
    <page-header class="page-header"></page-header>
    <div class="page-main">
      <page-menu class="main-menu"></page-menu>
      <div class="main"><router-view/></div>
    </div>
    <page-foot class="page-foot"></page-foot>
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
.page-header{
  // position: fixed;
  // top: 0;
  // left: 0;
  // width: 100%;
}
.page-main{
  display: flex;
  flex-direction: row;
  height: 100%;
  .main-menu{}
  .main{}
}
.page-foot{
  position: fixed;
  bottom: 0;
  left: 0;
  height: 52px;
  width: 100%;
  z-index: 1;
}
</style>
