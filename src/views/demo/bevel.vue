<template>
   <div class='page'>
       <div class="page-card">
           <div class="left-bottom">左下角</div>
           <div class="card-right">
               <h3>css</h3>
               <span class="right-text">{{"background: linear-gradient(45deg, transparent 15px, pink 0);"}}</span>
           </div>
       </div>
       <div class="page-card">
           <div class="left-right-bottom">左下角和右下角</div>
           <div class="card-right">
               <h3>css</h3>
               <span class="right-text">{{"background: linear-gradient(45deg, transparent 15px, pink 0);"}}</span>
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
.left-right-bottom {
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg, transparent 15px, pink 0),
                linear-gradient(-45deg, transparent 15px, green 0);
    background-size: 50% 100%;
}
.left-bottom {
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg, transparent 15px, pink 0);
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
        padding: 0 20px;
    }
}
</style>