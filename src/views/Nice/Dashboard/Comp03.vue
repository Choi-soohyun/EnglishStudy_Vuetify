<template>
	<v-container fluid>
		<h5>다수 기업 정보 신청 현황</h5>
		<v-card class="mt-3 pa-3" outlined>
			<v-card outlined v-if="compaynyFlag">
				<v-row dense>
					<v-col cols="4">
						<v-card elevation="0" class="pa-3">
							<span class="text-body-2">신규 신청 건수</span>
							<div class="d-flex align-end">
								<span class="text-caption">전월 대비</span>
								<span class="text-caption">12건 ▲</span>
								<v-spacer></v-spacer>
								<span class="text-h5">15</span>
								<span>개</span>
							</div>
						</v-card>
					</v-col>
					<v-col cols="4">
						<v-card elevation="0" class="pa-3">
							<span class="text-body-2">월간 계약 완료 수</span>
							<div class="d-flex align-end">
								<span class="text-caption">전월 대비</span>
								<span class="text-caption">12건 ▲</span>
								<v-spacer></v-spacer>
								<span class="text-h5">15</span>
								<span>개</span>
							</div>
						</v-card>
					</v-col>
					<v-col cols="4">
						<v-card elevation="0" class="pa-3">
							<span class="text-body-2">월간 신청 현황</span>
							<div class="d-flex align-end">
								<span class="text-caption">전월 대비</span>
								<span class="text-caption">12건 ▲</span>
								<v-spacer></v-spacer>
								<span class="text-h5">15</span>
								<span>개</span>
							</div>
						</v-card>
					</v-col>
				</v-row>
			</v-card>

			<v-card v-else outlined height="88" class="d-flex align-center justify-center">
				<span class="primary--text">다수 기업 정보 신청 현황 데이터를 불러올 수 없습니다.</span>
			</v-card>

			<h5 class="mt-5">최근 API 신청</h5>
			<v-simple-table fixed-header height="100px">
				<template v-slot:default>
					<thead>
						<tr>
							<th>회원사</th>
							<th>고객명</th>
							<th>신청 일자</th>
							<th>API 수</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, idx) in list" :key="idx">
							<td>{{ item.company }}</td>
							<td>{{ item.name }}</td>
							<td>{{ item.date }}</td>
							<td>{{ item.api }}</td>
						</tr>
					</tbody>
				</template>
			</v-simple-table>
		</v-card>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		list: [
			{ company: '-', name: '박다영', date: '2022.03.31', api: 3 },
			{ company: '멀티캠퍼스(주)', name: '김지원', date: '2022.03.31', api: 6 },
			{ company: '-', name: '박다영', date: '2022.03.31', api: 3 },
		],
		compaynyFlag: false,
	}),
};
</script>

<style></style>
