import { createRouter, createWebHistory } from 'vue-router'

const login =() =>import("@/views/login")
const HomeView =() => import('../views/home/HomeView.vue')
const myView =() => import('../views/myView.vue')
const search =() =>import("../views/search");
const itemMusic =() =>import("../views/home/itemMusic")
import store from '@/store/index'

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: HomeView
  },
  {
    path: '/my',
    //路由守卫
    beforeEnter:(to,from,next) =>{
      if(store.state.isLogin || store.state.token || localStorage.getItem('token')){
        next()
      }else{
        next('/login')
      }
    },
    component: myView,
  },
  {
    path: '/search',
    component: search
  },
  {
    path: '/itemMusic',
    component: itemMusic
  },
  {
    path: '/login',
    component: login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from)=>{
  // console.log(to);
  if(to.path === '/login'){
   store.state.isShowTabBar = false
  }
  if(to.path === '/my'){
    store.state.isShowPlayer = false
    store.state.isShowTabBar = true
  }
  if(to.path === '/home'){
    store.state.isShowPlayer = false
    store.state.isShowTabBar = true
  }
  // else store.state.isShowTabBar = to.path !== '/itemMusic';
  if(to.path === '/itemMusic'){
    store.state.isShowTabBar = false
    store.state.isShowPlayer = true
  }
  if (to.path === '/search'){
    store.state.isShowTabBar = false
    store.state.isShowPlayer = true
  }
})
export default router
