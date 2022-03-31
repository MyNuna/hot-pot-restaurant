<template>
  <div class="page">
    <el-menu :default-active="activeIndex" mode="vertical" @select="handleSelect">
      <div v-for="item in menuList" :key="item.meta.index">
        <el-menu-item :index="item.meta.index" @click="$router.push(`/Demo/${item.path}`)">{{item.name}}</el-menu-item>
      </div>
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
      menuList:[],
      activeIndex: '',
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.routerInit();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() { },
  //方法集合
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    routerInit() {
      let routerList = this.$router.options.routes[1].children[1].children;
      this.menuList = routerList;
      this.activeIndex = routerList[0].meta.index;

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