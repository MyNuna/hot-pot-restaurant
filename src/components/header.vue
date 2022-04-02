<template>
  <div class="page">
    <div class="nav">
      <img class="nav-logo" src="../assets/lhfw.jpg" />
      <!-- <h1>老虎发威</h1> -->
    </div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="item in menuList" :key="item.meta.index" :index="item.meta.index" @click="$router.push(`/${item.path}`)">{{$t(item.name)}}</el-menu-item>
      <el-menu-item>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link"> 中文 <i class="el-icon-arrow-down el-icon--right"></i> </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in langOption" :key="item.index" :command="item.value">{{item.language}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
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
      langOption: [
        {index:0, language: "中文",value: "zh-CN"},
        {index:1, language: "English",value: "en"},
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.initHeader();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() { 
    // console.log(getLanguage());
   },
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() { },
  //方法集合
  methods: {
    initHeader() {
      let routerList = this.$router.options.routes[1].children;
      for (let item of routerList) {
        if(item.children) {
          item.path = `${item.path}/${item.children[0].path}`;
          // console.log(item);
        }
      }
      this.menuList = routerList;
      this.activeIndex = routerList[0].meta.index;
    },
    handleSelect(key, keyPath) {
      // console.log(key);
      // console.log(keyPath);
    },
    handleCommand(command){
      this.$i18n.locale = command
      console.log(command);
    },
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
  .el-menu-demo-icon {
  transform:rotate(90deg);
  color: #dedede;
}
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
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