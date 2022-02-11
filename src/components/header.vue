<template>
  <div class="page">
    <div class="nav">
      <img class="nav-logo" src="@/assets/lhfw.jpg" alt="老虎发威" />
    </div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
      <el-menu-item index="/Views/Home">home</el-menu-item>
      <el-menu-item index="/Views/Person">person</el-menu-item>
      <el-menu-item index="/Views/Demo/demo1">demo</el-menu-item>
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
      activeIndex: '/Views/Demo/demo1',
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
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  height: 60px;
  font-size: 32px;
  line-height: 60px;
  border-bottom: 1px solid #dedede;
  background-color: #fff;
}
.el-menu-demo {
  position: absolute;
  right: 20px;
  height: 60px;
  border: 0;
}
.nav {
  margin-left: 30px;
  height: 60px;
  width: 60px;
  position: relative;
}
.nav-logo {
  height: 50px;
  width: 50px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
</style>