<template>
	<div>
		<draggable v-model="myArray" :move="checkMove" @change="changeMove" draggable=".item">
			<div v-for="(element, idx) in myArray" :key="idx" class="item">
				{{ element }}
			</div>
		</draggable>
	</div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
	data() {
		return {
			myArray: [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }, { name: 'E' }],
		};
	},
	components: {
		draggable,
	},
	methods: {
		checkMove() {
			console.log('Item이 움직일 때마다');
		},
		changeMove() {
			console.log('Mouse 떼었을 때');
		},
	},
};
</script>

<style></style>
