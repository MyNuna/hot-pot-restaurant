<template>
  <div class="page">
    <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="vertical" @select="handleSelect">
      <!-- <el-menu-item index="/Views/Demo/echarts">echarts</el-menu-item> -->
      <el-submenu index="/Views/Demo/echarts">
        <template slot="title"><span>echarts</span></template>
        <el-menu-item-group>
          <el-menu-item index="/Views/Demo/echarts/lineEcharts">lineEcharts</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/Views/Demo/storeTest">storeTest</el-menu-item>
      <el-menu-item index="/Views/Demo/listTest">listTest</el-menu-item>
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
}
.el-menu {
  border-right: 0;
}
</style>