import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
      	{
      		path:'/',
      		redirect:'recommend'
      	},
      	{
      		path:'/recommend',
      		component:()=>import('@/page/recommend')
      	},
      	{
      		path:'/singer',
      		component:()=>import('@/page/singer')
      	},
      	{
      		path:'/rank',
      		component:()=>import('@/page/rank')
      	},
      	{
      		path:'/search',
      		component:()=>import('@/page//search')
      	}
      ]
    }
  ]
})
