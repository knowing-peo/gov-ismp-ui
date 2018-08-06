<template>
	<div class="topbar-wrapper">
		<el-row>
			{{ msg }}
		</el-row>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				msg:'topbar'
			}
		}
	}
</script>
<style scoped>
	.topbar-wrapper{

	}
</style>