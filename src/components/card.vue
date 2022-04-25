<template>
  <div class="main">
    <div class="box front">
        <p>{{cardName}}</p>
      <div class="frontTest"></div>
    </div>
    <div class="box behind" @click="flip">
        <p>背面</p>
      <div class="behindTest"></div>
    </div>
  </div>
</template>
<script>

export default {
  //这里接收父组件传递进来的数据
  props: {
    cardName: {
      type: String,
    },
    frontImg: {
      type: String,
    },
    behind: {
      type: String,
    },
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
  methods: {
      draw(){
          this.$emit("click");
          this.flip();
      },
      flip(){
          console.log(`翻面`);
          const front = document.querySelector(".front");
          const behind = document.querySelector(".behind");
          front.style.transform = "rotateY(0deg)";
          behind.style.transform = "rotateY(-180deg)";
      },
  },
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入css类 */
.main {
  width: 100px;
  height: 200px;
  -webkit-perspective: 1500px;
  -moz-perspective: 1500px;
  .box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 200px;
    transition: all 1s;
    backface-visibility: hidden;
    border-radius: 10px;
    cursor: pointer;
    p{
        text-align: center;
        line-height: 200px;
    }
  }
  .front {
    background: skyblue;
    transform: rotateY(-180deg);
    .frontTest {
    }
  }
  .behind {
    background: tomato;
    .behindTest {
    }
  }
}
</style>