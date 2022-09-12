import service from "@/request";
// 用户手机登录
export function getLoginInfo(data){
  return service({
    method:'GET',
    url: `/login/cellphone?phone=${data.phone}&password=${data.password}`
    // url:'/register/anonimous'
  })
}
// 获取用户信息
export function getUserInfo(data){
  return service({
    method:'GET',
    url: `/user/detail?uid=${data}`
  })
}
// export function getLoginUserInfo(id){
//   return service({
//     method:'GET',
//     url:`/user/detail?uid=${id}`
//   })
// }