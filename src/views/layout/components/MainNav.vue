<template>
	<div class="main-nav">
		<el-row>
			<ul>
				<li v-for="route in routers">
					<router-link :to="route.path">{{ route.meta.title }}</router-link>
				</li>
			</ul>
		</el-row>
	</div>
</template>
<script>
	export default {
		name:"MainNav",
		data(){
			return {
				msg:'main-nav'
			}
		},
		computed:{
			routers(){
				let routeList = this.$router.options.routes.filter(function(item){
					return item.path!=="/login" && item.path !== "/" && item.path!== '/404' && item.path !== '*';
				});
				return routeList;
			}
		}

	}
</script>
<style scoped>
	ul,li{
		margin:0;
		padding:0;
	}
	li{
		float:left;
		list-style:none;
		margin-left:8px;
	}
</style>