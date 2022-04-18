<template>
  <div class="page">
    <div class="menu">
      <page-menu></page-menu>
    </div>
    <div class="main">
      <router-view />
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
  created() { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() { },
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() { },
  //方法集合
  methods: {},
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入css类 */
.page {}
.menu {
  position: absolute;
  width: 150px;
  top: 0px;
  left: 0px;
  bottom: 0px;
  overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
  // border-right: 1px solid #dedede;
  background-color: #fff;
  border-radius: 6px;
}
.main {
  position: absolute;
  top: 0px;
  left: 211px;
  bottom: 0px;
  right: 0px;
  padding: 0 10px;
  overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
  // background-color: #fff;
  // border-radius: 8px;
}
.main::-webkit-scrollbar {
  width: 0;
}
</style>