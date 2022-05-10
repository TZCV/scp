<template>
  <view>
    <view class="item">请选择你的发行平台</view>
    <view class="itemText">
      <u-picker
        @cancel="cancel"
        @confirm="confirm"
        :show="show"
        :columns="columns"
        @change="changeHandler"
        ref="upicker"
        class="picker"
      ></u-picker>
      <u-button class="selectBox" @click="show = true">{{
        userInfo.plantform
      }}</u-button>
    </view>
    <view class="item">转赠接收地址（请填写可接收转赠藏品的地址）</view>
    <u--input
      class="itemText"
      border="bottom"
      v-model="userInfo.receiveAddress"
    ></u--input>
    <u-button class="subBtn">登陆/注册</u-button>
  </view>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {
        plantform: '中国',
        receiveAddress: '',
      },
      show: false,
      columns: [
        ['中国', '美国', '日本']
      ],
    }
  },
  methods: {
    changeHandler (e) {
      const {
        columnIndex,
        index,
        // 微信小程序无法将picker实例传出来，只能通过ref操作
        picker = this.$refs.uPicker
      } = e
      if (columnIndex === 0) {
        this.loading = true
        // 模拟网络请求
        uni.$u.sleep(1500).then(() => {
          //picker.setColumnValues(1, this.columns[index])
          this.userInfo.plantform = e.value[0]
          console.log(this.userInfo.plantform)
          this.loading = false
        })
      }
    },
    // 回调参数为包含columnIndex、value、values
    confirm (e) {
      console.log('confirm', e)
      this.show = false
    },
    cancel (e) {
      this.show = false
    }
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
.selectBox {
  border: none;
  border-bottom: 3rpx solid #dddddd;
  font-size: 32rpx;
  font-weight: normal;
  font-family: 'NotoSansHans-Bold';
  text-align: left;
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
</style>
