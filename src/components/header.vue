<template>
  <div class="page">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
      <el-menu-item index="/Views/Home">
        <img class="nav-logo" src="@/assets/lhfw.jpg" alt="老虎发威" />
      </el-menu-item>
      <el-menu-item index="/Views/Home/home1">home</el-menu-item>
      <el-menu-item index="/Views/Person">person</el-menu-item>
      <el-menu-item index="/Views/About">about</el-menu-item>
      <el-menu-item index="/Views/MyLove">MyLove</el-menu-item>
    </el-menu>
  </div>
</template>
<script>

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      activeIndex: '1',
    };
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
  methods: {
    handleSelect(key, keyPath) {
      console.log(key);
      console.log(keyPath);
    }
  },
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入css类 */
.page {
  position: relative;
  top: 0;
  left: 0;
  height: 80px;
  font-size: 32px;
  line-height: 80px;
}
.nav-logo {
  height: 50px;
  width: 50px;
}
</style>