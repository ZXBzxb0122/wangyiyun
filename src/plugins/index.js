import { Swipe, SwipeItem, Lazyload, PullRefresh, Popup} from 'vant';

let plugins=[Swipe,SwipeItem,Lazyload,PullRefresh,Popup]

export default function getVant(app){
  plugins.forEach((item) =>{
    return app.use(item)
  })
}

