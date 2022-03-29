<template>
   <div class='page'>
       <div class="page-card">
           <div class="left-bottom">左下角</div>
           <div class="card-right">
               <h3>css</h3>
               <span>background: linear-gradient(45deg, transparent 15px, pink 0);</span>
           </div>
       </div>
       <div class="page-card">
           <div class="left-right-bottom">左下角和右下角</div>
           <div class="card-right">
               <h3>css</h3>
               <div>background: linear-gradient(45deg, transparent 15px, pink 0) left,</div>
               <!-- &emsp;占两个字符一个汉字的长度，&nbsp;占一个字符的长度 -->
               <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;linear-gradient(-45deg, transparent 15px, green 0) right;</div> 
               <div>background-size: 50% 100%; 背景大小，前一个参数是宽度，后一个参数是高度</div> 
               <div>background-repeat: no-repeat; 防止背景重复加载</div> 
           </div>
       </div>
       <div class="page-card">
           <div class="top-bottom-left-right">四个外角</div>
           <div class="card-right">
               <h3>css</h3>
               <div>background: linear-gradient(135deg, transparent 15px, pink 0) top left,</div>
               <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;linear-gradient(-135deg, transparent 15px, pink 0) top right,</div> 
               <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;linear-gradient(45deg, transparent 15px, pink 0) bottom left,</div> 
               <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;linear-gradient(-45deg, transparent 15px, pink 0) bottom right;</div> 
               <div>background-size: 50% 50%;</div> 
               <div>background-repeat: no-repeat;</div> 
           </div>
       </div>
       <div class="page-card">
           <div class="filleting">内圆角</div>
           <div class="card-right">
               <h3>css</h3>
               <div>background: radial-gradient(circle at top left, transparent 15px, pink 0) top left,</div>
               <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;radial-gradient(circle at top right, transparent 15px, pink 0) top right,</div> 
               <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;radial-gradient(circle at bottom right, transparent 15px, pink 0) bottom right,</div> 
               <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;radial-gradient(circle at bottom left, transparent 15px, pink 0) bottom left;</div> 
               <div>background-size: 50% 50%;</div> 
               <div>background-repeat: no-repeat;</div> 
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
.page{}
.filleting {
    width: 100px;
    height: 100px;
    background: radial-gradient(circle at top left, transparent 15px, pink 0) top left,
                radial-gradient(circle at top right, transparent 15px, pink 0) top right,
                radial-gradient(circle at bottom right, transparent 15px, pink 0) bottom right,
                radial-gradient(circle at bottom left, transparent 15px, pink 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
}
.top-bottom-left-right {
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, transparent 15px, pink 0) top left,
                linear-gradient(-135deg, transparent 15px, pink 0) top right,
                linear-gradient(45deg, transparent 15px, pink 0) bottom left,
                linear-gradient(-45deg, transparent 15px, pink 0) bottom right;
    background-size: 50% 50%;
    background-repeat: no-repeat;
}
.left-right-bottom {
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg, transparent 15px, pink 0) left,
                linear-gradient(-45deg, transparent 15px, green 0) right;
    background-size: 50% 100%; // 背景大小，前一个参数是宽度，后一个参数是高度
    background-repeat: no-repeat; // 防止背景重复加载
}
.left-bottom {
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg, transparent 15px, pink 0) ;
}
.page-card {
    display: flex;
    background: #fff;
    border-radius: 8px;
    // width: 100%;
    min-height: 100px;
    margin: 0 0 10px 0;
    padding: 20px;
    
    .card-right {
        padding: 0 20px;;
    }
}
</style>