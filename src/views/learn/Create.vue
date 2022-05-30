<template>
	<v-container fluid>
		<v-row>
			<v-col cols="12">
				<v-card outlined>
					<v-card-title class="primary white--text">
						<span>신규 작성</span>
					</v-card-title>
					<v-divider></v-divider>

					<v-card-text class="pa-5">
						<v-row>
							<v-col cols="12">
								<v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
									<template v-slot:activator="{ on, attrs }">
										<v-text-field v-model="date" label="The date of study" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
									</template>
									<v-date-picker v-model="date" no-title @input="btnInput">
										<v-spacer></v-spacer>
										<v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
										<v-btn text color="primary" @click="$refs.menu.save(date)"> OK </v-btn>
									</v-date-picker>
								</v-menu>
							</v-col>
							<v-col cols="12" lg="6">
								<v-textarea clearable clear-icon="mdi-close-circle" label="A Korean sentense" v-model="koreanValue" auto-grow />
							</v-col>
							<v-col cols="12" lg="6">
								<v-textarea clearable clear-icon="mdi-close-circle" label="A English sentense" v-model="englishValue" auto-grow />
							</v-col>
							<v-col cols="12">
								<v-textarea clearable clear-icon="mdi-close-circle" label="Tip" v-model="tipValue" auto-grow />
							</v-col>
						</v-row>

						<div class="text-center mt-12 mb-5">
							<v-rating v-model="rating" length="3" background-color="grey darken-1-2" color="yellow darken-3" empty-icon="$ratingFull" hover large></v-rating>

							<span>{{ ratingMsg[rating - 1] }}</span>
						</div>
					</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="12">
				<v-row justify="space-between">
					<v-col cols="auto">
						<v-btn @click="init">초기화</v-btn>
					</v-col>
					<v-col cols="auto">
						<v-btn @click="btnCreate"><v-icon>mdi-content-save-outline</v-icon>등록</v-btn>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
		menu: false,
		koreanValue: '',
		englishValue: '',
		tipValue: '',
		rating: 1,
		ratingMsg: ['모른다', '알 것 같다', '안다'],
	}),
	methods: {
		init() {
			this.date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);
			this.menu = false;
			this.koreanValue = '';
			this.englishValue = '';
			this.tipValue = '';
			this.rating = 1;
		},
		btnCreate() {
			console.log('저장');
		},
		btnInput(date) {
			this.$refs.menu.save(date);
			this.menu = false;
		},
	},
};
</script>

<style></style>
