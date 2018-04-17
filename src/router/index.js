import Vue from 'vue'
import Router from 'vue-router'
import movielist from "../components/movie-list"
import moviedetail from '../components/movie-detail'
import moviedown from  '../components/moviedown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: movielist
    },
    {
      // 要从这里跳转出去
      path:'/movielist',
      name:movielist
    },{
      path:'/moviedetail/:id',
      name:'moviedetail',
      component: moviedetail
    },
    {
      // 无论在哪里点击网页logo的时候跳转到电影列表
      path:'/index',
      component:movielist
    },
    {
      path :'/movielist/moviedown',
      component:moviedown
    }

  ]
})
