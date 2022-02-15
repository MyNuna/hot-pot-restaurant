<template>
  <div class="page">
    <div class="card">
      <div id="main" class="card-echart"></div>
    </div>
  </div>
</template>
<script>
var myChart
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
  created() { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initEcharts();
  },
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() { },
  //方法集合
  methods: {
    //   销毁实例，在每次图表容器被销毁时都调用一下，防止内存泄漏，参数为初始化后的图表对象
    disposeEcharts(obj) {
      obj.dispose();
    },
    //   重置图表
    resizeEcharts(obj, w = 0, h = 0) {
      //  重置图表大小可以不传参数
      obj.resize({
        width: w,
        height: h
      });
    },
    //  初始化图表，每次图表容器初始化时都调用一下
    initEcharts() {
      var main = document.getElementById("main")
      // 指定图表容器大小
      var echartsSize = {
        // width: 0,
        // height: 0,
      }
      // 初始化echarts,main为图表所依托的容器（不可为空），“dark”为图表主题（可为空），echartsSize为图表大小
      myChart = this.$echarts.init(main, null, echartsSize,);
      // 指定图表的配置项和数据
      var option = {
        legend: {},
        tooltip: {},
        // 设置图标渲染的数据
        dataset: [
          {
            source: [
              ["product", "衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
              ["销量", 5, 20, 36, 10, 10, 20],
              ["试穿", 15, 30, 40, 20, 10, 0],
            ]
          },
          {
            source: []
          }
        ],
        xAxis: { type: 'category' },
        yAxis: {},
        series: [
          { type: 'bar', seriesLayoutBy: 'row', encode: { x: "product", y: "销量" }, },
          { type: 'bar', seriesLayoutBy: 'row', encode: { x: 0, y: 2 } },
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入css类 */
.page {
}
.card {
  height: 450px;
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
  .card-echart {
    height: 400px;
    width: 600px;
  }
}
</style>