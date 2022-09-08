<template>
  <div class="itemMusicInfo">
    <div class="itemMusicTop">
      <img :src="playlist.coverImgUrl" alt="" class="bgImg">
      <div class="itemLeft">
        <svg t="1662298224918" class="icon" @click=$router.go(-1) viewBox="0 0 1024 1024"
           version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3336" width="32" height="32"><path d="M879.476364 470.341818H244.829091L507.112727 209.454545a41.658182 41.658182 0 0 0-58.88-58.88L114.967273 482.676364a41.890909 41.890909 0 0 0 0 58.88l333.265454 333.032727a41.658182 41.658182 0 0 0 58.88 0 41.890909 41.890909 0 0 0 0-58.88L244.829091 553.658182h634.647273a41.658182 41.658182 0 1 0 0-83.316364z" p-id="3337" fill="#ffffff"></path></svg>
        <span class="title">歌单</span>
      </div>
      <div class="itemRight">
        <svg t="1662298286564" class="icon" viewBox="0 0 1024 1024" version="1.1"
           xmlns="http://www.w3.org/2000/svg" p-id="1565" width="32" height="32"><path d="M480 128a352 352 0 1 0 216.917333 629.248l136.917334 136.96 60.330666-60.373333-136.917333-136.96A352 352 0 0 0 480 128zM213.333333 480a266.666667 266.666667 0 1 1 533.333334 0 266.666667 266.666667 0 0 1-533.333334 0z" fill="#ffffff" p-id="1566"></path></svg>
        <svg t="1662298371817" class="icon-more" viewBox="0 0 1024 1024" version="1.1"
           xmlns="http://www.w3.org/2000/svg" p-id="1410" width="32" height="32"><path d="M204.8 512m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z" fill="#ffffff" p-id="1411"></path><path d="M512 512m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z" fill="#ffffff" p-id="1412"></path><path d="M819.2 512m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z" fill="#ffffff" p-id="1413"></path></svg>
      </div>
    </div>
    <div class="itemMusicCenter">
      <div class="itemImg">
        <img :src="playlist.coverImgUrl" alt="">
        <span class="playCount">
          <svg t="1662213763425" class="icon" viewBox="0 0 1024 1024" version="1.1"
             xmlns="http://www.w3.org/2000/svg" p-id="1505" width="32" height="32"><path d="M224 938.713333a53.58 53.58 0 0 1-53.333333-53.433333V138.72a53.333333 53.333333 0 0 1 80.886666-45.666667l618.666667 373.28a53.333333 53.333333 0 0 1 0 91.333334l-618.666667 373.28a53.16 53.16 0 0 1-27.553333 7.766666z m0.046667-810.666666a10.98 10.98 0 0 0-5.333334 1.42 10.466667 10.466667 0 0 0-5.38 9.253333v746.56a10.666667 10.666667 0 0 0 16.18 9.133333l618.666667-373.28a10.666667 10.666667 0 0 0 0-18.266666l-618.666667-373.28a10.386667 10.386667 0 0 0-5.446666-1.586667z" fill="#ffffff" p-id="1506"></path></svg>
          {{ChangeCount(playlist.playCount)}}
        </span>
      </div>
      <div class="itemText">
        <span class="title">{{playlist.name}}</span>
        <div class="itemWriter">
          <img :src="playlist.creator.avatarUrl" alt="" class="itemImg">
          <span class="itemName">{{playlist.creator.nickname}}</span>
          <div class="WriterConcern">
            <svg class="icon" aria-hidden="true" @click="concernClick" v-if="!isConcern">
              <use xlink:href="#icon-a-tianjiaguanzhuguanzhu"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="concernClick" v-else>
              <use xlink:href="#icon-31yiguanzhudianpu"></use>
            </svg>
          </div>
        </div>
        <span class="text">{{playlist.description}}
<!--          <svg t="1662511181619" class="icon" viewBox="0 0 1024 1024"-->
<!--               version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1811" width="32" height="32"><path d="M632.746667 481.706667l-180.906667-180.906667a42.624 42.624 0 0 0-72.96 30.08 42.666667 42.666667 0 0 0 12.373333 30.08L542.293333 512l-151.04 151.04a42.666667 42.666667 0 0 0 0 60.16 42.666667 42.666667 0 0 0 30.293334 12.373333 42.666667 42.666667 0 0 0 30.293333-12.373333l180.906667-180.906667a42.624 42.624 0 0 0 0-60.586666z" fill="#000000" p-id="1812"></path></svg>-->
        </span>
      </div>
    </div>
    <div class="itemMusicFoot">
      <div class="itemIcon">
        <svg t="1662344185401" class="icon" viewBox="0 0 1024 1024" version="1.1"
             xmlns="http://www.w3.org/2000/svg" p-id="3230" width="32" height="32"><path d="M551.6 276V141.4c12.1-56.3 58.2-22 58.2-22L930 395.9c70.4 48.9 4.8 85.7 4.8 85.7L619.5 755.7c-63.1 46.5-67.9-24.5-67.9-24.5V606.4C231.4 506.1 100.4 907.5 100.4 907.5c-12.1 22-19.4 0-19.4 0C-42.8 305.4 551.6 276 551.6 276z" p-id="3231" fill="#ffffff"></path></svg>
        <span class="IconNum">{{ playlist.shareCount }}</span>
      </div>
      <div class="itemIcon">
        <svg t="1662344292402" class="icon" viewBox="0 0 1024 1024" version="1.1"
             xmlns="http://www.w3.org/2000/svg" p-id="6853" width="32" height="32"><path d="M512 65.536C230.4 65.536 1.024 257.024 1.024 492.544c0 99.328 39.936 190.464 108.544 263.168l0 0c0 0-5.12 180.224-43.008 203.776 0 0 138.24 0 226.304-79.872 66.56 26.624 140.288 40.96 219.136 40.96 281.6 0 510.976-191.488 510.976-427.008C1022.976 257.024 793.6 65.536 512 65.536zM512 878.592c-71.68 0-140.288-13.312-203.776-37.888-5.12-2.048-10.24-3.072-15.36-3.072-10.24 0-19.456 4.096-27.648 10.24-38.912 35.84-91.136 53.248-132.096 61.44 4.096-16.384 7.168-34.816 9.216-56.32 5.12-40.96 7.168-78.848 7.168-92.16 2.048-12.288-2.048-24.576-10.24-33.792-63.488-67.584-97.28-149.504-97.28-234.496 0-212.992 210.944-386.048 470.016-386.048s470.016 173.056 470.016 386.048C982.016 705.536 771.072 878.592 512 878.592z" p-id="6854" fill="#ffffff"></path><path d="M321.536 512m-55.296 0a5.4 5.4 0 1 0 110.592 0 5.4 5.4 0 1 0-110.592 0Z" p-id="6855" fill="#ffffff"></path><path d="M527.36 512m-55.296 0a5.4 5.4 0 1 0 110.592 0 5.4 5.4 0 1 0-110.592 0Z" p-id="6856" fill="#ffffff"></path><path d="M733.184 512m-55.296 0a5.4 5.4 0 1 0 110.592 0 5.4 5.4 0 1 0-110.592 0Z" p-id="6857" fill="#ffffff"></path></svg>
        <span class="IconNum">{{ playlist.commentCount }}</span>
      </div>
      <div class="itemIcon" @click="itemClick" :class="{active:isActive}">
        <svg t="1662344374349" class="icon" viewBox="0 0 1024 1024" version="1.1"
             xmlns="http://www.w3.org/2000/svg" p-id="7820" width="32" height="32"><path d="M910.88 364.8l-1.28-10.08a236.96 236.96 0 0 0-6.24-28 201.44 201.44 0 0 0-42.56-80 46.08 46.08 0 0 0-3.84-4.48 212 212 0 0 0-160-71.68c-75.68 0-146.72 29.76-185.12 74.08-38.4-44.32-109.6-74.08-185.12-74.08a212 212 0 0 0-160 71.68 46.08 46.08 0 0 0-3.84 4.48 201.44 201.44 0 0 0-42.56 80 236.96 236.96 0 0 0-6.24 28l-1.28 10.08A186.4 186.4 0 0 0 112 385.92a205.28 205.28 0 0 0 1.12 21.28c16 194.08 368 423.2 382.88 432.96l16 10.4 16-10.4c15.04-9.6 367.04-238.72 382.88-432.96a205.28 205.28 0 0 0 1.12-21.28 186.4 186.4 0 0 0-1.12-21.12z" fill="#ffffff" p-id="7821"></path></svg>
        <span class="IconNum">{{ playlist.subscribedCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "itemMusicTop",
  data(){
    return{
      isActive:true,
      isConcern:false,
    }
  },
  methods:{
    itemClick(){
      this.isActive = !this.isActive
      if(this.isActive === false){
        alert('已收藏')
      }else {
        alert('已取消收藏')
      }
    },
    concernClick(){
      console.log(1);
      this.isConcern = !this.isConcern
      if (this.isConcern === true){
        alert('添加关注成功')
      }
    }
  },
  setup(props){
    // console.log(props);
    if ((props.playlist.creator='')){
      props.playlist.creator = JSON.parse(sessionStorage.getItem().playlist).creator
    }
    function ChangeCount(num){
      if (num >= 100000000){
        return (num/100000000).toFixed(1) + '亿'
      }else if (num >= 10000){
        return (num/10000).toFixed(0) + '万'
      }
    }
    return {ChangeCount}
    // function itemClick(){
    //   // console.log(1);
    //   this.isActive = !this.isActive
    // }
    // return {itemClick}
  },
  props:['playlist'],
}
</script>

<style lang="less" scoped>
.itemMusicTop{
  width: 100%;
  height: 49px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .itemLeft,.itemRight{
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    .title{
      color: white;
      font-size: 0.4rem;
      text-align: center;
    }
    .icon,.icon-more{
      font-size: 0.3rem;
    }
    .icon-more{
      transform: rotate(90deg);
    }
  }
  .bgImg{
    //background-color: rgba(0,0,0,.5);
    width: 100%;
    height: 10.5rem;
    position: absolute;
    z-index: -1;
    filter: blur(30px); //背景虚化
  }
}
.itemMusicCenter{
  width: 100%;
  height: 100%;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .itemImg{
    width: 35%;
    height: 120px;
    position: relative;
    img{
      width: 100%;
      height: 100%;
      border-radius: 0.3rem;
    }
    .playCount{
      position: absolute;
      right: 0.1rem;
      top: 0.1rem;
      font-size: 0.1rem;
      color: #ffffff;
      padding: 0 5px;
      .icon{
        fill: #fff;
      }
    }
  }
  .itemText{
    padding-left: 10px;
    width: 65%;
    height: 120px;
    line-height: 0.6rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    //align-items: center;
    .title{
      font-size: 16px;
      @font-face {
        font-family: "思源黑体 Light";font-weight: 300;src: url("//at.alicdn.com/wf/webfont/DxKBbxM5SsME/hhQ5znQtY8kM-CGc_cX0t.woff2") format("woff2"),
      url("//at.alicdn.com/wf/webfont/DxKBbxM5SsME/25PYojWi1xJoVUTr8BeFm.woff") format("woff");
        font-display: swap;
      }
      color: #ffffff;
    }
    .itemWriter{
      //padding-top: 10px;
      color: #cccccc;
      display: flex;
      align-items: center;
      .itemImg {
        border-radius: 50%;
        width: 0.5rem;
        height: 0.5rem;
      }
      .itemText{
        font-size: 0.3rem;
        text-align: center;
      }
      .WriterConcern{
        margin-left: 5px;
        width: 1rem;
        border: 1px solid rgba(255,255,255,.1);
        background-color: rgba(255,255,255,.1);
        border-radius: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon{
          font-size: 0.2rem;
        }
      }
    }
    .text{
      font-size: 0.3rem;
      display:-webkit-box;
      -webkit-box-orient:vertical;/*设置方向*/
      -webkit-line-clamp:1;/*设置超过为省略号的行数*/
      overflow:hidden;
      //padding-top: 10px;
      color:#cccccc;
      position: relative;
      //.icon{
      //  color: white;
      //  fill: #fff;
      //  position: absolute;
      //  top: 0;
      //  right: 0;
      //}
    }
  }
}
.itemMusicFoot{
  width: 100%;
  height: 60px;
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .itemIcon{
    width: 30%;
    height: 100%;
    font-size: 0.2rem;
    border-radius: 0.4rem;
    background-color: rgba(255,255,255,.2) ;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    .IconNum{
      @font-face {
        font-family: "思源黑体 Light";font-weight: 300;src: url("//at.alicdn.com/wf/webfont/DxKBbxM5SsME/hhQ5znQtY8kM-CGc_cX0t.woff2") format("woff2"),
      url("//at.alicdn.com/wf/webfont/DxKBbxM5SsME/25PYojWi1xJoVUTr8BeFm.woff") format("woff");
        font-display: swap;
      }
      color:#ffffff;
      padding-left: 6px;
    }
  }
  .itemIcon.active{
    background-color: red;
  }
  //.itemIcon:nth-child(3):hover{
  //  background-color: red;
  //}
}
</style>