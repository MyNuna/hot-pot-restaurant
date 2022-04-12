<template>
   <div class='page'>
      <div class="page-card">
         <h1>水平居中</h1>
         <ul><li><h3>子元素为行内元素</h3></li></ul>
         <div>父元素是块级元素直接给父元素设置"text-align: center;"</div>
         <div class="father father01">
            <span class="son01">son</span>
         </div>
         <div class="text"></div>
         <div>父元素是行内元素将父元素变成块级元素(),再给父元素设置"text-align: center;"</div>
         <span class="father father02">
            <span class="son02">son</span>
         </span>
         <ul><li><h3>子元素为块级元素</h3></li></ul>
         <div>1、父元素是块级元素,子元素给定高度、宽度。给子元素设置margin: 0 auto;</div>
         <div class="father father03">
            <div class="son03">son</div>
         </div>
         <div>2、父元素是块级元素,子元素给定高度、宽度。父元素设置相对定位，子元素设置绝对定位,再设置子元素left:50%;(此时子元素的左上角水平居中),再设置子元素margin-left: -子元素宽度的一半;或者transform:translateX(-50%)</div>
         <div class="father father04">
            <div class="son04">son</div>
         </div>
         <div>3、父元素是块级元素,子元素不给定高度,将子元素变为行内元素(display:inline或display:inline-block),然后给父元素设置text-align: center;</div>
         <div class="father father05">
            <div class="son05">son</div>
         </div>
         <div>4、父元素是块级元素,子元素不给定高度,父元素设置相对定位，子元素设置绝对定位,再设置子元素left:50%;(此时子元素的左上角水平居中),再设置子元素transform:translateX(-50%)</div>
         <div class="father father06">
            <div class="son06">son</div>
         </div>
         <div>5、父元素是块级元素,使用flexbox布局实现,</div>
         <div class="father father07">
            <div class="son07">son</div>
         </div>
      </div>
      <div class="page-card">
         <h1>垂直居中</h1>
         <ul><li><h3>子元素为行内元素</h3></li></ul>
         <div>父元素为块级元素,子元素为单行的行内元素,设置子元素的行高等于父元素的高</div>
         <div class="father father08">
            <span class="son08">son</span>
         </div>
         <div>父元素为块级元素,子元素为多行的行内元素,给父元素设置display:table-cell;或者vertical-align:middle;</div>
         <div class="father father09">
            <span class="son09">son</span>
         </div>
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
mounted() {},
//如果页面有keep-alive缓存功能，这个函数会触发
activated() {},
//方法集合
methods: {},
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入css类 */
.father0 {
   .son0 {}
}
.father09 {
   .son09 {}
}
.father08 {
   .son08 {
      line-height: 50px;
      background-color: pink;
   }
}
.father07 {
   display: flex;
   justify-content: center;
   .son07 {
      background-color: pink;
   }
}
.father06 {
   position: relative;
   .son06 {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      width: 30px;
      height: 30px;
      background-color: pink;
   }
}
.father05 {
   text-align: center;
   .son05 {
      display: inline;
      background-color: pink;
   }
}
.father04 {
   position: relative;
   .son04 {
      position: absolute;
      left: 50%;
      // margin: -15px;
      transform: translate(-50%);
      width: 30px;
      height: 30px;
      background-color: pink;
   }
}
.father03 {
   .son03 {
      width: 30px;
      height: 30px;
      background-color: pink;
      margin: 0 auto;
   }
}
.father02 {
   display: block;
   text-align: center;
   .son02 {}
}
.father01 {
   text-align: center;
   .son01 {
      background-color: pink;
   }
}
.father {
   height: 50px;
   background: #f7f7f7;
}
.text {}
</style>