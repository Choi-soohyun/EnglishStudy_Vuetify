export default [
	{
		path: '/question',
		component: () => import('@/layouts/DefaultLayout'),
		children: [
			{
				path: '',
				name: '내용보기',
				component: () => import('@/views/question/Random'),
			},
		],
	},
];
