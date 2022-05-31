<template>
	<v-container>
		<v-toolbar class="elevation-0">
			<v-spacer></v-spacer>
			<v-btn class="mx-2" fab dark small color="primary">한</v-btn>
			<v-btn class="mx-2" fab dark small color="grey">영</v-btn>
			<v-btn class="pa-4 ma-3" dark small color="grey" rounded outlined>펼쳐보기</v-btn>
		</v-toolbar>

		<v-card v-for="(item, idx) in list" :key="idx" class="mt-5">
			<v-card-title>
				{{ item.day }}일 전 / {{ item.date }}
				<v-spacer></v-spacer>
				<v-rating :value="item.rating" length="3" background-color="grey darken-1-2" color="yellow darken-3"></v-rating>
			</v-card-title>
			<v-container class="grey lighten-3">
				<v-card class="pa-3" outlined v-html="item.korean" />
				<v-card class="pa-3" outlined v-html="item.foreign" />
				<v-card class="pa-3" outlined v-html="item.tip" />
			</v-container>
		</v-card>
	</v-container>
</template>

<script>
export default {
	data: () => ({
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
	}),
	mounted() {
		this.list.map(x => {
			x.foreign = x.foreign.replace(/(\n|\r\n)/g, '<br/>');
			x.korean = x.korean.replace(/(\n|\r\n)/g, '<br/>');
			x.tip = x.tip.replace(/(\n|\r\n)/g, '<br/>');
		});
	},
};
</script>

<style></style>
