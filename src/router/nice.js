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
		],
	},
];
