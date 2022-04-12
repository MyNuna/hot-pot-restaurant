<template>
  <div class="page">
    <div class="header">
      <page-header></page-header>
    </div>
    <div class="main">
      <router-view />
    </div>
    <div class="foot">
      <page-foot></page-foot>
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
  created() {
    console.log(`views.vue is created`);
   },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log(`views.vue is mounted`);
  },
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() { },
  //方法集合
  methods: {},
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入css类 */
.page {
}
.header {
  position: absolute;
  line-height: 50px;
  top: 0px;
  left: 0px;
  right: 0px;
  // background-color: #2d3a4b;
}
.main {
  position: absolute;
  top: 70px;
  left: 0px;
  bottom: 30px;
  right: 0px;
  padding: 10px;
  margin: 0 10%;
  // overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
}
// .main::-webkit-scrollbar{
//   width: 0;
// }
.foot {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 25px;
  // border-top: 1px solid #dedede;
}
</style>