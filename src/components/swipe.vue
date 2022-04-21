<template>
  <div class="focus">
    <a href="javascript:;" class="arrow-l">&lt;</a>
    <a href="javascript:;" class="arrow-r"></a>
    <ul>
      <li v-for="(item,index) in swipeList" :key="index"> 
          <a href="#"><img :src="item" alt=""></a>
      </li>
    </ul>
    <!-- 小圆圈 -->
    <ol class="circle"></ol>
  </div>
</template>
<script>

export default {
  //这里接收父组件传递进来的数据
  props: {
    swipeList: {
      sype: Array,
    }
  },
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
  mounted() { },
  //方法集合
  methods: {},
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入css类 */
.page {}
.focus {
    position: relative;
    width: 721px;
    height: 455px;
    background-color: purple;
    overflow: hidden;
    .arrow-l,.arrow-r {
        position: absolute;
        text-align: center;
        font-family: 'icomoon';
        z-index: 2;
    }
    ul {
        position: absolute;
        width: 600%;
        top: 0;
        left: 0;
        li {
            float: left;
        }
    }
}
</style>