<template>
  <view>
    <view class="title">登陆/注册</view>
    <u--form labelPosition="left" :model="model1" ref="form1">
      <view class="item">手机号码</view>
      <u--input
        class="itemText"
        v-model="model1.userInfo.phone"
        placeholder="请输入手机号"
        border="bottom"
        type="number"
      ></u--input>
      <view class="item">验证码</view>
      <u--input
        class="itemText"
        v-model="model1.userInfo.code"
        border="bottom"
      ></u--input>
    </u--form>
    <view class="wrap">
      <u-toast ref="uToast"></u-toast>
      <u-code
        :seconds="seconds"
        @end="end"
        @start="start"
        ref="uCode"
        @change="codeChange"
      ></u-code>
      <u-button @tap="getCode" class="getcode">{{ tips }}</u-button>
      <u-button text="登陆/注册" class="loginBtn"></u-button>
      <u-checkbox-group
        v-model="checkboxValue1"
        placement="row"
        @change="checkboxChange"
      >
        <u-checkbox class="checkBtn" shape="circle" size="38"> </u-checkbox
        ><span class="description"
          >我确认已年满18周岁、且认真阅读并同意接受<span class="link"
            >《服务条款》</span
          >和<span class="link">《隐私条款》</span></span
        >
      </u-checkbox-group>
    </view>
    <u-action-sheet> </u-action-sheet>
  </view>
</template>

<script>
export default {
  data () {
    return {
      checkboxValue1: [],
      model1: {
        userInfo: {
          phone: '',
          code: '',
        },
      },
      tips: '',
      // refCode: null,
      seconds: 30,
    };
  },
  methods: {
    codeChange (text) {
      this.tips = text;
    },
    getCode () {
      if (this.$refs.uCode.canGetCode) {
        // 模拟向后端请求验证码
        uni.showLoading({
          title: '正在获取验证码'
        })
        setTimeout(() => {
          uni.hideLoading();
          // 这里此提示会被this.start()方法中的提示覆盖
          uni.$u.toast('验证码已发送');
          // 通知验证码组件内部开始倒计时
          this.$refs.uCode.start();
        }, 2000);
      } else {
        uni.$u.toast('倒计时结束后再发送');
      }
    },
    end () {
      uni.$u.toast('倒计时结束');
    },
    start () {
      uni.$u.toast('倒计时开始');
    }
  },
  checkboxChange (n) {
    console.log('change', n);
  }
}
</script>

<style lang="scss">
.title {
  font-size: 48rpx;
  font-weight: bold;
  font-family: 'NotoSansHans-Bold';
  padding-left: 51rpx;
  padding-top: 50rpx;
  padding-bottom: 54rpx;
}
.item {
  font-size: 32rpx;
  font-weight: normal;
  font-family: 'NotoSansHans-Bold';
  padding-left: 51rpx;
  padding-top: 54rpx;
}
.itemText {
  margin: 0 50rpx;
}
.getcode {
  width: 220rpx;
  border: none;
  color: #3b7beb;
  font-size: 32rpx;
  font-weight: normal;
  font-family: 'NotoSansHans-Bold';
  position: absolute;
  top: 415rpx;
  right: 10rpx;
}
.loginBtn {
  font-size: 38rpx;
  font-weight: bold;
  font-family: 'NotoSansHans-Bold';
  color: #ffffff;
  background-color: #3b7beb;
  border-radius: 50rpx;
  margin: 50rpx;
  width: 650rpx;
  height: 100rpx;
}
.checkBtn {
  margin-left: 79rpx;
}
.description {
  font-size: 24rpx;
  font-weight: normal;
  font-family: 'NotoSansHans-Bold';
  color: #999999;
  margin-right: 100rpx;
}
.description .link {
  color: #3b7beb;
}
</style>
