<template>
  <!--  -->
  <view class="item">
    <img src="../images/bg1.png" alt="" class="img" />
    <span class="tag">千寻数藏</span>
    <view class="mess">量子+东方红打包</view>
    <view class="price">￥29.9</view>
  </view>
</template>

<script>

export default {

  data () {
    return {

    }
  },
  onLoad () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.item {
  width: 338rpx;
  margin-bottom: 35rpx;
  .img {
    display: block;
    width: 338rpx;
    height: 338rpx;
    margin-bottom: 10rpx;
  }
  .tag {
    height: 46rpx;
    background: #eeeeee;
    border-radius: 6rpx;
    padding: 8rpx 22rpx;
    font-size: 24rpx;
    font-family: Noto Sans S Chinese;
    font-weight: 400;
    color: #3b7beb;
    line-height: 24rpx;
  }
  .mess {
    font-size: 28rpx;
    font-family: Noto Sans S Chinese;
    font-weight: 400;
    color: #333333;
    line-height: 29rpx;
    padding: 25rpx 0;
  }
  .price {
    font-size: 32rpx;
    font-family: Noto Sans S Chinese;
    font-weight: bold;
    color: #3b7beb;
    line-height: 35rpx;
  }
}
</style>
