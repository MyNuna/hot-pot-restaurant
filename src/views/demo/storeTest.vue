<template>
   <div class='page-card'>
       <div>{{this.$store.state.count}}</div>
       <input type="button" value="增加" @click="addfn()">
       <input type="button" value="减少" @click="lessmu()">
       <input type="button" value="求和" @click="sum(2)">
   </div>
</template>
<script>

import {mapGetters, mapMutations, mapState} from 'vuex'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {};
},
//监听属性 类似于data概念
computed: {
    ...mapState(["count","todos"]),
    ...mapGetters(["doneTodos",]),
},
//监控data中的数据变化
watch: {},
//生命周期 - 创建完成（可以访问当前this实例）
created() {},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    // console.log(`${this.count}`);
    // console.log(`${JSON.stringify(this.todos)}`);
    // console.log(this.$store.getters.doneTodos);
    // console.log(this.doneTodos);
},
//如果页面有keep-alive缓存功能，这个函数会触发
activated() {},
//方法集合
methods: {
    ...mapMutations(["addmu","lessmu","sum"]),
    ...mapMutations(["addmu1","lessmu1","sum1"]),
    // 调用store里的addmu
    addfn(){
        this.$store.dispatch("addmu1");
        this.$store.commit('addmu');
    },
    // 调用store里的lessmu
    lessfn(){
        this.$store.commit('lessmu');
    },
},
}
</script>
<style lang='scss' scoped>
/* @import url(); 引入css类 */
</style>