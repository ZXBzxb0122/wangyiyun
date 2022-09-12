<template>
  <div class="itemMusicList">
    <div class="itemListTop">
      <div class="listTopLeft" @click="playMusic(0)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <span class="title">播放全部<span>({{songs.length}})</span></span>
      </div>
      <div class="listTopRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xuanze"></use>
        </svg>
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
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofangMV"></use>
            </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-androidgengduo"></use>
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
      this.UpdateShowDetail()
    },
    ...mapMutations(['UpdatePlayerList','UpdatePlayerListIndex','UpdateShowDetail'])
  }
}
</script>

<style lang="less" scoped>
.itemMusicList {
  height: 100vh;
  padding: 0 10px;
  border-top-left-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
  background-color: #ffffff;

  .itemListTop {
    height: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .listTopLeft {
      width: 80%;
      display: flex;
      align-items: center;
      //justify-content: space-between;
      .icon {
        font-size: 0.25rem;
      }

      .title {
        font-size: 16px;
        font-weight: bold;
        padding-left: 10px;

        span {
          padding-left: 10px;
          font-size: 0.25rem;
          color: #cccccc;
        }
      }
    }

    .listTopRight {
      width: 20%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.25rem;

      .icon {
        font-size: 0.25rem;
      }
    }
  }

  .itemList {
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    overflow: scroll;

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
          width: 10px;
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

        .icon {
          fill: #cccccc;
        }
      }
    }
  }
}
</style>