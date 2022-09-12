<template>
  <div class="userInfo">
    <div class="infoTop">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-danlieliebiao"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo1"></use>
      </svg>
    </div>
    <div class="info">
      <img :src="user.data.profile.avatarUrl" alt="" class="profileImg">
      <span class="name">{{user.data.profile.nickname}}</span>
      <div class="infoCode">
        <span>{{user.data.profile.follows}}<span>关注</span></span>
        <span>{{user.data.profile.followeds}}<span>粉丝</span></span>
        <span>Lv.{{user.data.level}}</span>
      </div>
    </div>
    </div>
</template>

<script>
import {mapState}from "vuex";

export default {
  name: "myView",
  computed:{
    ...mapState(['user'])
  },
  mounted() {
    console.log(this.user);
  }
}
</script>

<style lang="less" scoped>
.userInfo{
  width: 100%;
  height: 100%;
  padding: 0 10px;
  background-color: #f6f6f6;
  .infoTop{
    height: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info{
    width: 100%;
    height: 2.2rem;
    background-color: rgba(255,255,255,.8);
    border-radius: 0.2rem;
    margin-top: 0.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    img{
      position: absolute;
      top: -0.6rem;
      border-radius: 50%;
      width: 60px;
      height: 60px;
    }
    .name{
      margin-top: 0.2rem;
      font-size: 0.4rem;
    }
    .infoCode{
      margin-top: 0.2rem;
      span{
        padding: 0 6px;
        color: rgba(0,0,0,.6);
        border-right: 1px solid rgba(0,0,0,.1);
      }
      span:last-child{
        border: none;
      }
    }
  }
}
</style>