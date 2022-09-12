<template>
  <div class="playerDetail">
    <img :src="musicDetail.al.picUrl" alt="" class="bgImg">
    <div class="detailTop">
      <div class="left">
        <svg t="1662640493519" @click="backHome" class="icon"  viewBox="0 0 1024 1024"
             version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6032" width="32" height="32"><path d="M142.805333 265.173333A58.666667 58.666667 0 1 0 59.861333 348.16l410.666667 410.666667a58.666667 58.666667 0 0 0 82.944 0l410.666667-410.666667a58.666667 58.666667 0 1 0-82.944-82.986667L512 634.368 142.805333 265.173333z" p-id="6033" fill="#ffffff"></path></svg>
      </div>
      <div class="center">
        <Vue3Marquee class="name" :duration="5" :pauseOnHover="true" :pauseOnClick="true">{{musicDetail.name}}</Vue3Marquee>
        <span class="arName">{{musicDetail.ar[0].name}}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-rightarrow-3"></use>
        </svg>
      </div>
      <div class="right">
        <svg t="1662640685059" class="icon" viewBox="0 0 1024 1024"
             version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7086" width="32" height="32"><path d="M763.84 896c-47.128 0-85.333-38.205-85.333-85.333s38.205-85.333 85.333-85.333c47.128 0 85.333 38.205 85.333 85.333 0 47.128-38.205 85.333-85.333 85.333M329.92 558.848c-14.895 26.231-42.641 43.638-74.453 43.638-47.128 0-85.333-38.205-85.333-85.333 0-16.097 4.457-31.152 12.204-44 14.935-24.769 42.098-41.333 73.13-41.333 47.128 0 85.333 38.205 85.333 85.333 0 15.317-4.035 29.691-11.101 42.117M763.84 128c47.128 0 85.333 38.205 85.333 85.333s-38.205 85.333-85.333 85.333c-47.128 0-85.333-38.205-85.333-85.333 0-47.128 38.205-85.333 85.333-85.333M763.84 682.667c-0.021 0-0.047 0-0.072 0-39.16 0-74.203 17.626-97.628 45.378l-289.885-167.063c4.932-13.101 7.787-28.245 7.787-44.055 0-0.105 0-0.209 0-0.314 0-0.072 0-0.177 0-0.281 0-15.81-2.855-30.953-8.077-44.942l295.544-169.566c23.265 24.363 56.001 39.509 92.275 39.509 0.020 0 0.039 0 0.059 0 70.689 0 127.997-57.308 127.997-128 0-70.692-57.308-128-128-128-70.692 0-128 57.308-128 128 0 18.965 4.224 36.907 11.627 53.099l-292.288 168.747c-23.653-28.833-59.285-47.084-99.18-47.084-70.692 0-128 57.308-128 128 0 0.188 0 0.376 0.001 0.564-0.001 0.123-0.001 0.304-0.001 0.484 0 70.692 57.308 128 128 128 39.895 0 75.526-18.251 99.001-46.86l289.373 166.752c-5.397 13.568-8.529 29.29-8.533 45.743 0 70.582 57.308 127.889 128 127.889 70.692 0 128-57.308 128-128 0-70.692-57.308-128-128-128z" fill="#ffffff" p-id="7087"></path></svg>
      </div>
    </div>
    <div class="detailCenter" v-show="!isShowLyric" @click="isShowLyric = true">
      <img src="../../assets/needle-ab.png" alt="" class="img_needle" :class="{img_needle_active:isPlayer}">
      <img src="../../assets/disc-plus.png" alt="" class="img_disc">
      <img :src="musicDetail.al.picUrl" alt="" class="img_ar"
           :class="{img_ar_active:isPlayer,img_ar_paused:!isPlayer}">
    </div>
    <div class="detailLyric" ref="detailLyric" v-show="isShowLyric" @click="isShowLyric = false">
      <p v-for="item in lyric" :key="item"
         :class="{active:(currentTime * 1000>item.time && currentTime * 1000<item.pre)}">
        {{item.lrc}}</p>
    </div>
    <div class="detailFooter">
      <div class="footerTop" v-if="!isShowLyric">
        <svg class="icon" aria-hidden="true" @click="iconClick" v-if="isShowLikeIcon">
          <use xlink:href="#icon-aixin"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="iconClick" v-else style="fill: #ff0000">
          <use xlink:href="#icon-aixin1"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-download"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-changpian"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiaoxi1"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-androidgengduo"></use>
        </svg>
      </div>
      <div class="footerTop2" v-else>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofangMV"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-androidgengduo"></use>
        </svg>
      </div>
      <div class="footerCenter">
        <span>{{formatSeconds(currentTime)}}</span>
        <input type="range" class="range" min="0" :max="duration" v-model="currentTime" :step="step">
        <span>{{formatSeconds(duration)}}</span>
      </div>
      <div class="footer">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-danxunhuan"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="toPlayer(-1)">
          <use xlink:href="#icon-shangyishou1"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="player" v-if="isPlayer">
          <use xlink:href="#icon-zanting"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="player" v-else>
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="toPlayer(1)">
          <use xlink:href="#icon-xiayishou1"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import {mapMutations, mapState} from "vuex";
export default {
  name: "MusicDetail",
  components:{
    Vue3Marquee
  },
  props:['musicDetail','player','isPlayer','updateDuration'],
  data(){
    return{
      isShowLyric:false,
      step:0,
      isShowLikeIcon:true,
    }
  },
  computed:{
    ...mapState(['musicLyric','currentTime','playerList','playerListIndex','duration']),
    lyric(){
      let arr;
      if(this.musicLyric.lyric){
        // /[(\r\n)\r\n]+/ 正则表达式
        // 进行拆分
        arr = this.musicLyric.lyric.split(/[(\r\n)\r\n]+/).map((item,i) =>{
          // 分
          let min = item.slice(1,3);
          // 秒
          let sec = item.slice(4,6);
          // 毫秒
          let mill = item.slice(7,10);
          // 歌词
          let lrc = item.slice(11,item.length)
          //时间
          let time = parseInt(min)*60*1000+parseInt(sec)*1000+parseInt(mill)
          if(isNaN(Number(mill))){
            mill = item.slice(7,9);
            lrc = item.slice(10,item.length)
            time = parseInt(min)*60*1000+parseInt(sec)*1000+parseInt(mill)
          }
          return {min,sec,mill,lrc,time}
        })
        arr.forEach((item,i) =>{
          if(i === arr.length - 1 || isNaN(arr[i+1].time)){
            item.pre = 100000
          }else{
            item.pre = arr[i+1].time
          }
        })
      }
      // console.log(arr);
      return arr
    },
    getStep(){
      this.step = document.querySelector('rang').width / this.duration
    }
  },
  methods:{
    backHome(){
      this.isShowLyric = false
      this.UpdateShowDetail()
    },
    //点击切换歌曲
    toPlayer(num){
      let index = this.playerListIndex+num
      if(index < 0){
          index = this.playerList.length - 1
      }else if(index === this.playerList.length){
        index = 0
      }
      this.UpdatePlayerListIndex(index)
    },
    formatSeconds(value) {
      let secondTime = parseInt(value);// 秒
      let minuteTime = 0;// 分
      if(secondTime >= 60) {//如果秒数大于60，将秒数转换成整数
        //获取分钟，除以60取整数，得到整数分钟
        minuteTime = parseInt(secondTime) / 60;
        //获取秒数，秒数取余，得到整数秒数
        secondTime = parseInt(secondTime) % 60;
      }
      let result = '';
      if(secondTime >=0 && secondTime < 10){
        result = "0" + parseInt(secondTime) + ""
      }else{
        result = "" + parseInt(secondTime) + ""
      }
      if(minuteTime >=0 && minuteTime < 10){
        result = "0" + parseInt(minuteTime) + ":" + result
      }else{
        result = "" + parseInt(minuteTime) + ":" + result
      }
      // console.log('result',result);
      return result;
    },
    iconClick(){
      this.isShowLikeIcon = !this.isShowLikeIcon
    },
    ...mapMutations(['UpdateShowDetail','UpdatePlayerListIndex']),
  },
  updated() {
    this.updateDuration()
  },
  mounted() {
    this.updateDuration()
    // console.log(this.duration);
  },
  watch:{
    currentTime(newValue){
      // setTimeout(()=>{
        let p =document.querySelector('p.active')
        // console.log([p]);
      if(p){
        if(p.offsetTop > 300){
          this.$refs.detailLyric.scrollTop = p.offsetTop - 300
        }
      }
      if(newValue === this.duration){
        if(this.playerListIndex===this.playerList.length-1){
          this.UpdatePlayerListIndex(0)
          this.player()
        }else{
          this.UpdatePlayerListIndex(this.playerListIndex + 1)
        }
      }
        // console.log([this.$refs.detailLyric]);
      // },2000)
    },
  },
}
</script>

<style lang="less" scoped>
.playerDetail {
  width: 100%;
  height: 100%;

  .bgImg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    filter: blur(20px); //背景虚化
  }

  .detailTop {
    height: 49px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
      width: 20%;
    }
    .center {
      width: 30%;
      margin-top: 10px;
      text-align: center;
      .name {
        font-size: 0.35rem;
        color: #ffffff;

      }
      .arName {
        text-align: center;
        font-size: 0.3rem;
        color: #cccccc;
      }
      .icon{
        font-size: 0.2rem;
      }
    }
    .right{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 20%;
    }
  }
  .detailCenter{
    width: 100%;
    height: 10.2rem;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .img_needle{
      width: 2rem;
      height: 3rem;
      position: absolute;
      top: 2%;
      left: 43%;
      transform-origin: 0 0;
      transform: rotate(-25deg);
      transition: all 2s;
    }
    .img_needle_active{
      width: 2rem;
      height: 3rem;
      position: absolute;
      left: 43%;
      transform-origin: 0 0;
      transform: rotate(-5deg);
      transition: all 2s;
    }
    .img_disc{
      width: 5.5rem;
      height: 5.5rem;
      position: absolute;
      bottom: 3rem;
      z-index: -1;
    }
    .img_ar{
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      position: absolute;
      bottom: 4rem;
      animation: rotate_ar 10s linear infinite;
    }
    .img_ar_active{
      animation-play-state: running;
    }
    .img_ar_paused{
      animation-play-state: paused;
    }
    @keyframes rotate_ar{
      0%{
        transform: rotateZ(0deg);
      }
      100%{
        transform: rotateZ(360deg);
      }
    }
  }
  .detailLyric{
    width: 100%;
    height: 10rem;
    margin-top: 10px;
    padding:  0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    p{
      color: #cccccc;
      margin-bottom: 0.4rem;
      //overflow: hidden;
    }
    .active{
      color: #ffffff;
    }
  }
  .detailFooter{
    width: 100%;
    height: 2.5rem;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    bottom: 0.2rem;
    .footerTop{
      width: 100%;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon{
        fill: #fff;
        font-size: 0.3rem;
      }
    }
    .footerTop2{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon{
        fill: #ffffff;
      }
    }
    .footerCenter{
      width: 100%;
      height: 0.01rem;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      span{
        //width: 10px;
        color: #cccccc;
        font-size: 0.1rem;
      }
      .range{
        -webkit-appearance: none;
        height:1px;
        //overflow: hidden;
        //outline: none;
        width: calc(100% - 80px);
      }
      .range::-webkit-slider-thumb {
        -webkit-appearance: none;
        position: relative;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #ffffff;
      }
    }
    .footer{
      width: 100%;
      display: flex;
      padding: 0 20px;
      justify-content: space-between;
      align-items: center;
      .icon{
        fill: #fff;
        font-size: 0.3rem;
      }
      .icon:nth-child(3){
        //fill: #fff;
        font-size: 0.45rem;
      }
      .icon:nth-child(5){
        //fill: #fff;
        font-size: 0.25rem;
      }
    }
  }
}
</style>