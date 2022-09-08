import service from "@/request";

export function getItemList(id){
  return service({
    method:'GET',
    url:`/playlist/detail?id=${id}`
  })
}
export function getItemMusicList(id){
  return service({
    method:'GET',
    url:`/playlist/track/all?id=${id}`
  })
}