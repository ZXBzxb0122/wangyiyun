<template>
  <div id="app">
    <router-view v-slot="{Component}">
      <keep-alive exclude="itemMusic">
        <component :is="Component"/>
      </keep-alive>
    </router-view>
    <audio-player v-show="$store.state.isShowPlayer"></audio-player>
    <main-tab-bar v-show="$store.state.isShowTabBar"></main-tab-bar>
  </div>
</template>

<script>
import audioPlayer from "@/components/itemMusic/audioPlayer";
import MainTabBar from "@/components/Tabbar/MainTabBar";
  export default {
    name: "App",
    components: {
      MainTabBar,
      audioPlayer
    }
  }
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  height: 100vh;
}
.icon {
  width: 2em; height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
a{
  color: black;
}
</style>
