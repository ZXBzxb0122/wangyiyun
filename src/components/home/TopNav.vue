<template>
  <div class="topNav">
    <div class="left">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
    <div class="center">
      <span @click="$router.push('/my')">我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class="right">
      <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav"
}
</script>

<style lang="less" scoped>
.topNav{
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  .center{
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    .active{
      font-weight: bold;
    }
  }
}
</style>