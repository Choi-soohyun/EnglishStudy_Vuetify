<template>
	<v-container fluid>
		<v-row>
			<v-col cols="12" md="4">
				<v-data-iterator :items="list" :items-per-page.sync="itemsPerPage" :page.sync="page" :search="search" :sort-by="sortBy.toLowerCase()" :sort-desc="sortDesc" hide-default-footer>
					<template v-slot:header>
						<v-select v-model="sortBy" flat solo-inverted hide-details :items="keys" prepend-inner-icon="mdi-magnify" label="Sort by"></v-select>
						<v-btn-toggle v-model="sortDesc" mandatory>
							<v-btn small depressed color="blue" :value="false">
								<v-icon>mdi-arrow-up</v-icon>
							</v-btn>
							<v-btn small depressed color="blue" :value="true">
								<v-icon>mdi-arrow-down</v-icon>
							</v-btn>
						</v-btn-toggle>
					</template>

					<template v-slot:default="props">
						<v-list>
							<v-list-item-group>
								<v-list-item v-for="(item, idx) in props.items" :key="idx" @click="btnDetail(idx)" :class="`list${idx}`">
									<v-list-item-content>
										<v-list-item-title>
											<span><v-rating :value="item.rating" length="3" background-color="grey darken-1-2" color="yellow darken-3" small readonly></v-rating></span>
											<span>{{ item.date }}</span>
										</v-list-item-title>
										<v-list-item-subtitle v-text="item.foreign"></v-list-item-subtitle>
										<v-list-item-subtitle v-text="item.korean"></v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
							</v-list-item-group>
						</v-list>
					</template>

					<template v-slot:footer>
						<v-row class="mt-2" align="center" justify="center">
							<v-menu offset-y>
								<template v-slot:activator="{ on, attrs }">
									<v-btn dark text color="primary" class="ml-2" v-bind="attrs" v-on="on">
										{{ itemsPerPage }}
										<v-icon>mdi-chevron-down</v-icon>
									</v-btn>
								</template>
								<v-list>
									<v-list-item v-for="(number, index) in itemsPerPageArray" :key="index" @click="updateItemsPerPage(number)">
										<v-list-item-title>{{ number }}</v-list-item-title>
									</v-list-item>
								</v-list>
							</v-menu>

							<v-spacer></v-spacer>

							<span class="mr-4 grey--text"> Page {{ page }} of {{ numberOfPages }} </span>
							<v-btn fab dark color="blue darken-3" small class="mr-1" @click="formerPage">
								<v-icon>mdi-chevron-left</v-icon>
							</v-btn>
							<v-btn fab dark color="blue darken-3" small class="ml-1" @click="nextPage">
								<v-icon>mdi-chevron-right</v-icon>
							</v-btn>
						</v-row>
					</template>
				</v-data-iterator>
			</v-col>
			<v-col cols="12" md="8">
				<v-container class="grey lighten-3">
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

								<span>{{ ratingMsg[selectedInfo.rating - 1] }}</span>
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
				</v-container>
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
		itemsPerPageArray: [1, 2, 3, 6],
		search: '',
		filter: {},
		sortDesc: false,
		page: 1,
		itemsPerPage: 6,
		sortBy: 'day',
		keys: ['day', 'date', 'rating'],
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
	computed: {
		numberOfPages() {
			return Math.ceil(this.list.length / this.itemsPerPage);
		},
		filteredKeys() {
			return this.keys.filter(key => key !== 'Name');
		},
	},
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
		nextPage() {
			if (this.page + 1 <= this.numberOfPages) this.page += 1;

			const dom = document.querySelectorAll('.v-item-group > .v-list-item');
			dom.forEach(el => el.setAttribute('aria-selected', false));
		},
		formerPage() {
			if (this.page - 1 >= 1) this.page -= 1;
		},
		updateItemsPerPage(number) {
			this.itemsPerPage = number;
		},
	},
};
</script>

<style></style>
