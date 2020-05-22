import store from '../store/index';
// 菜单路由
const asyncRoutes = [
	{
		path: '/section',
		name: 'section',
		redirect: '/section/section1',
		component: () => import('@/views/Layout/Layout.vue'),
		meta: {
			title: 'sections',
			hidden: false,
		},
		children: [
			{
				path: '/section/section1',
				name: 'section1',
				component: () => import('@/views/section/section1'),
				meta: {
					title: 'section1',
					hidden: false,
					icon: ''
				}
			},
			{
				path: '/section/section2',
				name: 'section2',
				component: () => import('@/views/section/section2'),
				meta: {
					title: 'section2',
					hidden: false,
					icon: ''
				}
			},
			{
				path: '/section/section3',
				name: 'section3',
				component: () => import('@/views/section/section3'),
				meta: {
					title: 'section3',
					hidden: false,
					icon: ''
				}
			},
		]
	},
	{
		path: '/column',
		name: 'column',
		component: () => import('@/views/column/column'),
		meta: {
			title: 'column',
			hidden: false,
			icon: ''
		}
	},
	{
		path: '/column-1',
		name: 'column',
		component: () => import('@/views/column-1/column-1'),
		meta: {
			title: 'column1',
			hidden: false,
			icon: ''
		}
	},
	{
		path: '/personal',
		name: 'personal',
		component: () => import('@/views/personal/personal'),
		meta: {
			title: 'personal',
			hidden: true,
			icon: ''
		}
	},
	{
		path: '/404',
		name: '404',
		component: () => import('@/views/404.vue'),
		meta: {
			title: '404',
			hidden: true,
			icon: ''
		}
	},
]

// 存到vuex 
store.commit('setMenuList', asyncRoutes);
export default asyncRoutes;
