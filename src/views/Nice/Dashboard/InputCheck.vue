<template>
	<div>
		<table>
			<thead>
				<tr>
					<th>사업자번호</th>
					<th>이름</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, idx) in inputList" :key="idx">
					<td><v-text-field hide-details label="사업자번호" v-model="item.value1" outlined /></td>
					<td><v-text-field hide-details label="이름" v-model="item.value2" outlined /></td>
				</tr>
			</tbody>
		</table>

		<v-btn block @click="clickValidation">Validation {{ btnName }}</v-btn>
	</div>
</template>

<script>
export default {
	name: 'inputCheck',
	data: () => ({
		btnName: '',
		inputList: [
			{ value1: '', value2: '' },
			{ value1: '', value2: '' },
			{ value1: '', value2: '' },
			{ value1: '', value2: '' },
		],
	}),
	methods: {
		clickValidation() {
			let isEmpty = false;
			isEmpty = this.inputList.every(x => !x.value1 || !x.value2);

			if (isEmpty) {
				this.btnName = '비어 있음';
			}

			let isFullRow = false;
			isFullRow = this.inputList.every(x => {
				if ((x.value1 && !x.value2) || (!x.value1 && x.value2)) {
					return false;
				} else {
					return true;
				}
			});

			if (isFullRow) {
				this.btnName = '한 줄 이상 채워져있음 OK';
			} else {
				this.btnName = '한 칸이 덜 채워져있음';
			}
		},
	},
};
</script>

<style></style>
