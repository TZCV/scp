<template>
  <view>
    <view class="item">请填写你的支付宝姓名</view>
    <u--input
      class="itemText"
      border="bottom"
      placeholder="请填写你的支付宝姓名"
      v-model="alipay.username"
    ></u--input>
    <view class="item">请填写你的支付宝帐号</view>
    <u--input
      class="itemText"
      border="bottom"
      placeholder="请填写你的支付宝帐号"
      v-model="alipay.account"
    ></u--input>
    <u-popup mode="center" :round="30" :show="show" @close="close" @open="open">
      <view class="pop">
        <view class="pop-title">请务必确认填写的支付宝信息无误</view>
        <text class="pop-description"
          >如因用户填写支付宝信息出错导致的钱款去向问题，本平台概不负责。</text
        >
        <view class="btns"
          ><u-button @click="close" class="btn cancelBtn">取消</u-button
          ><u-button class="btn sureBtn">确认</u-button></view
        >
      </view>
    </u-popup>
    <u-button @click="open" class="subBtn">确认</u-button>
  </view>
</template>

<script>
export default {
  data () {
    return {
      alipay: {
        username: '',
        account: '',
      },
      show: false
    }
  },
  methods: {
    open () {
      console.log('open');
      this.show = true
    },
    close () {
      this.show = false
      // console.log('close');
    },
  }
}
</script>

<style lang="scss">
.item {
  font-size: 32rpx;
  font-weight: normal;
  font-family: 'NotoSansHans-Bold';
  padding-left: 51rpx;
  padding-top: 54rpx;
  padding-bottom: 58rpx;
}
.itemText {
  margin: 0 50rpx;
}
.pop {
  width: 650rpx;
  height: 410rpx;
  background: #ffffff;
  padding: 57rpx;
  border-radius: 30rpx;
}
.pop-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333333;
  font-family: 'NotoSansHans-Bold';
  line-height: 36rpx;
  text-align: center;
  padding-bottom: 30rpx;
}
.pop-description {
  font-size: 30rpx;
  font-weight: normal;
  font-family: 'NotoSansHans-Bold';
  color: #333333;
}
.subBtn {
  font-size: 38rpx;
  font-weight: bold;
  font-family: 'NotoSansHans-Bold';
  color: #ffffff;
  border-radius: 50rpx;
  margin: 50rpx;
  width: 650rpx;
  height: 100rpx;
  background: #3b7beb;
  border-radius: 50rpx;
  position: absolute;
  bottom: 55rpx;
}
.btns {
  display: flex;
  position: relative;
}
.btn {
  width: 250rpx;
  height: 72rpx;
  border-radius: 10rpx;
  bottom: -80rpx;
}
.sureBtn {
  background-color: #3b7beb;
  color: #ffffff;
}
</style>>
