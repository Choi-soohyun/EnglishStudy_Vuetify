<template>
	<v-container fluid>
		<v-row>
			<v-col cols="12" md="4">
				<v-list>
					<v-list-item-group>
						<v-list-item v-for="(item, idx) in list" :key="idx" @click="btnDetail(idx)">
							<v-list-item-content>
								<v-list-item-title>
									<span><v-rating :value="item.rating" length="3" background-color="grey darken-1-2" color="yellow darken-3" small readonly></v-rating></span>
									<span>{{ item.date }}</span>
								</v-list-item-title>
								<v-list-item-subtitle v-text="item.foreign"></v-list-item-subtitle>
								<v-list-item-subtitle v-text="item.korean"></v-list-item-subtitle>
								<!-- <v-row>
							<v-col>
								<v-card>
									<v-card-text>{{ item.foreign }}</v-card-text>
								</v-card>
							</v-col>
							<v-col>
								<v-card>
									<v-card-title>{{ item.korean }}</v-card-title>
								</v-card>
							</v-col>
							<v-col>
								<v-card>
									<v-card-title>{{ item.tip }}</v-card-title>
								</v-card>
							</v-col>
						</v-row> -->
							</v-list-item-content>
						</v-list-item>
					</v-list-item-group>
				</v-list>
			</v-col>
			<v-col cols="12" md="8">
				<v-card outlined>
					<v-card-text class="pa-5">
						<v-row>
							<v-col cols="12">
								<v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="selectedInfo.date" transition="scale-transition" offset-y min-width="auto">
									<template v-slot:activator="{ on, attrs }">
										<v-text-field v-model="selectedInfo.date" label="The date of study" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
									</template>
									<v-date-picker v-model="selectedInfo.date" no-title @input="btnInput">
										<v-spacer></v-spacer>
										<v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
										<v-btn text color="primary" @click="$refs.menu.save(selectedInfo.date)"> OK </v-btn>
									</v-date-picker>
								</v-menu>
							</v-col>
							<v-col cols="12" lg="6">
								<v-textarea clearable clear-icon="mdi-close-circle" label="A Korean sentense" v-model="selectedInfo.korean" auto-grow />
							</v-col>
							<v-col cols="12" lg="6">
								<v-textarea clearable clear-icon="mdi-close-circle" label="A foreign sentense" v-model="selectedInfo.foreign" auto-grow />
							</v-col>
							<v-col cols="12">
								<v-textarea clearable clear-icon="mdi-close-circle" label="Tip" v-model="selectedInfo.tip" auto-grow />
							</v-col>
						</v-row>

						<div class="text-center mt-12 mb-5">
							<v-rating v-model="selectedInfo.rating" length="3" background-color="grey darken-1-2" color="yellow darken-3" empty-icon="$ratingFull" hover large></v-rating>

							<span>{{ ratingMsg[rating - 1] }}</span>
						</div>
					</v-card-text>

					<v-row justify="space-between" class="pa-5">
						<v-col cols="auto">
							<v-btn @click="init">초기화</v-btn>
						</v-col>
						<v-col cols="auto">
							<v-btn @click="btnCreate"><v-icon>mdi-content-save-outline</v-icon>수정</v-btn>
						</v-col>
					</v-row>
				</v-card>
			</v-col>
			<v-col cols="12"> </v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
		menu: false,
		koreanValue: '',
		foreignValue: '',
		tipValue: '',
		rating: 1,
		ratingMsg: ['모른다', '알 것 같다', '안다'],
		list: [
			{
				day: '1',
				date: '2022-05-29',
				rating: 1,
				foreign: 'Is everything alright? \nIs everything okay? \nIs everything going okay?',
				korean: '(괜찮아 보이지 않을 때) 괜찮아요?1',
				tip: '(분명히) 괜찮아 보이지 않을 때 “괜찮아요?”라고 이유를 물을 때 쓰는 표현',
				selected: false,
			},
			{
				day: '2',
				date: '2022-05-28',
				rating: 2,
				foreign: 'Is everything alright? \nIs everything okay? \nIs everything going okay?',
				korean: '(괜찮아 보이지 않을 때) 괜찮아요?2',
				tip: '(분명히) 괜찮아 보이지 않을 때 “괜찮아요?”라고 이유를 물을 때 쓰는 표현',
				selected: false,
			},
			{
				day: '3',
				date: '2022-05-27',
				rating: 1,
				foreign: 'Is everything alright? \nIs everything okay? \nIs everything going okay?',
				korean: '(괜찮아 보이지 않을 때) 괜찮아요?3',
				tip: '(분명히) 괜찮아 보이지 않을 때 “괜찮아요?”라고 이유를 물을 때 쓰는 표현',
				selected: false,
			},
			{
				day: '7',
				date: '2022-05-21',
				rating: 3,
				foreign: 'Is everything alright? \nIs everything okay? \nIs everything going okay?',
				korean: '(괜찮아 보이지 않을 때) 괜찮아요?4',
				tip: '(분명히) 괜찮아 보이지 않을 때 “괜찮아요?”라고 이유를 물을 때 쓰는 표현',
				selected: false,
			},
		],
		selectedInfo: {},
	}),
	methods: {
		init() {
			this.date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);
			this.menu = false;
			this.koreanValue = '';
			this.foreignValue = '';
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
		btnDetail(idx) {
			this.list.map(x => (x.selected = false));

			this.list[idx].selected = true;
			this.selectedInfo = { ...this.list[idx] };
		},
	},
};
</script>

<style></style>
