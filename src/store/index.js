import { createStore } from 'vuex'
import {getLoginInfo, getLoginUserInfo, getUserInfo} from "@/request/api/login";
import { getItemMusicLyric } from "@/request/api/musicItemList";

export default createStore({
  state: {
    isLogin:false, //判断是否登录
    isShowTabBar:true,
    isShowPlayer:false,
    token:'',
    user:{}, //用户信息
    playerList:[{ //播放列表
      name:"我也曾是你 (feat. 王紫璇)",
      al:{
        id: 151011010,
        name: "我也曾是你 (feat. 王紫璇)",
        pic: 109951167847807250,
        picUrl: "https://p2.music.126.net/asMzMZA7lJbWR4pcLghPwQ==/109951167847807241.jpg",
        pic_str: "109951167847807241",
      },
      ar:[{
        name: "于文文",
      }],
      id:1978636299
    }],
    playerListIndex:0, //播放列表下标
    isPlayer:false, // 是否正在播放
    showDetail:false, //是否暂时音乐详情页
    musicLyric:{}, //歌词
    currentTime:0,//当前歌曲播放的时间
    duration:0,//歌曲总时长
  },
  getters: {

  },
  mutations: {
    UpdateIsLogin(state,value){
      state.isLogin = true
    },
    UpdateToken(state,value){
      state.token = value
      //本地存储token
      localStorage.setItem('token',state.token)
    },
    UpdateUser(state,value){
      state.user = value
      // console.log(state.user);
    },
    UpdatePlayer(state,value){
      state.isPlayer = value
    },
    UpdatePlayerList(state,value){
      state.playerList = value
      // console.log(state.playerList);
    },
    UpdatePlayerListIndex(state,value){
      state.playerListIndex = value
    },
    UpdateShowDetail(state){
      state.showDetail = !state.showDetail
    },
    UpdateMusicLyric(state,value){
      state.musicLyric = value
    },
    UpdateCurrentTime(state,value){
      state.currentTime = value
      // console.log(state.currentTime);
    },
    UpdateDuration(state,value){
      state.duration = value
    }
  },
  actions: {
    getLogin:async function(context,value){
      let res = await getLoginInfo(value)
      // console.log(res);
      return res
    },
    //获取用户信息
    getLoginUserInfo:async function(context,value){
      let id = localStorage.getItem('userId')
      let res = await getUserInfo(id)
      context.commit('UpdateUser',res)
    },
    //调用歌词列表
    getLyric:async function(context,value){
      let res = await getItemMusicLyric(value)
      // console.log(res);
      context.commit('UpdateMusicLyric',res.data.lrc)
    }
  },
  modules: {
  }
})
