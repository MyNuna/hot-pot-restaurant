<template>
  <div class="page">
    <div class="list">
      <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
      <!-- layout代表组件布局，子组件名用逗号分隔 
      属性： total代表总条目数 
      属性： current-page代表总当前页数
      事件： current-change用于监听页数改变，而内容也发生改变-->
      <div class="block">
        <el-pagination
          :layout="layout"
          :total="total"
          :page-size="pageSize"
          @current-change="handleCurrentChange"
        ></el-pagination>
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
      // 分页控件的功能
      layout: "total,prev, pager, next",
      currentPage: 1,
      pageSize: 5,
      total: 0,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() { },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initList();
  },
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() { },
  //方法集合
  methods: {
    // handleSizeChange(val) {
    //   this.pageSize = val;
    //   console.log(`每页 ${val} 条`);
    // },
    initList() {
      this.total = this.tableData.length;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  },
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入css类 */
.page {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
}
.list {
  margin: 10px;
}
.block {
  position: absolute;
  bottom: 0;
}
</style>