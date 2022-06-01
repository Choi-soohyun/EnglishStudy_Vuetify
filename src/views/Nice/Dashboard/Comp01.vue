<template>
	<v-container fluid>
		<h5>김지원 매니저님 반갑습니다.</h5>

		<v-card outlined class="mt-3 pa-3 grey lighten-4">
			<v-row no-gutters>
				<v-col cols="2">
					<v-card elevation="0" class="grey lighten-4">
						<div class="text-center text-subtitle-1 font-weight-bold">매니저 김지원</div>
						<div class="text-center text-subtitle-2 font-weight-thin">금융사업실 | 금융 업권 담당</div>
					</v-card>
				</v-col>
				<v-col cols="5">
					<v-card elevation="0" class="grey lighten-4 pa-3">
						<h5>체크 리스트</h5>
						<div class="d-flex">
							<div>
								<h6 class="pr-5">한달 내 갱신 도래 회원사</h6>
								<div class="text-right">
									<span class="text-h5">15</span>
									<span>개</span>
								</div>
							</div>
							<div>
								<h6 class="pr-5">신규 담당 회원 1:1 문의</h6>
								<div class="text-right">
									<span class="text-h5">15</span>
									<span>개</span>
								</div>
							</div>
							<div>
								<h6 class="pr-5">신규 1:1 문의</h6>
								<div class="text-right">
									<span class="text-h5">15</span>
									<span>개</span>
								</div>
							</div>
							<div>
								<h6 class="pr-5">신규 계약 해지 문의</h6>
								<div class="text-right">
									<span class="text-h5">15</span>
									<span>개</span>
								</div>
							</div>
						</div>
					</v-card>
				</v-col>
				<v-col cols="5">
					<v-card elevation="0" class="grey lighten-4">
						<h5>최근 조회 회원사</h5>
						<div class="mt-3">
							<v-chip class="mr-1 text-subtitle-2" close close-icon="mdi-close">(주)신한은행</v-chip>
							<v-chip class="mr-1 text-subtitle-2" close close-icon="mdi-close">(주)국민은행</v-chip>
							<v-chip class="mr-1 text-subtitle-2" close close-icon="mdi-close">(주)카카오뱅크</v-chip>
						</div>
					</v-card>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
</template>

<script>
export default {};
</script>

<style></style>
