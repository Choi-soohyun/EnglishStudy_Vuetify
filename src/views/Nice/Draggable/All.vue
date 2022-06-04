<template>
	<div>
		<v-simple-table>
			<colgroup>
				<col width="50%" />
				<col width="50%" />
			</colgroup>
			<thead>
				<tr>
					<th>Name</th>
					<th>Id</th>
				</tr>
			</thead>
			<draggable :list="list" tag="tbody" :disabled="!enabled" v-bind="dragOptions" class="list-group" :move="checkMove" @start="dragging = true" @end="dragging = false">
				<tr class="list-group-item" v-for="element in list" :key="element.name">
					<td>{{ element.name }}</td>
					<td>{{ element.id }}</td>
				</tr>
			</draggable>
		</v-simple-table>

		<v-simple-table>
			<colgroup>
				<col width="50%" />
				<col width="50%" />
			</colgroup>
			<thead>
				<tr>
					<th>Name</th>
					<th>Id</th>
				</tr>
			</thead>
			<draggable :list="list2" tag="tbody" :disabled="!enabled" v-bind="dragOptions" class="list-group2" :move="checkMove" @start="dragging = true" @end="dragging = false">
				<tr class="list-group-item2" v-for="element in list2" :key="element.name">
					<td>{{ element.name }}</td>
					<td>{{ element.id }}</td>
				</tr>
			</draggable>
		</v-simple-table>

		<hr />
		<!-- <draggable :list="list" :disabled="!enabled" v-bind="dragOptions" class="list-group" :move="checkMove" @start="dragging = true" @end="dragging = false">
			<transition-group type="transition" name="flip-list">
				<div class="list-group-item" v-for="element in list" :key="element.name">
					{{ element.name }}
				</div>
			</transition-group>
		</draggable> -->
	</div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
	name: 'simple',
	display: 'Simple',
	order: 0,
	components: {
		draggable,
	},
	data() {
		return {
			enabled: true,
			list: [
				{ name: 'A', id: 0 },
				{ name: 'B', id: 1 },
				{ name: 'C', id: 2 },
				{ name: 'D', id: 3 },
				{ name: 'E', id: 4 },
				{ name: 'F', id: 5 },
			],
			list2: [
				{ name: 'AAAAAA', id: 0 },
				{ name: 'BBBBBB', id: 1 },
				{ name: 'CCCCCC', id: 2 },
				{ name: 'DDDDDD', id: 3 },
				{ name: 'EEEEEE', id: 4 },
				{ name: 'FFFFFF', id: 5 },
			],
			dragging: false,
		};
	},
	computed: {
		draggingInfo() {
			return this.dragging ? 'under drag' : '';
		},
		dragOptions() {
			return {
				animation: 0,
				group: 'description',
				disabled: false,
				ghostClass: 'ghost',
			};
		},
	},
	methods: {
		add: function () {
			this.list.push({ name: 'Juan ' + this.id, id: this.id++ });
		},
		replace: function () {
			this.list = [{ name: 'Edgard', id: this.id++ }];
		},
		checkMove: function (e) {
			return e.to === e.from ? true : false;
			// window.console.log('Future index: ' + e.draggedContext.futureIndex);
		},
	},
};
</script>

<style scoped>
.buttons {
	margin-top: 35px;
}
.ghost {
	opacity: 0.5;
	background: #c8ebfb;
}
</style>
