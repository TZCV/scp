<template>
  <view>
    <img src="../../images/pic1.png" style="width: 750rpx" />
    <view class="tips">
      <view class="ico">预售</view>
      <view class="status">2022.05.25可交易</view>
    </view>
    <view class="title">(非藏品)转运</view>
    <view class="price">￥29.9</view>
    <view class="line"></view>
    <view class="detail">
      <view class="h2-tit">商品发布人</view>
      <view class="userinfo">
        <img class="userhead" src="../../images/userhead.png" />
        <view class="info">
          <view class="username">咸鱼</view>
          <view class="product">商品 10 成交 5</view>
        </view>
      </view>
      <view class="h2-tit">NFT详情</view>
      <view>发行方：千寻数字艺术藏品</view>
      <view>发行数量：4800 </view>
      <view>发行平台：其他 </view>
      <view>技术支持：</view>
      <view>发行时间：2022-04-05</view>
      <view>藏品描述：无</view>
    </view>
    <view class="line"></view>
    <view class="notice">
      <view class="h2-tit">购买须知</view>
      <view class="description">
        <view class="t1">购买时如遇到问题，请点击购买指南，查看说明指导</view>
        <view class="t2"> 卖家发货时间：</view>
        <view
          >卖家需在下单后6小时内为买家发货，每天22:00-次日8:00时间段不计入有效时间段，将自动延长。</view
        >
        <view class="t2"> 买家确认收货时间：</view>
        <view
          >买家需在卖家发货6小时内系统内完成收货确认，每天22:00~次日8:00时间段不计入有效时间段，将自动延长。</view
        >
        <view class="t2"
          >如未按时完成，买卖双方均可向进首页微信群发起投诉，平台将安排客服人员介入调查，客服拥有取消订单、扣除卖家保证金、确认收货等权利。为确保交易正常进行，请买卖双方在规定的时间内完成交易！</view
        >
      </view>
    </view>
    <view class="bottom">
      <u-icon name="star" class="ico" color="#333333" size="48"></u-icon>
      <u-icon
        name="share-square"
        class="ico"
        color="#333333"
        size="48"
      ></u-icon>
      <u-button class="btn1">购买指南</u-button>
      <u-button class="btn2">立即购买</u-button>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
.tips {
  display: flex;
  padding-top: 20rpx;
}
.tips .ico {
  width: 100rpx;
  height: 46rpx;
  background-color: #3b7beb;
  color: #ffffff;
  font-size: 24rpx;
  font-weight: normal;
  font-family: 'NotoSansHans-Bold';
  text-align: center;
  line-height: 46rpx;
  border-radius: 6rpx;
  margin-left: 20rpx;
}
.tips .status {
  width: 242rpx;
  height: 46rpx;
  background-color: #eeeeee;
  color: #3b7beb;
  font-size: 24rpx;
  font-weight: normal;
  font-family: 'NotoSansHans-Bold';
  text-align: center;
  line-height: 46rpx;
  border-radius: 6rpx;
  margin-left: 20rpx;
}
.title {
  font-size: 36rpx;
  font-weight: bold;
  font-family: 'NotoSansHans-Bold';
  padding: 30rpx 20rpx;
}
.price {
  font-size: 36rpx;
  font-weight: bold;
  color: #3b7beb;
  font-family: 'NotoSansHans-Bold';
  margin-left: 20rpx;
  padding-bottom: 40rpx;
}
.line {
  height: 20rpx;
  background-color: #f2f2f2;
}
.detail {
  padding: 20rpx;
  color: #333333;
  line-height: 50rpx;
  font-size: 28rpx;
  font-weight: normal;
  font-family: 'NotoSansHans-Bold';
}
.userinfo {
  display: flex;
  width: 710rpx;
  height: 138rpx;
  background: #f3f3f3;
  border-radius: 10rpx;
  padding-top: 14rpx;
  padding-left: 22rpx;
}
.userhead {
  width: 111rpx;
  height: 111rpx;
  margin-right: 20rpx;
}
.username {
  font-size: 30rpx;
  font-weight: bold;
  color: #333333;
  font-family: 'NotoSansHans-Bold';
}
.product {
  color: #797979;
  font-size: 24rpx;
  font-weight: normal;
  font-family: 'NotoSansHans-Bold';
}
.notice {
  color: #797979;
  font-size: 28rpx;
  line-height: 38rpx;
  font-weight: normal;
  font-family: 'NotoSansHans-Bold';
  padding: 20rpx;
  padding-bottom: 200rpx;
}
.h2-tit {
  font-weight: bold;
  color: #333333;
  font-size: 32rpx;
  padding: 20rpx 0;
}
.t1 {
  color: #333333;
}
.t2 {
  padding-top: 30rpx;
}
.bottom {
  width: 100%;
  height: 138rpx;
  padding-top: 33rpx;
  background-color: #e3e3e3;
  display: flex;
  position: fixed;
  bottom: 0;
  padding-left: 36rpx;
}
.btn1 {
  width: 200rpx;
  height: 72rpx;
  font-size: 32rpx;
  font-weight: normal;
  font-family: 'NotoSansHans-Bold';
  margin-left: 30rpx;
}
.btn2 {
  width: 275rpx;
  height: 72rpx;
  font-size: 32rpx;
  font-weight: normal;
  font-family: 'NotoSansHans-Bold';
  background-color: #3b7beb;
  color: #ffffff;
}
.bottom .ico {
  margin-right: 15rpx;
  margin-bottom: 24rpx;
}
</style>
