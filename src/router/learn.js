export default [
	{
		path: '/learn',
		redirect: '/learn/create',
		component: () => import('@/layouts/DefaultLayout'),
		children: [
			{
				path: 'create',
				name: '내용추가',
				component: () => import('@/views/learn/Create'),
			},
			{
				path: 'modify',
				name: '내용수정',
				component: () => import('@/views/learn/Modify'),
			},
			{
				path: 'detail',
				name: '내용보기',
				component: () => import('@/views/learn/Detail'),
			},
		],
	},
];
