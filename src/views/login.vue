<template>
  <div class="login">
    <div class="title">login</div>
    <input type="text" placeholder="账号" v-model="phone">
    <input type="password" placeholder="密码" v-model="password">
    <button @click="login">登录</button>
    <span>没有账号？<a href="*">去注册</a></span>
  </div>
</template>

<script>
import {getUserInfo} from "@/request/api/login";

export default {
  name: "login",
  data(){
    return{
      phone:'',
      password:'',
    }
  },
  methods:{
    login: async function (){
      let res = await this.$store.dispatch('getLogin',{phone:this.phone,password:this.password})
      // console.log(res);
      if(res.data.code === 200){
        this.$store.commit('UpdateIsLogin',true)
        this.$store.commit('UpdateToken',res.data.token)
        // let result =await getUserInfo(res.data.account.id)
        if(!res.data.token) return
        localStorage.setItem("userId",res.data.account.id)
        // console.log(result);
        // this.$store.commit('UpdateUser',result)
        //获取用户信息
        if(!res.data.token) return
        this.$store.dispatch("getLoginUserInfo")

        this.$router.push('/my')
      }else{
        alert('账户密码错误')
        this.password=''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login{
  width: 100%;
  height: 100%;
  background-color: rgba(255,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  /*flex-direction 属性规定弹性项目的方向。*/
  /*column	作为列，垂直地显示弹性项目。*/
  flex-direction: column;
  /*背景模糊*/
  backdrop-filter: blur(20px);
  //阴影
  .title{
    color: #ffffff;
    font-size: 40px;
    font-weight: bold;
    /*大写*/
    text-transform: uppercase;
    /*字间距*/
    letter-spacing: 10px;
    /*首行缩进*/
    text-indent: 10px;
    margin: 95px auto 50px auto;
  }
  input{
    width: 300px;
    height: 30px;
    background: transparent;
    /*首行缩进*/
    text-indent: 8px;
    border: none;
    outline: none;
    border-bottom: 1px solid rgba(255,255,255,0.8);
    color: #ffffff;
    margin: 15px auto;
  }
  input::placeholder{
    color: rgba(255,255,255,0.8);
  }
  button{
    width: 300px;
    height: 40px;
    margin: 35px auto 40px auto;
    border: none;
    background: #000000;
    color: #ffffff;
    border-radius: 8px;
    /*字间距*/
    letter-spacing: 20px;
    /*首行缩进*/
    text-indent: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  //button:hover{
  //  background: #000000;
  //}
  span{
    font-size: 14px;
    color: #ffffff;
  }
  a{
    color: #000000;
    text-decoration: none;
  }
}
</style>