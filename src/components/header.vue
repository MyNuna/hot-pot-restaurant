<template>
  <div class="page">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router="true">
      <el-menu-item index="/Views/Home">
        <img class="nav-logo" src="@/assets/lhfw.jpg" alt="老虎发威" />
      </el-menu-item>
      <el-menu-item index="/Views/Home">home</el-menu-item>
      <el-menu-item index="/Views/Person">person</el-menu-item>
      <el-menu-item index="/Views/About">about</el-menu-item>
      <el-menu-item index="/Views/MyLove">MyLove</el-menu-item>
    </el-menu>
    <!-- <div class="line"></div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu>-->
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
      // switch (key) {
      //   case '0':
      //     console.log('logo');
      //     break;
      //   case '1':
      //     console.log('home');
      //     this.$router.push('/Views/Home');
      //     break;
      //   case '2':
      //     console.log('person');
      //     this.$router.push('/Views/Person');
      //     break;
      //   case '3':
      //     console.log('about');
      //     this.$router.push('/Views/About');
      //     break;
      //   case '4':
      //     console.log('MyLove');
      //     this.$router.push('/Views/MyLove');
      //     break;
      //   default:
      //     break;
      // }
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