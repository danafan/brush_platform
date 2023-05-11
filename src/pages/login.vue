<template>
	<div class="container pl22 pr22 pt66 flex fc ac">
		<div class="black_color f22 fw-500 mb52">欢迎登录接单平台</div>
		<div class="width-100 mb90">
			<div class="text_color f16 mb14">秘钥登录</div>
			<input class="password_input width-100 f16 pl15" placeholder="请输入登录密钥">
		</div>
		<CommonButton name="登录"/>
	</div>
</template>
<script>
	import CommonButton from '../components/common_button.vue'
	export default{
		components:{
			CommonButton
		}
	}
</script>
<style lang="less" scoped>
.password_input{
	outline: none;
	border:none;
	height: 46px;
	background: #F5F7FF;
	border-radius: 4px;
}
</style>