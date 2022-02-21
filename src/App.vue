<template>
  <div id="app">
    <div class="page-background"></div>
    <router-view />
  </div>
</template>
<script>
// import haha from "../public/live2dw/live2d-widget-model-z16/assets"
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
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: 'live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: 'live2d-widget-model-hijiki/assets/',
        tagMode: false,
        debug: false,
        model: { jsonPath: '/live2dw/live2d-widget-model-hijiki/assets/hijiki.model.json' },
        display: { position: 'left', width: 150, height: 300 },
        mobile: { show: true },
        log: false,
      })
    }, 3000)
  },
  mounted() {
    console.log('123');
    console.log(process.env.APP_PUBLISH);
  },
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() { },
  //方法集合
  methods: {

  },
}
</script>
<style lang='scss' scoped>
</style>
