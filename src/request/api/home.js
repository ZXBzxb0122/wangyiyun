import service from ".."

export function getBanner(){
  return service({
    method: 'GET',
    url: 'banner?type=2'
  })
}
// 获取推荐歌单列表
export function getMusicList(){
  return service({
    method:'GET',
    url:'/personalized?limit=6'
  })
}
export function getHome(){
  return service({
    method:'GET',
    url:'/homepage/block/page'
  })
}
// 搜索
export function getSearchInfo(data){
  return service({
    method:'GET',
    url:`/cloudsearch?keywords=${data}`
  })
}