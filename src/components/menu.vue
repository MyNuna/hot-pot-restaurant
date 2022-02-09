<template>
  <div class="page">
    <!-- <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu> -->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical" @select="handleSelect">
      <el-menu-item index="1">Basic(基本的)</el-menu-item>
      <el-menu-item index="2">Form(表单)</el-menu-item>
      <el-menu-item index="3">Data(数据)</el-menu-item>
      <el-menu-item index="4">Notice(注意)</el-menu-item>
      <el-menu-item index="5">Navigation(导航)</el-menu-item>
      <el-menu-item index="6">Others(其他)</el-menu-item>
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
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
    },
  },
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入css类 */
.page {
  margin: 0;
  padding: 0;
  width: 200px;
  height: 100%;
  border-left: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
}
</style>