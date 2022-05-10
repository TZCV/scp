<template>
  <view class="page">
    <view class="profile">
      <!-- 第一组cell -->
      <u-cell-group>
        <!-- 头像 -->
        <u-cell
          title="用户头像"
          :arrow="false"
          @tap="chooseAvatar"
          class="item"
        >
          <view class="right-icon" slot="right-icon"> </view>
        </u-cell>
        <!-- 昵称 -->
        <u-cell
          title="用户昵称"
          :arrow="true"
          @tap="nickNameChange()"
          class="item"
        >
          <view class="nick-right" slot="right-icon">
            <!-- 编辑状态 -->
            <u-input
              v-if="isEdit"
              class="edit-input"
              input-align="right"
              :focus="true"
              :clearable="false"
              @confirm="inputNameChange()"
            ></u-input>

            <block v-else>
              <view class="nick-right">咸鱼</view>
              <i class="arr-right"></i>
            </block>
          </view>
        </u-cell>
        <!-- 性别 -->
        <u-cell title="性别" class="item" @tap="sexChange()">
          <view class="nick-right" slot="right-icon">
            <view class="nick-right">{{ userInfo.sex }}</view>
            <i class="arr-right"></i>
          </view>
        </u-cell>
      </u-cell-group>
    </view>
    <u-popup mode="bottom" :show="sexPop">
      <view class="text">{{ sex }}</view>
    </u-popup>
  </view>
</template>

<script>

export default {

  data () {
    return {
      isEdit: false,//最初为非编辑状态
      userInfo: {
        sex: '女',
      },
      sexPop: true,
      sex: ['男', '女']

    }
  },
  onLoad () {

  },
  computed: {

  },
  methods: {
    // 修改头像
    chooseAvatar () {

    },
    // 修改性别
    sexChange () {
      console.log('open');
      //点击变成编辑状态
      this.sexPop = true;
      if (!this.sexPop) { //点击后，为false也就是非编辑状态，才发送请求更新数据

      }
    },
    // 获取用户信息
    getUserInfo () {
      userApi.getUserInfo().then(res => {
        if (res.meta.code === '200') {
          let info = res.data.data
          // 上面显示 昵称 与 头像  
          info.nickName = info.nickName ? info.nickName : '默认昵称'
          info.avatar = info.avatar ? info.avatar : '/static/me/avatar.jpeg'
          // 存储到vuex中
          this.changeUserInfoActions(info)
        }
      })
    },
    //更新用户信息请求
    updateProfile (info) {

      tokenApi.createToken().then(res => { //请求到防止重复提交的token的接口后，再请求更新profile
        let params = {
          //比如avatar: this.userInfo[avatar] 就是找到this.userInfo.avatar
          [info]: this.userInfo[info],
          id: this.userInfo.id,
          token: res.data.token
        }
        //console.log(params)
        if (res.meta.code === '200') {
          userApi.updateProfile(params).then(res => {
            if (res.meta.code === '200') {
              //提示更新用户信息成功
              this.$refs.uToast.show({
                title: '更新用户信息成功',
                type: 'success',
                icon: false
              })
              //**刷新vuex中数据 渲染
              this.getUserInfo()
              //console.log(this.userInfo.nickName)
            }
          }).catch(err => {
            this.$refs.uToast.show({
              title: err.meta.msg,
              type: 'error',
              icon: false
            })
          })
        }
      })
    },
    //点击cell框修改昵称
    nickNameChange (nickName) {
      //点击变成编辑状态
      this.isEdit = !this.isEdit
      if (!this.isEdit) { //点击后，为false也就是非编辑状态，才发送请求更新数据
        console.log(this.userInfo.nickName)
        this.updateProfile(nickName)
      }
    },
    //input框点击完成确认修改昵称
    inputNameChange (nickName) {
      this.updateProfile(nickName)
      this.isEdit = false//改为非编辑状态
    },

  },

}
</script>

<style scoped lang="scss">
page {
  background: #f3f3f3;
}
.page {
  background: #fff;
  .item {
    display: flex;
    justify-content: space-between;
    position: relative;
    .nick-right {
      padding-right: 10rpx;
      color: #797979;
      font-size: 30rpx;
    }
    .avatar {
      width: 100rpx;
      height: 100rpx;
    }
  }
  .arr-right {
    display: inline-block;
    width: 20rpx;
    height: 20rpx;
    border-top: 3rpx solid #818181;
    border-right: 3rpx solid #818181;
    transform: rotate(45deg);
    position: absolute;
    right: 30rpx;
    top: 33rpx;
  }
}
</style>
