<template>
  <div class="audioPlayer">
    <div class="audioInfo" @click="UpdateShowDetail">
      <div class="infoImg">
        <img :src="playerList[playerListIndex].al.picUrl">
      </div>
      <div class="infoName">
      <span class="alName">{{playerList[playerListIndex].name}} - {{playerList[playerListIndex].ar[0].name}}</span>
      </div>
    </div>
    <div class="audioIcon">
      <svg class="icon" aria-hidden="true" @click="player" v-if="isPlayer">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="player" v-else>
        <use xlink:href="#icon-bofang1"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-24gf-playlist2"></use>
      </svg>
    </div>
    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playerList[playerListIndex].id}.mp3`"></audio>
    <van-popup
        v-model:show="showDetail"
        :style="{ height: '100%',width:'100%' }">
      <music-detail :musicDetail="playerList[playerListIndex]" :player="player" :isPlayer="isPlayer"/>
    </van-popup>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";
import MusicDetail from "@/components/itemMusic/MusicDetail";
export default {
  name: "audioPlayer",
  data(){
    return{
      interval:0
    }
  },
  components:{
    MusicDetail
  },
  computed:{
    ...mapState(['playerList','playerListIndex','isPlayer','showDetail'])
  },
  mounted() {
    this.$store.dispatch("getLyric",this.playerList[this.playerListIndex].id)
    if(this.$refs.audio.paused) {
      this.updateTime()
    }else{
      clearInterval(this.interval) //音乐暂停清除定时器
    }
  },
  updated() {
    this.$store.dispatch("getLyric",this.playerList[this.playerListIndex].id)
  },
  methods:{
    player(){
      // 判断音乐是否播放
      if(this.$refs.audio.paused){
        this.$refs.audio.play()
        this.UpdatePlayer(true)
        this.updateTime() //音乐播放调用定时器
      }else{
        this.$refs.audio.pause()
        this.UpdatePlayer(false)
        clearInterval(this.interval) //音乐暂停清除定时器
      }
    },
    updateTime(){
      this.interval = setInterval(() =>{
        this.UpdateCurrentTime(this.$refs.audio.currentTime)
      },1000)
    },
    ...mapMutations(['UpdatePlayer','UpdateShowDetail','UpdateCurrentTime'])
  },
  watch:{
    playerListIndex(){ //监听下标，如果发生改变就自动播放音乐
      this.$refs.audio.autoplay = true
      if (this.$refs.audio.pause){ //如果暂停状态播放
        this.UpdatePlayer(true)
      }
    },
    // 监听音乐是否播放
    playerList(){
      if(this.isPlayer){
        this.$refs.audio.autoplay = true
        this.UpdatePlayer(true)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.audioPlayer{
  height: 49px;
  width: 100%;
  padding: 0 10px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .audioInfo{
    width: 80%;
    display: flex;
    align-items: center;
    position: relative;
    .infoImg{
      width: 0.8rem;
      height: 0.8rem;
      //border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(-2px);
      //background-color: #000000;
      img{
        border: 6px solid #000000;
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
    .infoName{
      width: 80%;
      .alName{
        display: -webkit-box;
        -webkit-box-orient: vertical; /*设置方向*/
        -webkit-line-clamp: 1; /*设置超过为省略号的行数*/
        overflow: hidden;
        margin-left: 10px;
      }
      .icon{
        padding: 0 2px;
      }
      .arName{
        color: rgba(0,0,0,.5);
      }
    }
  }
  .audioIcon{
    width: 20%;
    display: flex;
    justify-content: space-between;

    .icon{
      font-size: 0.25rem;
    }
  }
}
</style>