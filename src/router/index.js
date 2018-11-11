import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import live from '@/views/live'
import video from '@/components/video'
import information from '@/components/information'
import my from '@/components/my'
//二级页面
import liveDetail from '../views/liveDetail'
Vue.use(Router)

export default new Router({
	routes: [
		// {
		// 	path: '/',
		// 	redirect: '/live',
		// },
		{
			path: '/',
			alias:'/live',
			component: index,
			children:[
				{
					path:'',
					component:live,
				},
				{
					path: '/video',
					component: video,
				},
				{
				path: '/information',
				component: information
				},
				{
				path: '/my',
				component: my
				}
			]
		},
		{
			path:'/live/detail',
			name:'liveDetail',
			component:liveDetail
		},
	]
})
