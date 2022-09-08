<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">推荐歌单</div>
      <div class="more"><span class="text">更多</span>
        <svg t="1662210881879" class="icon" viewBox="0 0 1024 1024" version="1.1"
             xmlns="http://www.w3.org/2000/svg" p-id="1475" width="32" height="32"><path d="M711.6 488.624L355.2 152.976a29.36 29.36 0 0 0-42.352 0 31.408 31.408 0 0 0 0 43.552L647.76 512 312.848 827.36a31.408 31.408 0 0 0 0 43.552 29.36 29.36 0 0 0 42.352 0l356.4-335.648a36.32 36.32 0 0 0 0-46.64z" p-id="1476"></path></svg>
      </div>
    </div>
    <div class="musicSwiper">
      <van-swipe :loop="false" :width="110" :show-indicators="false">
        <van-swipe-item v-for="(item,index) in state.musicList" :key="index" :v-lazy="item">
          <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
            <img :src="item.picUrl" alt="">
            <span class="playCount">
              <svg t="1662213763425" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="1505" width="32" height="32"><path d="M224 938.713333a53.58 53.58 0 0 1-53.333333-53.433333V138.72a53.333333 53.333333 0 0 1 80.886666-45.666667l618.666667 373.28a53.333333 53.333333 0 0 1 0 91.333334l-618.666667 373.28a53.16 53.16 0 0 1-27.553333 7.766666z m0.046667-810.666666a10.98 10.98 0 0 0-5.333334 1.42 10.466667 10.466667 0 0 0-5.38 9.253333v746.56a10.666667 10.666667 0 0 0 16.18 9.133333l618.666667-373.28a10.666667 10.666667 0 0 0 0-18.266666l-618.666667-373.28a10.386667 10.386667 0 0 0-5.446666-1.586667z" fill="#ffffff" p-id="1506"></path></svg>
              {{ChangeCount(item.playCount)}}
            </span>
            <span class="title">{{item.name}}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import {getMusicList} from "@/request/api/home";
import {reactive,onMounted} from "vue";

export default {
  name: "MusicList",
  // vue2
  // data(){
  //   return {
  //     musicList:{},
  //   }
  // },
  // methods:{
  //   async getGeDan(){
  //     let res = await getMusicList()
  //     console.log(res);
  //     this.musicList = res.data.result;
  //     if(this.musicList.name.length>20){
  //       this.musicList.name=this.musicList.name.substring(0,20)+"...";
  //     }
  //   },
  //   ChangeCount:function (num){
  //     if (num >= 100000000){
  //       return (num/100000000).toFixed(1) + '亿'
  //     }else if (num >= 10000){
  //       return (num/10000).toFixed(0) + '万'
  //     }
  //   }
  // },
  // mounted() {
  //   this.getGeDan()
  // },
  setup(){
    const state = reactive({
      musicList:[]
    });
    function ChangeCount(num){
      if (num >= 100000000){
        return (num/100000000).toFixed(1) + '亿'
      }else if (num >= 10000){
        return (num/10000).toFixed(0) + '万'
      }
    }
    onMounted(async () => {
      let res = await getMusicList();
      // console.log(res);
      state.musicList = res.data.result
    });
    return {state, ChangeCount}
  }
};
</script>

<style lang="less" scoped>
.musicList{
  width: 100%;
  padding: 0.3rem;
  border-bottom: 10px solid rgba(0,0,0,.1);
  .musicTop{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.2rem;
    .title{
      height: 32px;
      font-size: 0.4rem;
      font-weight: bold;
    }
    .more{
      border: 1px solid #ccc;
      border-radius: 0.4rem;
      line-height: 0.6rem;
      text-align: center;
      padding: 0 0.2rem;
      .text{
        font-size: 0.3rem;
        align-items: center;
      }
      .icon{
        font-size: 0.15rem;
      }
    }
  }
  .musicSwiper{
    width: 100%;
    overflow: hidden;
    //white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    .van-swipe{
      height: 100%;
      .van-swipe-item{
        padding-right: 0.2rem;
        img{
          border-radius: 0.3rem;
          width: 100%;
          height: 2rem;
        }
        .playCount{
          border: 1px solid rgba(0,0,0,.1);
          background-color: rgba(0,0,0,0.2);
          border-radius: 0.4rem;
          position: absolute;
          right: 0.3rem;
          top: 0.1rem;
          font-size: 0.1rem;
          color: #ffffff;
          padding: 0 5px;
          .icon{
          }
        }
        .title{
          @font-face {
            font-family: "思源黑体 Light";font-weight: 300;src: url("//at.alicdn.com/wf/webfont/DxKBbxM5SsME/YhEHTdW6rO-hAjpaO-lvm.woff2") format("woff2"),
          url("//at.alicdn.com/wf/webfont/DxKBbxM5SsME/cB0Ed9YZWo9VLZQH6LnTi.woff") format("woff");
            font-display: swap;
          }
          font-size: 0.2rem;
          display:-webkit-box;
          -webkit-box-orient:vertical;/*设置方向*/
          -webkit-line-clamp:2;/*设置超过为省略号的行数*/
          overflow:hidden;
        }
      }
      .van-swipe-item:last-child{
        padding-right: 0;
      }
    }
  }
}
</style>