import axios from "axios";

// import { getToken } from '@/utils/auth'

let service = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 10000,
  withCredentials: true
})

// // 请求拦截
// service.interceptors.request.use(
//     config => {
//       config.headers['Authorization'] = getToken()
//       return config
//     },
//     error => {
//       console.log(error) // for debug
//       return Promise.reject(error)
//     }
// )
//
// // 响应拦截器
// service.interceptors.response.use(
//     response => {
//       const res = response.data
//       if (res.code !== 0) {
//         // Message({
//         //   message: res.message || '请登录',
//         //   type: 'error',
//         //   duration: 5 * 1000
//         // })
//         if (res.code === 50008 || res.code === 50012 || res.code === 50014 || res.code === 401) {
//           // MessageBox.confirm('请求失败', {
//           //   confirmButtonText: '确定',
//           //   cancelButtonText: '取消',
//           //   type: 'warning'
//           // }).then(() => {
//           //   // clearToken()
//           //   console.log('登录')
//           //   // router.push({ path: '/login' })
//           // })
//         }
//         return Promise.reject(new Error(res.message || 'Error'))
//       } else {
//         return res
//       }
//     },
//     error => {
//       console.log('err' + error) // for debug
//       // Message({
//       //   message: error.message,
//       //   type: 'error',
//       //   duration: 5 * 1000
//       // })
//       return Promise.reject(error)
//     }
// )
export default service