import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from '@/pages/home'
import Artists from '@/pages/artists'
import Ucenter from '@/pages/ucenter'
import Search from '@/pages/search'
import HotList from '@/pages/musiclist/hot_list'
import KingList from '@/pages/musiclist/king_list'
import NewsList from '@/pages/musiclist/news_list'
import MoreList from '@/pages/morelist'
import MusicPlay from '@/pages/musicplay' //播放页面
import ArtistsDetails from '@/pages/artistsDetails/artistsDetails'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', name: 'Index',component: Index, redirect:"/home",children:[
          {path: '/home', component: Home,  redirect: "/home/hot", children: [
              { path: 'hot', component: HotList },
              { path: 'king', component: KingList },
              { path: 'news', component: NewsList },
            ]
          },
          { path: '/artists', component: Artists },
          { path: '/ucenter', component: Ucenter },
          { path: '/search', component: Search },
          { path: '/more', name:"MoreList",component: MoreList },
          { path: 'artistsDetails', name:"ArtistsDetails",component: ArtistsDetails },
        ]
    },
    { path: '/musicplay',name:"MusicPlay", component: MusicPlay }
  ]
})
