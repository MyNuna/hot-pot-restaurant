<template>
  <div class="page">
    <div class="nav">
      <img class="nav-logo" src="../assets/lhfw.jpg" />
      <!-- <h1>老虎发威</h1> -->
    </div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
      <el-menu-item index="/Views/Home">home</el-menu-item>
      <el-menu-item index="/Views/Person">person</el-menu-item>
      <el-menu-item index="/Views/Demo">demo</el-menu-item>
      <el-menu-item index="/Views/About">about</el-menu-item>
      <el-menu-item index="/Views/MyLove">MyLove</el-menu-item>
      <el-menu-item><i class="el-icon-minus el-menu-demo-icon"></i></el-menu-item>
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
import {getLanguage,setLanguage} from "@/common/cache.js"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      activeIndex: '/Views/Demo/storeTest',
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
  created() { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() { 
    console.log(getLanguage());
   },
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() { },
  //方法集合
  methods: {
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