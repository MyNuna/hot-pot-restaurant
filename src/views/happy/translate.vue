<template>
  <div class="page">
    <div class="page-card">
      <div class="plaintext">
        <h3>明文：</h3>
        <el-input type="textarea" :autosize="{minRows:10}" v-model="plaintext" placeholder="请输入明文"></el-input>
      </div>
      <div class="buttons">
        <el-button-group>
          <el-button type="primary" plain @click="encrypt" icon="el-icon-bottom">加密</el-button>
          <el-button type="primary" plain @click="decrypt">解密<i class="el-icon-top el-icon--right"></i></el-button>
        </el-button-group>
      </div>
      <div class="ciphertext">
        <h3>密文：</h3>
        <el-input type="textarea" :autosize="{minRows:10}" v-model="ciphertext" placeholder="请输入密文"></el-input>
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
    return {
        dict: ["哦","嗷","唔","~"],
        plaintext: '',
        ciphertext: '',
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() { },
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() { },
  //方法集合
  methods: {
      encrypt() {
          let plaintext = this.plaintext;
          for (let item of plaintext) {
            //   console.log(item.charCodeAt());
              let str = item.charCodeAt().toString(2).padStart(16,'0');
              let newStr = "";
            //   console.log(str);
              for (let index = 0; index < str.length; index+=2) {
                //   console.log(str[index] + str[index+1]);
                  let key = str[index] + str[index+1];
                  switch (key) {
                      case "00":
                          newStr+=this.dict[0];
                          break;
                      case "01":
                          newStr+=this.dict[1];
                          break;
                      case "10":
                          newStr+=this.dict[2];
                          break;
                      case "11":
                          newStr+=this.dict[3];
                          break;
                      default:
                          break;
                  }
              }
              console.log(newStr);
          }
          this.ciphertext = this.plaintext;
      },
      decrypt() {
          this.plaintext = this.ciphertext;
      },
  },
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入css类 */
.page {
}
.plaintext {
}
.buttons {
}
.ciphertext {
}
</style>