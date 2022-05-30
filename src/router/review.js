export default [
	{
		path: '/review',
		component: () => import('@/layouts/DefaultLayout'),
		children: [
			{
				path: '',
				name: '복습보기',
				component: () => import('@/views/review/Detail'),
			},
		],
	},
];
