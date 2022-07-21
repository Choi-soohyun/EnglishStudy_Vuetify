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
				name: '회원관리',
				component: () => import('@/views/Nice/Member/Tabs'),
			},
			{
				path: 'draggable',
				name: '드래그',
				component: () => import('@/views/Nice/Draggable/Base'),
			},
			{
				path: 'all',
				name: '드래그전체',
				component: () => import('@/views/Nice/Draggable/All'),
			},
			{
				path: 'treeview',
				name: '드래그트리뷰',
				component: () => import('@/views/Nice/Draggable/DraggableTreeview'),
			},
			{
				path: 'inputchk',
				name: '드래그트리뷰',
				component: () => import('@/views/Nice/Dashboard/InputCheck'),
			},
		],
	},
];
