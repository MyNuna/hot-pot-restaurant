<template>
  <div class="page">
    <div class="page-card">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
      <div class="plaintext">
        <h3>明文：</h3>
        <el-input type="textarea" :autosize="{minRows:10}" v-model="plaintext" placeholder="请输入明文"></el-input>
      </div>
      <div class="buttons">
        <el-button-group>
          <el-button type="primary" @click="encrypt" icon="el-icon-bottom">加密</el-button>
          <el-button type="primary" @click="decrypt">
            解密
            <i class="el-icon-top"></i>
          </el-button>
          <el-button type="primary" @click="clean">清除 <i class="el-icon-delete"></i> </el-button>
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
      activeName: 'second',
      dict: ["哦", "嗷", "唔", "~"],
      hex: ["00", "01", "10", "11"],
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
    handleClick(tab, event) {
        console.log(tab, event);
      },
    clean() {
        this.plaintext = "";
        this.ciphertext = "";
    },
    encrypt() {
      let plaintext = this.plaintext;
      let newStr = "";
      for (let item of plaintext) {
        // console.log(item.charCodeAt());
        let str = item.charCodeAt().toString(2).padStart(16, '0');
        // console.log(str);
        // console.log(str1);
        for (let index = 0; index < str.length; index += 2) {
          //   console.log(str[index] + str[index+1]);
          let key = str[index] + str[index + 1];
          switch (key) {
            case this.hex[0]:
              newStr += this.dict[0];
              break;
            case this.hex[1]:
              newStr += this.dict[1];
              break;
            case this.hex[2]:
              newStr += this.dict[2];
              break;
            case this.hex[3]:
              newStr += this.dict[3];
              break;
            default:
              break;
          }
        }
        // console.log(newStr);
      }
      this.ciphertext = newStr;
    },
    decrypt() {
      let ciphertext = this.ciphertext;
      let sumStr = "";
      for (let index = 0; index < ciphertext.length; index += 8) {
        let addStr = "";
        let newStr = "";
        for (let i = index; i < index + 8; i++) {
          addStr += ciphertext[i];
        };
        // console.log(addStr);
        // console.log(`----${index}----`);
        for (const item of addStr) {
          //   console.log(item);
          switch (item) {
            case this.dict[0]:
              newStr += this.hex[0]
              break;
            case this.dict[1]:
              newStr += this.hex[1]
              break;
            case this.dict[2]:
              newStr += this.hex[2]
              break;
            case this.dict[3]:
              newStr += this.hex[3]
              break;
            default:
              break;
          }
        }
        // console.log(String.fromCharCode(parseInt(newStr, 2)));
        sumStr += String.fromCharCode(parseInt(newStr, 2));
      }
      this.plaintext = sumStr;
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
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
}
.ciphertext {
}
</style>