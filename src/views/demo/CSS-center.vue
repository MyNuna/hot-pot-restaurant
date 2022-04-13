<template>
   <div class='page'>
      <div class="page-card">
         <h1>水平居中</h1>
         <ul><li><h3>子元素为行内元素</h3></li></ul>
         <div>1、父元素是块级元素直接给父元素设置"text-align: center;"</div>
         <div class="father father01">
            <span class="son son01">son</span>
         </div>
         <div class="text"></div>
         <div>2、父元素是行内元素将父元素变成块级元素(),再给父元素设置"text-align: center;"</div>
         <span class="father father02">
            <span class="son son02">son</span>
         </span>
         <ul><li><h3>子元素为块级元素</h3></li></ul>
         <div>1、父元素是块级元素,子元素给定高度、宽度。给子元素设置margin: 0 auto;</div>
         <div class="father father03">
            <div class="son son03">son</div>
         </div>
         <div>2、父元素是块级元素,子元素给定高度、宽度。父元素设置相对定位，子元素设置绝对定位,再设置子元素left:50%;(此时子元素的左上角水平居中),再设置子元素margin-left: -子元素宽度的一半;或者transform:translateX(-50%)</div>
         <div class="father father04">
            <div class="son son04">son</div>
         </div>
         <div>3、父元素是块级元素,子元素不给定高度,将子元素变为行内元素(display:inline或display:inline-block),然后给父元素设置text-align: center;</div>
         <div class="father father05">
            <div class="son son05">son</div>
         </div>
         <div>4、父元素是块级元素,子元素不给定高度,父元素设置相对定位，子元素设置绝对定位,再设置子元素left:50%;(此时子元素的左上角水平居中),再设置子元素transform:translateX(-50%)</div>
         <div class="father father06">
            <div class="son06">son</div>
         </div>
         <div>5、父元素是块级元素,使用flexbox布局实现,</div>
         <div class="father father07">
            <div class="son son07">son</div>
         </div>
      </div>
      <div class="page-card">
         <h1>垂直居中</h1>
         <ul><li><h3>子元素为行内元素</h3></li></ul>
         <div>1、父元素为块级元素,子元素为单行的行内元素,设置子元素的行高等于父元素的高</div>
         <div class="father father08">
            <span class="son son08">son</span>
         </div>
         <div>2、父元素为块级元素,子元素为多行的行内元素,给父元素设置display:table-cell;和vertical-align:middle;</div>
         <div class="father09">
            <span class="son son09">子元素为多行的行内元素,子元素为多行的行内元素,子元素为多行的行内元素,子元素为多行的行内元素,子元素为多行的行内元素,子元素为多行的行内元素,</span>
         </div>
         <ul><li><h3>子元素为块级元素</h3></li></ul>
         <div>1、父元素为块级元素,子元素给定高度、宽度。父元素设置相对定位，子元素设置绝对定位,再设置子元素top:50%;(此时子元素的左上角水平居中),再设置子元素margin-top: -子元素宽度的一半;或者transform:translateY(-50%)</div>
         <div class="father father10">
            <div class="son son10">son</div>
         </div>
         <div>2、父元素为块级元素,子元素不给定高度、宽度。父元素设置相对定位，子元素设置绝对定位,再设置子元素top:50%;(此时子元素的左上角水平居中),再设置子元素transform:translateY(-50%)</div>
         <div class="father father11">
            <div class="son son11">son</div>
         </div>
         <div>2、父元素为块级元素,使用flexbox布局实现</div>
         <div class="father father12">
            <div class="son son12">son</div>
         </div>
      </div>
      <div class="page-card">
         <h1>水平垂直居中</h1>
         <ul><li><h3>已知宽高的子元素</h3></li></ul>
         <div>1、设置父元素相对定位,子元素绝对定位top:0;right:0;bottom:0;left:0;margin:auto;</div>
         <div class="father father13">
            <div class="son son13">son</div>
         </div>
         <div>2、设置父元素相对定位,子元素绝对定位top:50%;left:50%;margin-top:-子元素高度的一半;margin-left:-子元素宽度的一半;</div>
         <div class="father father14">
            <div class="son son14">son</div>
         </div>
         <ul><li><h3>未知宽高的子元素</h3></li></ul>
         <div>1、设置父元素为相对定位，子元素绝对定位top:50%;left:50%;transform:translate(-50%,-50%)</div>
         <div class="father father15">
            <div class="son son15">son</div>
         </div>
         <div>2、设置父元素为flex布局align-items:center;justify-content:center;</div>
         <div class="father father16">
            <div class="son son16">son</div>
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
.father16 {
   display: flex;
   justify-content: center;
   align-items: center;
   .son16 {}
}
.father15 {
   position: relative;
   .son15 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: pink;
   }
}
.father14 {
   position: relative;
   .son14 {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -15px;
      margin-left: -15px;
      width: 30px;
      height: 30px;
      background-color: pink;
   }
}
.father13 {
   position: relative;
   .son13 {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 30px;
      height: 30px;
      background-color: pink;
   }
}
.father12 {
   display: flex;
   align-items: center;
   .son12 {}
}
.father11 {
   position: relative;
   .son11 {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
   }
}
.father10 {
   position: relative;
   .son10 {
      position:absolute;
      top: 50%;
      // margin-top: -15px;
      transform: translateY(-50%);
      width: 30px;
      height: 30px;
   }
}
.father09 {
   background-color: #f7f7f7;
   height: 100px;
   display: table-cell;
   vertical-align: middle;
   .son09 {
      background-color: pink;
   }
}
.father08 {
   .son08 {
      line-height: 50px;
   }
}
.father07 {
   display: flex;
   justify-content: center;
   .son07 {
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
   }
}
.father05 {
   text-align: center;
   .son05 {
      display: inline;
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
   }
}
.father03 {
   .son03 {
      width: 30px;
      height: 30px;
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
   .son01 {}
}
.father {
   height: 50px;
   background: #f7f7f7;
   .son {
      background-color: pink;
   }
}
.text {}
</style>