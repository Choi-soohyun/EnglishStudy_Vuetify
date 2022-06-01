<template>
	<v-card width="250" outlined>
		<h5 class="pa-3">회원 목록</h5>

		<v-tabs v-model="tab" grow>
			<v-tabs-slider color="primary" />

			<v-tab> 전체 회원 </v-tab>
			<v-tab> 담당 회원 </v-tab>
		</v-tabs>

		<v-tabs-items v-model="tab">
			<v-tab-item> <Tab01 /> </v-tab-item>
			<v-tab-item> <Tab02 /> </v-tab-item>
		</v-tabs-items>
	</v-card>
</template>

<script>
import Tab01 from './Tab01.vue';
import Tab02 from './Tab02.vue';

export default {
	data: () => ({
		tab: 'tab01',
	}),
	components: {
		Tab01,
		Tab02,
	},
};
</script>

<style></style>
