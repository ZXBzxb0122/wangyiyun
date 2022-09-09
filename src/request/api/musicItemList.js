import service from "@/request";

// 获取歌单详情
export function getItemList(id){
  return service({
    method:'GET',
    url:`/playlist/detail?id=${id}`
  })
}
// 获取歌单所有歌曲
export function getItemMusicList(id){
  return service({
    method:'GET',
    url:`/playlist/track/all?id=${id}`
  })
}
// 获取歌曲歌词
export function getItemMusicLyric(id){
  return service({
    method:'GET',
    url:`/lyric?id=${id}`
  })
}