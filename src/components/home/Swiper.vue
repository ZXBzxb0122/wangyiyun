<template>
  <div class="swiper">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image" :v-lazy="image">
        <a :href="image.url">
         <img :src="image.pic" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import axios from "axios"
import {getBanner} from "@/request/api/home";
import {reactive,onMounted} from "vue"
export default {
  name: "Swiper",
  setup() {
    const state = reactive({
      images: []
    });
    onMounted(async () =>{
      // axios.get('http://localhost:3000/banner?type=2').then((res)=>{
      //   console.log(res);
      //   state.images = res.data.banners
      // })
      let res = await getBanner();
      // console.log(res);
      state.images = res.data.banners
    })
    return { state };
  },
}
</script>

<style lang="less">
.swiper{
  overflow: hidden;
  .van-swipe{
    width: 100%;
    height: 150px;
    .van-swipe__track{
      .van-swipe-item{
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .van-swipe__indicator--active{
      background-color: white;
    }
  }
}
</style>