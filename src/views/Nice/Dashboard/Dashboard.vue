<template>
	<v-container fluid>
		<v-row>
			<v-col cols="12">
				<Comp01 />
			</v-col>
			<v-col cols="6" v-if="com2">
				<Comp02 />
			</v-col>
			<v-col cols="6" v-if="com3">
				<Comp03 />
			</v-col>
			<v-col cols="6" v-if="com4">
				<Comp04 />
			</v-col>
			<v-col cols="6" v-if="com5">
				<Comp05 />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import Comp01 from './Comp01.vue';
import Comp02 from './Comp02.vue';
import Comp03 from './Comp03.vue';
import Comp04 from './Comp04.vue';
import Comp05 from './Comp05.vue';

export default {
	data: () => ({
		com2: true,
		com3: true,
		com4: true,
		com5: true,
	}),
	components: {
		Comp01,
		Comp02,
		Comp03,
		Comp04,
		Comp05,
	},
};
</script>

<style></style>
