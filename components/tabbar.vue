<template>
	<view class="tabbar">
		<view v-for="(item,index) in tabbar" :key="index"  @click="changeTab(index)" class="item"  :class="{current: index === selIndex}">
			<img  :src="selIndex === index?item.iconPathSelect:item.iconPath" alt="" class="icon" >
			<span class="text">{{item.text}}</span>
			
		</view>
	</view>
	
</template>
<script>
	export default {
		data() {
			return {
				selIndex: 0,
				tabbar: [{
					"pagePath": "/pages/news/news",
					"iconPath":require('../images/icon1.png'), 
					"iconPathSelect": require('../images/icon1-on.png'), 
					"text": "资讯"
				},
				{
					"pagePath": "/pages/exchange/exchange", //页面路径
					"text": "交易", //tab字体显示
					"iconPath": require('../images/icon2.png'), 
					"iconPathSelect": require('../images/icon2-on.png')
				}, {
					"pagePath": "/pages/mine/mine",
					"text": "我的",
					"iconPath": require('../images/icon3.png'), 
					"iconPathSelect": require('../images/icon3-on.png')
					}
				
			]
				
			}
		},
		methods: {
		
		// 切换图标
		changeTab(item) {
			this.selIndex = item // 点谁就把谁的索引值保存起来
			let currentPage = item.pagePath;
			uni.showLoading({
				title: '正在加载...'
			})
			uni.redirectTo({
				url: currentPage,
				success: (e) => {
					uni.hideLoading();
				},
				fail: (e) => {
				}
			})
		},
	},
}
</script>

<style lang="scss" scoped>
	.tabbar{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 120rpx;
		background: #FFFFFF;
		border-top: 1rpx solid #DDDDDD;
		display: flex;
		justify-content: space-between;
		text-align: center;
		width: 100%;
		
		.item{
			text-align: center;
			width: 33.33%;
			padding-top: 15rpx;
			.icon{
				height:  50rpx;
				display: block;
				margin: 0 auto;
			}
			
			.text{
				font-size: 24rpx;
				font-family: Noto Sans S Chinese;
				font-weight: 400;
				color: #797979;
				line-height: 36rpx;
			}
			&.current{
				.text{
					color: #000;
				}
			}
		}
	}

</style>
