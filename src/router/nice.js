export default [
	{
		path: '/nice',
		redirect: '/nice/dashboard',
		component: () => import('@/layouts/DefaultLayout'),
		children: [
			{
				path: 'dashboard',
				name: '대시보드',
				component: () => import('@/views/Nice/Dashboard/Dashboard'),
			},
			{
				path: 'member',
				name: '대시보드',
				component: () => import('@/views/Nice/Member/Tabs'),
			},
			{
				path: 'draggable',
				name: '대시보드',
				component: () => import('@/views/Nice/Draggable/Base'),
			},
			{
				path: 'all',
				name: '대시보드',
				component: () => import('@/views/Nice/Draggable/All'),
			},
		],
	},
];
