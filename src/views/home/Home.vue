<template>
  <div class="page">
    <div class="page-left">
      <div class="title">
        <h1>Welcome!</h1>
      </div>
      <div class="main"></div>
    </div>
    <div class="page-right"></div>
  </div>
</template>
<script>

export default {
  //import引入的组件需要注入到对象中才能使用
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() { },
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() { },
  //方法集合
  methods: {},
}
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
.page {
  border-radius: 8px;
  height: 100%;
  .page-left {
    position: absolute;
    top: 0;
    left: 0;
    right: 211px;
    bottom: 0;
    border-radius: 8px;
    background-color: #fff;
  }
  .page-right {
    position: absolute;
    width: 200px;
    top: 0;
    // left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    background-color: #fff;
    // 当鼠标悬浮在父元素上的时候
    // &:hover{
    //   background-color: #fff;
    // }
    // 当用户点击父元素的时候
    &:active{
      background-color: red;
    }
  }
}
.title {
}
.main {
}
</style>