<template>
	<div class="container page_b flex fc">
		<div class="white_b notice_row pl10 pr10 flex ac">
			<img class="notice_icon mr2" src="../static/notice_icon.png">
			<div class="flex-1 f12 text_color text-overflow mr2">温馨提示：每位用户只能添加10个账号</div>
			<img class="right_arrow" src="../static/right_arrow.png">
		</div>
		<div class="flex-1 scroll-y hide_scrollbar pl10 pr10">
			<div class="ww_item width-100 flex ac jsb mt10 pl15 pr15" v-for="item in 30">
				<div class="f14 text_color fw-500 flex">
					<div>旺旺号：5665778888</div>
					<!-- <div>（接单中）</div> -->
					<div class="has_color">（已接单）</div>
				</div>
				<div class="setting_button f14 white_color">操作</div>
			</div>
		</div>
		<div class="pt12 pb12 pl32 pr32">
			<CommonButton name="立即添加旺旺号"/>
		</div>
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
.notice_row{
	height: 32px;
	.notice_icon{
		width: 18px;
		height: 18px;
	}
	.right_arrow{
		width: 6px;
		height: 12px;
	}
}
.ww_item{
	height: 78px;
	background: #FFFFFF;
	border-radius: 6px;
	.has_color{
		color: #3EA6FF;
	}
	.setting_button{
		width: 70px;
		text-align: center;
		height: 26px;
		line-height: 26px;
		background: #3EA6FF;
		border-radius: 13px;
	}
}
</style>