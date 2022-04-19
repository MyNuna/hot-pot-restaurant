<template>
  <div id="app">
    <div class="page-background"></div>
    <router-view />
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    ...mapGetters(["getIsPhone",])
  },
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）   
  created() {
    // this.clickText();
    this.isMove();
    // console.log(`APP.vue is created`);
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
    // console.log(`APP.vue is mounted`);
    // console.log('123');
    // console.log(process.env.APP_PUBLISH);
  },
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() { },
  //方法集合
  methods: {
    ...mapMutations(["setIsPhone"]),
    // 鼠标点击随机出现文字
    clickText() {
      let arr = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"]
      let flag = true
      document.body.addEventListener('click', function (e) {

        if (flag) {
          let X = e.pageX;  //字体的x坐标
          let Y = e.pageY;  //字体的y坐标
          let curT = Y;
          let curF = 20;  //字体的大小
          let curO = 1;    //opacity
          // 随机出现的标题
          let title = arr[Math.floor(Math.random() * 12)]
          let span = document.createElement('span')
          span.className = 'idName'
          span.innerText = title
          //初始化节点
          span.style.position = "fixed"
          span.style.top = curT + 'px';
          span.style.fontSize = curF + 'px'
          span.style.opacity = curO;
          span.style.left = X + 'px';
          document.body.appendChild(span)
          let a = document.getElementsByClassName('idName')[0]

          // 随机颜色
          a.style.color = 'rgb(' + Math.floor(Math.random() * 225) + ',' + Math.floor(Math.random() * 225) + ',' + Math.floor(Math.random() * 225) + ')'
          // console.log(a)
          // 开启定时器
          this.timer = setInterval(() => {
            curT -= 10;
            curF += 1
            curO -= 0.1
            a.style.top = curT + 'px';
            a.style.fontSize = curF + 'px'
            a.style.opacity = curO;
          }, 50)
          setTimeout(() => {
            // 清除定时器
            clearInterval(this.timer)
            document.body.removeChild(a)
            flag = true
          }, 500)
          flag = false
        }
      });
    },
    isMove() {
      let isMove = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) ? true : false;
      // console.log(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i));
      // console.log(isMove);
      this.setIsPhone(isMove);
      // console.log(this.getIsPhone);
    },
  },
}
</script>
<style lang='scss' scoped>
</style>
