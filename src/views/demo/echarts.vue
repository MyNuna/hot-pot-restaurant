<template>
   <div class='page'>
      <div class="card">
         <div id="main" class="card-echart"></div>
      </div>
   </div>
</template>
<script>

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
created() {},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
   this.initEcharts();
},
//如果页面有keep-alive缓存功能，这个函数会触发
activated() {},
//方法集合
methods: {
    initEcharts(){
       var main = document.getElementById("main")
      var myChart = this.$echarts.init(main);
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
},
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入css类 */
.page{}
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