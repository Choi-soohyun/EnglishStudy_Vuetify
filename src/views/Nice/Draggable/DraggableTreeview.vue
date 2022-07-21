<template>
	<div>
		<VuetifyDraggableTreeview v-model="items"></VuetifyDraggableTreeview>
		<VuetifyDraggableTreeview v-model="items" group="example">
			<!-- <template v-slot:prepend="{ item }">
				{{ item.name }}
				<v-icon>mdi-file</v-icon>
			</template>
			<template v-slot:label="{ item }">
				<span class="primary--text">{{ item.name }}</span>
			</template>
			<template v-slot:append="{ item }">
				<template v-if="item.children != null && item.children.length > 0"> has {{ item.children.length }} children </template>
			</template> -->
		</VuetifyDraggableTreeview>
	</div>
</template>

<script>
import VuetifyDraggableTreeview from 'vuetify-draggable-treeview';

export default {
	data() {
		return {
			items: [
				{
					id: 1,
					name: 'hoge',
					children: [
						{ id: 11, name: 'hoge-child11' },
						{ id: 12, name: 'hoge-child12' },
						{ id: 13, name: 'hoge-child13' },
						{ id: 14, name: 'hoge-child14' },
						{ id: 15, name: 'hoge-child15' },
						{ id: 16, name: 'hoge-child16' },
					],
				},
				{
					id: 2,
					name: 'hoge',
					children: [
						{ id: 21, name: 'hoge-child21' },
						{ id: 22, name: 'hoge-child22' },
						{ id: 23, name: 'hoge-child23' },
						{ id: 24, name: 'hoge-child24' },
						{ id: 25, name: 'hoge-child25' },
						{ id: 26, name: 'hoge-child26' },
					],
				},
			],
		};
	},
	components: {
		VuetifyDraggableTreeview,
	},
};
</script>

<style></style>
