<template>
  <div class="search" v-show="!isShowSearchList">
    <div class="searchTop">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
      <div class="search-box">
          <span><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-31sousuo"></use>
          </svg></span>
        <input type="text" placeholder="梦然" v-model="searchKey" @keydown.enter="keyEnter">
      </div>
      <span class="text" @click="keyEnter">搜索</span>
    </div>
    <div class="searchHistory" >
      <div class="searchTitle">
        <span>历史</span>
        <svg t="1662894370670" class="icon" @click="delHistory" viewBox="0 0 1024 1024" version="1.1"
             xmlns="http://www.w3.org/2000/svg" p-id="5837" width="32" height="32"><path d="M840 288H688v-56c0-40-32-72-72-72h-208C368 160 336 192 336 232V288h-152c-12.8 0-24 11.2-24 24s11.2 24 24 24h656c12.8 0 24-11.2 24-24s-11.2-24-24-24zM384 288v-56c0-12.8 11.2-24 24-24h208c12.8 0 24 11.2 24 24V288H384zM758.4 384c-12.8 0-24 11.2-24 24v363.2c0 24-19.2 44.8-44.8 44.8H332.8c-24 0-44.8-19.2-44.8-44.8V408c0-12.8-11.2-24-24-24s-24 11.2-24 24v363.2c0 51.2 41.6 92.8 92.8 92.8h358.4c51.2 0 92.8-41.6 92.8-92.8V408c-1.6-12.8-12.8-24-25.6-24z" p-id="5838" fill="#cccccc"></path><path d="M444.8 744v-336c0-12.8-11.2-24-24-24s-24 11.2-24 24v336c0 12.8 11.2 24 24 24s24-11.2 24-24zM627.2 744v-336c0-12.8-11.2-24-24-24s-24 11.2-24 24v336c0 12.8 11.2 24 24 24s24-11.2 24-24z" p-id="5839" fill="#cccccc"></path></svg>
      </div>
      <span v-for="item in keywordList" :key="item" class="searchSpan" @click="searchHistory(item)">
        {{item}}
      </span>
    </div>
  </div>
    <div class="searchList" v-show="isShowSearchList">
      <div class="searchListTop">
          <svg class="icon" aria-hidden="true" @click="isShowSearchList=false">
            <use xlink:href="#icon-fanhui"></use>
          </svg>
          <div class="searchList-box">
              <span><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-31sousuo"></use>
              </svg></span>
            <input type="text" placeholder="梦然" v-model="searchKey" @keydown.enter="keyEnter">
          </div>
          <span class="text" @click="keyEnter">搜索</span>
      </div>
      <div class="musicInfoList">
        <div class="musicListTop"><span class="title">单曲</span></div>
        <div class="musicList" v-for="(item,index) in searchList" :key="index">
          <div class="musicName" @click="playMusic(index)">
            <p class="itemName">{{item.name}}</p>
            <span class=itemArName v-for="(item1,index) in item.ar" :key="index">{{item1.name}}</span>
          </div>
          <div class="musicIcon">
            <svg class="icon" aria-hidden="true" v-if="item.mv !==0">
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
import {getSearchInfo} from "@/request/api/home"
import {mapMutations} from "vuex";
export default {
  name: "concernView",
  data(){
    return{
      keywordList:[],
      searchKey:"",
      searchList:[],
      isShowSearchList:false,
    }
  },
  mounted() {
    this.keywordList = JSON.parse(localStorage.getItem(this.keywordList))
        ? JSON.parse(localStorage.getItem(this.keywordList)):[]
  },
  methods:{
    keyEnter:async function (){
      if(this.searchKey !== ""){
        this.keywordList.unshift(this.searchKey)
        // 去重
        this.keywordList = [...new Set(this.keywordList)]
        localStorage.setItem("keywordList", JSON.stringify(this.keywordList))
        let res = await getSearchInfo(this.searchKey)
        console.log(res);
        this.searchList = res.data.result.songs
        this.searchKey=""
        this.isShowSearchList = true
      }
    },
    delHistory(){
      localStorage.removeItem("keywordList")
      this.keywordList=[]
    },
    searchHistory:async function(item){
      let res =await getSearchInfo(item)
      this.searchList = res.data.result.songs
    },
    playMusic(index){
      this.UpdatePlayerList(this.searchList)
      this.UpdatePlayerListIndex(index)
      this.UpdateShowDetail()
    },
    ...mapMutations(['UpdatePlayerList','UpdatePlayerListIndex','UpdateShowDetail'])
  }
}
</script>

<style lang="less" scoped>
.search {
  width: 100%;
  height: 100vh;
  //background: #f6f6f6;

  .searchTop {
    width: 100%;
    height: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon, .text {
      text-align: center;
      width: 1rem;
      font-size: 0.25rem;
    }

    .text {
      font-size: 0.35rem;
    }

    .search-box {
      height: 35px;
      display: flex;
      //justify-content: flex-start;
      align-items: center;
      border-radius: 0.3rem;
      width: calc(100% - 2rem);
      background-color: rgba(125, 125, 125, .1);

      span {
        .icon {
          fill: rgba(125, 125, 125, .8);
          font-size: 0.2rem;
        }
      }

      input {
        border: none;
        background-color: rgba(125, 125, 125, .0);
        height: 100%;
      }
    }
  }

  .searchHistory {
    padding: 0 10px;
    width: 100%;

    .searchTitle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 16px 0;

      span {
        color: #000000;
        font-weight: bold;
        font-size: 0.3rem;
      }

      .icon {
        font-size: 0.25rem;
      }
    }

    .searchSpan {
      background-color: rgba(125, 125, 125, .1);
      border-radius: 0.3rem;
      padding: 10px 16px;
      margin-top: 10px;
      margin-right: 10px;
    }
  }
}
  .searchList {
    width: 100%;
    height: 100vh;
    background-color: rgba(246,246,246);
      .searchListTop {
        width: 100%;
        height: 49px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .icon, .text {
          text-align: center;
          width: 1rem;
          font-size: 0.25rem;
        }

        .text {
          font-size: 0.35rem;
        }

        .searchList-box {
          height: 35px;
          display: flex;
          //justify-content: flex-start;
          align-items: center;
          border-radius: 0.3rem;
          width: calc(100% - 2rem);
          background-color: rgba(125, 125, 125, .1);

          span {
            .icon {
              fill: rgba(125, 125, 125, .8);
              font-size: 0.2rem;
            }
          }

          input {
            border: none;
            background-color: rgba(125, 125, 125, .0);
            height: 100%;
          }
        }
      }
      .musicInfoList{
        height: calc(100vh - 60px);
        padding: 0 10px;
        margin: 10px 10px;
        border-radius: 0.2rem;
        border: 1px solid rgba(125,125,125,.1);
        overflow: scroll;
        .musicListTop {
          height: 49px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .title {
            font-size: 0.4rem;
          }
        }

        .musicList {
          width: 100%;
          height: 49px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(125, 125, 125, .1);

          .musicName {
            width: 80%;
            .itemName {
              font-size: 0.3rem;
            }

            .itemArName {
              color: rgba(125, 125, 125);
              font-size: 0.2rem;
            }
          }

          .musicIcon {
            .icon {
              font-size: 0.3rem;
              fill: rgba(125, 125, 125, .5);
            }
          }
        }
      }
    }
</style>