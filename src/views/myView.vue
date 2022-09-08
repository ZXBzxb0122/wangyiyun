<template>
  <div class="userInfo">
    <div class="infoTop">
      <svg t="1662428804186" class="icon" viewBox="0 0 1024 1024"
           version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2393" width="32" height="32"><path d="M849.1 128 174.9 128c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 149 875 128 849.1 128z" p-id="2394"></path><path d="M849.1 768 174.9 768c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 789 875 768 849.1 768z" p-id="2395"></path><path d="M849.1 448 174.9 448c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 469 875 448 849.1 448z" p-id="2396"></path></svg>
      <div class="info">
        <img :src="user.data.profile.avatarUrl" alt="" class="profileImg">
        <span class="name">{{user.data.profile.nickname}}</span>
      </div>
      <svg t="1662428838156" class="icon" viewBox="0 0 1024 1024"
           version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1657" width="32" height="32"><path d="M480 128a352 352 0 1 0 216.917333 629.248l136.917334 136.96 60.330666-60.373333-136.917333-136.96A352 352 0 0 0 480 128zM213.333333 480a266.666667 266.666667 0 1 1 533.333334 0 266.666667 266.666667 0 0 1-533.333334 0z" fill="#333333" p-id="1658"></path></svg>
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
  padding: 0 10px;
  .infoTop{
    height: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>