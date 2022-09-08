<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
<!--    <div :style="activeStyle"><slot name="item-text"></slot></div>-->
    <div :class="{active:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  // 父组件通过props向子组件传递数据
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'  //默认红色
    }
  },
  data(){
    return{
      // isActive:true
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  },
  computed:{
    isActive(){
      // /home -> item1(/home) = true
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      // 如果this.isActive处于活跃，则{color:this.activeColor}；不活跃{}
      return this.isActive ? {color:this.activeColor} : {}
    }
  }

}
</script>

<style lang="less" scoped>
.tab-bar-item{
  /*flex 均等分*/
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 0.2rem;
  padding-top: 2px;
  .icon{
    font-size: 0.2rem;
  }
}
.active{
  color: red;
}
</style>
