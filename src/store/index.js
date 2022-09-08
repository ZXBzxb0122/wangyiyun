import { createStore } from 'vuex'
import {getInfo, getLoginInfo} from "@/request/api/login";

export default createStore({
  state: {
    isLogin:false, //判断是否登录
    isShowTabBar:true,
    isShowPlayer:true,
    token:'',
    user:{}, //用户信息
    playerList:[{ //播放列表
      name:"追光者",
      al:{
        id: 35644242,
        name: "夏至未至 影视原声带",
        pic: 19149094509535910,
        picUrl: "https://p1.music.126.net/ZZAQGWl9mR7g5xCyWWH3Pw==/19149094509535913.jpg",
        pic_str: "19149094509535913",
      },
      ar:[{
        name:"岑宁儿",
      }],
      id:445703380
    }],
    playerListIndex:0, //播放列表下标
    isPlayer:true, // 播放暂停
    showDetail:false
  },
  getters: {

  },
  mutations: {
    UpdateIsLogin(state,value){
      state.isLogin = true
    },
    UpdateToken(state,value){
      state.token = value
      localStorage.setItem('token',state.token)
    },
    UpdateUser(state,value){
      state.user = value
      console.log(state.user);
    },
    UpdatePlayer(state,value){
      state.isPlayer = value
    },
    UpdatePlayerList(state,value){
      state.playerList = value
    },
    UpdatePlayerListIndex(state,value){
      state.playerListIndex = value
    },
    UpdateShowDetail(state){
      state.showDetail = !state.showDetail
    }
  },
  actions: {
    getLogin:async function(context,value){
      let res = await getLoginInfo(value)
      // console.log(res);
      return res
    },
    // getCookies:async function(context,value){
    //   let res = await getInfo(value)
    //   context.state.Cookies = await res.data.cookie
    // }
  },
  modules: {
  }
})
