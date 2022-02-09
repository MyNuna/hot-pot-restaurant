<template>
  <div class="page">this is about page</div>
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
  margin: 0;
  padding: 0;
}
</style>