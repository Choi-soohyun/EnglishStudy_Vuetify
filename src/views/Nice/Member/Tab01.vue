<template>
	<v-card class="pa-3">
		<v-autocomplete v-model="select" :items="items" :search-input.sync="search" cache-items class="mx-4" flat label="기업명, 이용자 아이디, 성명으로 검색" solo icon> </v-autocomplete>
		<v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
	</v-card>
</template>

<script>
export default {
	data: () => ({
		search: null,
		select: null,
		items: [],
		states: [
			'Alabama',
			'Alaska',
			'American Samoa',
			'Arizona',
			'Arkansas',
			'California',
			'Colorado',
			'Connecticut',
			'Delaware',
			'District of Columbia',
			'Federated States of Micronesia',
			'Florida',
			'Georgia',
			'Guam',
			'Hawaii',
			'Idaho',
			'Illinois',
			'Indiana',
			'Iowa',
			'Kansas',
			'Kentucky',
			'Louisiana',
			'Maine',
			'Marshall Islands',
			'Maryland',
			'Massachusetts',
			'Michigan',
			'Minnesota',
			'Mississippi',
			'Missouri',
			'Montana',
			'Nebraska',
			'Nevada',
			'New Hampshire',
			'New Jersey',
			'New Mexico',
			'New York',
			'North Carolina',
			'North Dakota',
			'Northern Mariana Islands',
			'Ohio',
			'Oklahoma',
			'Oregon',
			'Palau',
			'Pennsylvania',
			'Puerto Rico',
			'Rhode Island',
			'South Carolina',
			'South Dakota',
			'Tennessee',
			'Texas',
			'Utah',
			'Vermont',
			'Virgin Island',
			'Virginia',
			'Washington',
			'West Virginia',
			'Wisconsin',
			'Wyoming',
		],
	}),
	watch: {
		search(val) {
			val && val !== this.select && this.querySelections(val);
		},
	},
	methods: {
		querySelections(v) {
			this.loading = true;
			// Simulated ajax query
			setTimeout(() => {
				this.items = this.states.filter(e => {
					return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1;
				});
				this.loading = false;
			}, 500);
		},
	},
};
</script>

<style></style>
