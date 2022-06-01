import Vue from 'vue';
import VueRouter from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout';
import PageLayout from '@/layouts/PageLayout';
import AuthLayout from '@/layouts/AuthLayout';
import learn from './learn';
import review from './review';
import question from './question';
import nice from './nice';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/learn/create',
	},
	{
		path: '/example',
		redirect: '/example/dashboard',
		component: DefaultLayout,
		children: [
			{
				path: 'dashboard',
				name: 'Dashboard',
				component: () => import('@/views/Dashboard'),
			},
			{
				path: 'grid-system',
				name: 'GridSystem',
				component: () => import('@/views/GridSystem'),
			},
			{
				path: 'grid-list-page',
				name: 'GridListPage',
				component: () => import('@/views/GridListPage'),
			},
			{
				path: 'break-points',
				name: 'BreakPoints',
				component: () => import('@/views/BreakPoints'),
			},
			{
				path: 'typography',
				name: 'Typography',
				component: () => import('@/views/Typography'),
			},
		],
	},
	{
		path: '/auth',
		component: AuthLayout,
		children: [
			{
				path: 'sign-in',
				name: 'SignIn',
				component: () => import('@/views/Auth/SignIn'),
			},
			{
				path: 'sign-up',
				name: 'SignUp',
				component: () => import('@/views/Auth/SignUp'),
			},
		],
	},
	{
		path: '/page',
		component: PageLayout,
		children: [
			{
				path: '',
				name: 'productList',
				component: () => import('@/views/Page/ProductList'),
			},
		],
	},
	{
		path: '*',
		component: () => import('@/views/Page/Error404'),
	},
];

const router = new VueRouter({
	mode: 'history',
	routes: [...routes, ...learn, ...review, ...question, ...nice],
});

export default router;
