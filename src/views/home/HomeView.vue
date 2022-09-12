<template>
  <div class="home">
    <van-pull-refresh v-model="loading" @refresh="onRefresh" success-text="刷新成功">
      <top-nav></top-nav>
      <swiper></swiper>
      <IconList></IconList>
      <MusicList></MusicList>
    </van-pull-refresh>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue';
import { Toast } from 'vant';
import TopNav from "@/components/home/TopNav";
import swiper from "@/components/home/Swiper";
import IconList from "@/components/home/IconList";
import MusicList from "@/components/home/MusicList";
import {getHome} from "@/request/api/home";
import {onMounted,onActivated} from "vue";

export default {
  name: 'HomeView',
  components: {
    TopNav,
    swiper,
    IconList,
    MusicList
  },
  methods:{
  },
  setup(){
    const count = ref(0);
    const loading = ref(false);
    const onRefresh = () => {
      setTimeout(() => {
        loading.value = false;
        count.value++;
      }, 1000);
      document.location.reload([true])
    };
    onMounted(async ()=>{
      let res = await getHome()
      // console.log(res);
    });
    return {
      count,
      loading,
      onRefresh,
    };
  }
}
</script>
<style lang="less">
.home{
  height: 100vh;
  position: relative;
}
</style>