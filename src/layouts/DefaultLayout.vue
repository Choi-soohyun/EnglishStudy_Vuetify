<template>
	<v-app>
		<!-- expand-on-hover : 마우스 올리면 메뉴 펼쳐지는 것 -->
		<v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" app>
			<v-list-item>
				<v-list-item-avatar>
					<v-avatar color="primary" size="30">
						<span class="white--text">최</span>
					</v-avatar>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title class="text-h6"> Level.100 </v-list-item-title>
					<v-list-item-subtitle> 1000일째 복습 중 </v-list-item-subtitle>
				</v-list-item-content>
				<v-btn icon @click.stop="miniOfDevice">
					<v-icon>mdi-chevron-left</v-icon>
				</v-btn>
			</v-list-item>

			<v-divider />

			<v-list dense nav>
				<v-subheader>Learn Language</v-subheader>
				<v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-subheader>Example Menus</v-subheader>
				<v-list-item v-for="item in exampleItems" :key="item.title" :to="item.to" link>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>

			<template v-slot:append>
				<div class="pa-2">
					<v-btn block> Logout </v-btn>
				</div>
			</template>
		</v-navigation-drawer>

		<v-app-bar height="66.8px" app elevation="0">
			<v-app-bar-nav-icon @click="miniOfDevice"></v-app-bar-nav-icon>

			<v-toolbar-title>Page Title</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn icon><v-icon>mdi-heart</v-icon></v-btn>

			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>

			<v-menu left bottom>
				<template v-slot:activator="{ on, attrs }">
					<v-btn icon v-bind="attrs" v-on="on">
						<v-icon>mdi-dots-vertical</v-icon>
					</v-btn>
				</template>

				<v-list>
					<v-list-item v-for="n in 5" :key="n" @click="() => {}">
						<v-list-item-title>Option {{ n }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-app-bar>

		<v-main>
			<v-container fluid>
				<router-view />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: 'DefaultLayout',
	data: () => ({
		drawer: true,
		mini: false,
		items: [
			{ title: 'Add Content to Repeat', icon: 'mdi-note-plus', to: '/learn/create' },
			{ title: 'Modify Content to Repeat', icon: 'mdi-swap-horizontal', to: '/learn/detail' },
			{ title: "Today's review", icon: 'mdi-calendar-today', to: '/review' },
			{ title: 'Random question', icon: 'mdi-head-question-outline', to: '/question' },
		],
		exampleItems: [
			{ title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
			{ title: 'GridSystem', icon: 'mdi-view-dashboard', to: '/grid-system' },
			{
				title: 'GridListPage',
				icon: 'mdi-view-dashboard',
				to: '/grid-list-page',
			},
			{
				title: 'Break Points',
				icon: 'mdi-view-dashboard',
				to: '/break-points',
			},
			{ title: 'Typography', icon: 'mdi-view-dashboard', to: '/typography' },
			{ title: 'SignIn', icon: 'mdi-view-dashboard', to: '/auth/sign-in' },
			{ title: 'SignUp', icon: 'mdi-view-dashboard', to: '/auth/sign-up' },
		],
		right: null,
	}),
	mounted() {
		this.drawer = !this.$vuetify.breakpoint.mobile;
	},
	methods: {
		miniOfDevice() {
			if (this.$vuetify.breakpoint.mobile) {
				this.drawer = !this.drawer;
				this.mini = false;
			} else {
				this.mini = !this.mini;
			}
		},
	},
};
</script>

<style></style>
