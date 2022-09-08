<template>
  <div class="itemMusicList">
    <div class="itemListTop">
      <div class="listTopLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
      </div>
      <div class="listTopCenter">
        <span class="title">播放全部<span>({{songs.length}})</span></span>
        <svg t="1662514358275" class="icon" viewBox="0 0 1024 1024"
             version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11318" width="32" height="32"><path d="M512 989.866667C249.173333 989.866667 34.133333 774.826667 34.133333 512S249.173333 34.133333 512 34.133333s477.866667 215.04 477.866667 477.866667-215.04 477.866667-477.866667 477.866667z m0-904.533334C276.48 85.333333 85.333333 276.48 85.333333 512s191.146667 426.666667 426.666667 426.666667 426.666667-191.146667 426.666667-426.666667S747.52 85.333333 512 85.333333z" fill="#333333" p-id="11319"></path><path d="M512 738.986667c-6.826667 0-13.653333-1.706667-18.773333-6.826667L343.04 580.266667c-10.24-10.24-10.24-25.6 0-35.84s25.6-10.24 35.84 0l133.12 133.12 133.12-133.12c10.24-10.24 25.6-10.24 35.84 0s10.24 25.6 0 35.84l-150.186667 150.186666c-5.12 5.12-11.946667 8.533333-18.773333 8.533334z" fill="#333333" p-id="11320"></path><path d="M512 738.986667c-13.653333 0-25.6-11.946667-25.6-25.6V278.186667c0-13.653333 11.946667-25.6 25.6-25.6s25.6 11.946667 25.6 25.6v435.2c0 13.653333-11.946667 25.6-25.6 25.6z" fill="#333333" p-id="11321"></path></svg>
      </div>
      <div class="listTopRight">
        <svg t="1662514393608" class="icon" viewBox="0 0 1024 1024"
             version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12247" data-spm-anchor-id="a313x.7781069.0.i34" width="32" height="32"><path d="M512 128c211.2 0 384 172.8 384 384s-172.8 384-384 384-384-172.8-384-384 172.8-384 384-384m0-64C262.4 64 64 262.4 64 512s198.4 448 448 448 448-198.4 448-448-198.4-448-448-448z" fill="" p-id="12248" data-spm-anchor-id="a313x.7781069.0.i33" class="selected"></path><path d="M448 704c-12.8 0-25.6-6.4-32-12.8L313.6 588.8c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0L448 633.6l275.2-275.2c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8l-288 288c-6.4 12.8-19.2 12.8-32 12.8z" fill="" p-id="12249"></path></svg>
      </div>
    </div>
    <div class="itemList">
      <div class="item" v-for="(item,index) in songs" :key="index">
        <div class="itemLeft" @click="playMusic(index)">
          <span>{{index + 1}}</span>
          <div class="itemTitle">
            <p>{{item.name}}</p>
            <span class=itemText v-for="(item1,index) in item.ar" :key="index">{{item1.name}}</span>
          </div>
        </div>
        <div class="itemRight">
          <div class="itemMv">
            <svg t="1662560787388" class="iconMv" v-if="item.mv !==0" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="3127" width="32" height="32"><path d="M919.2 148.4H104.8c-22.1 0-40 17.9-40 40v645c0 22.1 17.9 40 40 40h814.5c22.1 0 40-17.9 40-40v-645c-0.1-22.1-18-40-40.1-40z m-40 645H144.8v-565h734.5v565z" p-id="3128" fill="#cccccc"></path><path d="M368.7 687.9c6.2 3.6 13.1 5.4 20 5.4s13.8-1.8 20-5.4l246.6-142.4c12.4-7.1 20-20.4 20-34.6 0-14.3-7.6-27.5-20-34.6L408.7 333.9c-12.4-7.1-27.6-7.1-40 0-12.4 7.1-20 20.4-20 34.6v284.7c0 14.4 7.6 27.6 20 34.7z m60-250.1l126.6 73.1L428.7 584V437.8z" p-id="3129" fill="#cccccc"></path></svg>
          </div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted} from "vue";
import {mapMutations} from "vuex";

export default {
  name: "itemMusicList",
  setup(props){
  },
  props:['songs'],
  methods:{
    playMusic(index){
      this.UpdatePlayerList(this.songs)
      this.UpdatePlayerListIndex(index)
    },
    ...mapMutations(['UpdatePlayerList','UpdatePlayerListIndex'])
  }
}
</script>

<style lang="less" scoped>
.itemMusicList{
  height: 100%;
  padding: 0 10px;
  border-top-left-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
  background-color: #ffffff;
  .itemListTop{
    height: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .listTopLeft{
      width: 10%;
      display: flex;
      align-items: center;
      //justify-content: space-between;
      .icon{
        font-size: 0.25rem;
      }
    }
    .listTopCenter{
      width: 80%;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title{
        font-size: 16px;
        font-weight: bold;
        span{
          padding-left: 10px;
          font-size: 0.25rem;
          color: #cccccc;
        }
      }
      .icon{
        font-size: 0.25rem;
      }
    }
    .listTopRight{
      width: 10%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .icon{
        font-size: 0.25rem;
      }
    }
  }
  .itemList{
    //height: 49px;
    display: flex;
    flex-direction: column;
    .item {
      height: 49px;
      display: flex;
      align-items: center;

      .itemLeft {
        width: 80%;
        display: flex;
        justify-content: flex-start;
        padding-left: 6px;
        align-items: center;
        span {
          color: #cccccc;
        }
        .itemTitle {
          height: 100%;
          line-height: 0.45rem;
          color: #000000;
          overflow: hidden;
          padding-left: 20px;
          p {
            display: -webkit-box;
            -webkit-box-orient: vertical; /*设置方向*/
            -webkit-line-clamp: 1; /*设置超过为省略号的行数*/
            overflow: hidden;
          }

          .itemText {
            font-size: 0.25rem;
            color: #cccccc;
          }
        }
      }

      .itemRight {
        width: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.25rem;
        .itemMv {
          .iconMv {
          }
        }
        .icon {
          transform: rotate(90deg);
        }
      }
    }
    }
  }
</style>