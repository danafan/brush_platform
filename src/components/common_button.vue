<template>
	<div class="common_button width-100 white_color f16">{{name}}</div>
</template>
<script>
	export default{
		props:{
			name:{
				type:String,
				default:""
			}
		}
	}
</script>
<style lang="less" scoped>
.common_button{
	text-align: center;
	height: 45px;
	line-height: 45px;
	background: #3EA6FF;
	border-radius: 23px;
}
</style>