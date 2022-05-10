<template>
  <view>
    <img src="../../images/banner-1.png" style="width: 750rpx" />
    <view class="search">
      <u--input
        class="itemText"
        placeholder="请输入关键字搜索"
        prefixIcon="search"
        prefixIconStyle="font-size: 22px;color: #909399"
        @confirm="confirm"
      ></u--input>
    </view>
    <view class="h2-tit">数字藏品发售平台</view>
    <view class="show">
      <view class="item">
        <img />
        <view>斑马中国</view>
      </view>
      <view class="item">
        <img />
        <view>斑马中国</view>
      </view>
      <view class="item">
        <img />
        <view>斑马中国</view>
      </view>
      <view class="item">
        <img />
        <view>斑马中国</view>
      </view>
      <view class="item">
        <img />
        <view>斑马中国</view>
      </view>
      <view class="item">
        <img />
        <view>斑马中国</view>
      </view>
      <view class="item">
        <img />
        <view>斑马中国</view>
      </view>
      <view class="item">
        <img />
        <view>斑马中国</view>
      </view>
      <view class="item">
        <img />
        <view>斑马中国</view>
      </view>
      <view class="item">
        <img />
        <view>斑马中国</view>
      </view>
    </view>
    <view class="h2-tit">NFT一览</view>
    <view class="condition">
      <view class="c1">价格<img src="../../images/up.png" /></view>
      <view class="c1 on">发布时间<img src="../../images/up-on.png" /></view>
      <view class="filter" @click="open"
        >筛选<img src="../../images/filter.png"
      /></view>
    </view>
    <u-popup
      mode="bottom"
      :round="30"
      :show="show"
      @close="close"
      @open="open"
      :closeOnClickOverlay="true"
    >
      <view class="pop">
        <view class="pop-title">全部筛选</view>
        <view class="pop-tit2">价格区间</view>
        <view class="price-area">
          <u--input
            class="priceText"
            inputAlign="center"
            type="number"
            placeholder="最低价"
          ></u--input>
          -
          <u--input
            class="priceText"
            inputAlign="center"
            type="number"
            placeholder="最高价"
          ></u--input>
        </view>
        <view class="pop-tit2">发布时间</view>
        <view class="publish">
          <button :class="{ on: btnOn == 1 }" @click="choose(1)">1天内</button>
          <button :class="{ on: btnOn == 7 }" @click="choose(7)">7天内</button>
          <button :class="{ on: btnOn == 14 }" @click="choose(14)">
            14天内
          </button>
        </view>
        <view class="pop-tit2">是否预售</view>
        <view class="publish">
          <button :class="{ on: isFirst == 0 }" @click="chooseIs(0)">
            全部
          </button>
          <button :class="{ on: isFirst == 1 }" @click="chooseIs(1)">
            预售
          </button>
          <button :class="{ on: isFirst == 2 }" @click="chooseIs(2)">
            非预售
          </button>
        </view>
        <view class="btns"
          ><button @click="close" class="btn cancelBtn">重置</button
          ><button class="btn sureBtn">确定</button></view
        >
      </view>
    </u-popup>
    <view class="list">
      <cpBox></cpBox>
      <cpBox></cpBox>
      <cpBox></cpBox>
      <cpBox></cpBox>
    </view>
    <!-- 底部导航 -->
    <tabBar></tabBar>
  </view>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      btnOn: 0,
      isFirst: 3
    }
  },
  methods: {
    confirm (e) {
      //触发搜索
      console.log(e)
    },
    open () {
      this.show = true
    },
    close () {
      this.show = false
    },
    choose (i) {
      this.btnOn = i
    },
    chooseIs (i) {
      this.isFirst = i
    }
  }
}
</script>

<style lang="scss">
.pop {
  width: 100%;
  font-size: 28rpx;
  font-family: 'Noto Sans S Chinese';
  padding-left: 20rpx;
  padding-bottom: 55rpx;
  text-align: center;
  .pop-title {
    font-size: 32rpx;
    font-weight: bold;
    margin: 32px 0;
  }
  .pop-tit2 {
    font-size: 32rpx;
    text-align: left;
    margin: 30rpx 0;
  }
  .price-area {
    display: flex;
    padding-bottom: 20rpx;
    .priceText {
      width: 160rpx;
      height: 72rpx;
      background: #eeeeee;
      border-radius: 36rpx;
      text-align: center;
    }
  }
  .publish {
    display: flex;
    padding-bottom: 20rpx;
    button {
      border-radius: 36rpx;
      width: 220rpx;
      height: 72rpx;
      line-height: 72rpx;
      background: #eeeeee;
    }
    .on {
      color: #3b7beb;
      border: 1rpx solid #3b7beb;
    }
  }
  .btns {
    display: flex;
    margin-top: 30rpx;
    .btn {
      width: 330rpx;
      height: 88rpx;
      font-size: 36rpx;
      border-radius: 44rpx;
    }
    .cancelBtn {
      color: #3b7beb;
      border-color: #3b7beb;
    }
    .sureBtn {
      background-color: #3b7beb;
      color: #eeeeee;
    }
  }
}
.search {
  display: flex;
  width: 710rpx;
  height: 80rpx;
  margin-left: 25rpx;
  margin-top: 20rpx;
  .itemText {
    padding-left: 105rpx;
  }
}
.h2-tit {
  font-size: 32rpx;
  font-family: 'Noto Sans S Chinese';
  font-weight: bold;
  color: #3b7beb;
  margin: 36rpx 0;
  margin-left: 20rpx;
}
.show {
  display: flex;
  flex-wrap: wrap;
  font-size: 20rpx;
  font-family: 'Noto Sans S Chinese';
  .item {
    width: 120rpx;
    text-align: center;
    margin-left: 25rpx;
    padding-bottom: 20rpx;
    img {
      width: 120rpx;
      height: 120rpx;
      background: #dddddd;
    }
  }
}
.condition {
  display: flex;
  padding-left: 20rpx;
  padding-bottom: 20rpx;
  line-height: 20rpx;
  .c1 {
    padding-right: 30rpx;
    img {
      margin-left: 10rpx;
      height: 20rpx;
    }
  }
  .on {
    color: #3b7beb;
  }
  .filter {
    position: absolute;
    right: 35rpx;
    img {
      height: 20rpx;
      margin-left: 10rpx;
    }
  }
}
.list {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 150rpx;
  .item {
    margin-left: 20rpx;
  }
}
</style>
