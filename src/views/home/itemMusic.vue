<template>
  <div class="itemMusic">
    <item-music-top :playlist="state.playlist"/>
    <item-music-list :songs="state.songs"/>
  </div>
</template>

<script>
import {useRoute} from 'vue-router'
import {reactive,onMounted} from "vue";
import {getItemList, getItemMusicList} from "@/request/api/musicItemList";
import itemMusicTop from "@/components/itemMusic/itemMusicTop";
import itemMusicList from "@/components/itemMusic/itemMusicList";
// import scroll from "@/components/scroll/scroll";
export default {
  name: "itemMusic",
  components:{
    itemMusicList,
    itemMusicTop,
    // scroll
  },
  setup(){
    const state = reactive({
      playlist:{},
      songs:[],
    });
    onMounted(async () =>{
      let id = useRoute().query.id
      console.log(id);
      // 获取歌单详情
      let res = await getItemList(id)
      console.log(res);
      state.playlist = res.data.playlist
      // 防止页面刷新，数据丢失，将数据保存到sessionStorage
      sessionStorage.setItem('itemDetail',JSON.stringify(state))
      // 获取歌单歌曲列表
      let request = await getItemMusicList(id)
      console.log(request);
      state.songs = request.data.songs
    });
    return {state}
  }
}
</script>

<style lang="less" scoped>
.itemMusic{
  height: 100vh;
}
</style>