<template>
  <div class="page">
    <el-upload
      class="upload-demo"
      :action="action"
      :drag="drag"
      :multiple="multiple"
      :on-preview="onPreview"
      :on-exceed="onExceed"
      :on-change="onChange"
      :on-success="onSuccess"
      :on-error="onError"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      // 上传地址 121.43.144.7
      action: "",
      // 上传的请求头
      headers: "",
      // 是否启用拖拽上传
      drag: true,
      // 是否支持多文件
      multiple: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() { },
  //方法集合
  methods: {
    onPreview(file) {
        console.log(`onPreview.file:${file}`);
    },
    onExceed(files, fileList) {
        console.log(`onExceed.files:${files}`);
        console.log(`onExceed.fileList:${fileList}`);
    },
    // 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
    onChange(file, fileList) {
        console.log(`onChange.file:${file}`);
        console.log(`onChange.fileList:${fileList}`);
    },
    // 文件上传成功
    onSuccess(response, file, fileList) {
        console.log(`onSuccess.response: ${response}`);
        console.log(`onSuccess.file: ${file}`);
        console.log(`onSuccess.fileList: ${fileList}`);
    },
    // 文件上传失败
    onError(err, file, fileList) {
        console.log(`onError.err:${err}`);
        console.log(`onError.file:${file}`);
        console.log(`onError.fileList:${fileList}`);
    },
  },
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入css类 */
.page {
}
</style>