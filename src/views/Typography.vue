<template>
	<v-container>
		<v-card>
			<v-card-title> Display</v-card-title>
			<v-card-text class="grey lighten-3">
				<v-card class="pa-3 d-none" outlined> display 1 </v-card>
				<v-card class="pa-3 d-none d-sm-block" outlined> display 1 </v-card>
			</v-card-text>
		</v-card>
		<v-card class="mt-5">
			<v-card-title> Typography</v-card-title>
			<v-card-text class="grey lighten-3">
				<v-card class="pa-3" outlined>
					<p class="text-h1">h1</p>
					<p class="text-h1 text-sm-subtitle-1">기본은 h1, sm보다 클 때는 subtitle-1</p>
					<p class="text-h2">h2</p>
					<p class="text-h3">h3</p>
					<p class="text-h4">h4</p>
					<p class="text-h5">h5</p>
					<p class="text-h6">h6</p>
					<p class="text-subtitle-1">subtitle-1</p>
					<p class="text-subtitle-1 font-weight-bold">subtitle-1</p>
					<p class="text-subtitle-1 font-weight-thin">subtitle-1</p>
					<p class="text-subtitle-2">subtitle-2</p>
					<p class="text-body-1">body-1</p>
					<p class="text-body-2">body-2</p>
					<p class="text-button">button</p>
					<p class="text-caption">caption</p>
					<p class="text-overline">overline</p>
				</v-card>
			</v-card-text>
		</v-card>
		<v-card class="mt-5">
			<v-card-title> Typography</v-card-title>
			<v-card-text class="grey lighten-3">
				<v-card class="pa-3 primary" outlined> Hello </v-card>
				<v-card class="pa-3 primary lighten-1" outlined> Hello </v-card>
				<v-card class="pa-3 primary lighten-3" outlined> Hello </v-card>
				<v-card class="pa-3 primary lighten-4" outlined> Hello </v-card>
				<v-card class="pa-3 secondary" outlined> Hello </v-card>
				<v-card class="pa-3 error" outlined> Hello </v-card>
				<v-card class="pa-3 error darken-1" outlined> Hello </v-card>
				<v-card class="pa-3 error darken-3" outlined> Hello </v-card>
				<v-card class="pa-3 error darken-4" outlined> Hello </v-card>
				<v-card class="pa-3 primary--text" outlined> Hello </v-card>
				<v-card class="pa-3 secondary--text" outlined> Hello </v-card>
				<v-card class="pa-3 error--text" outlined> Hello </v-card>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
export default {};
</script>

<style></style>
