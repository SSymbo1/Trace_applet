<script setup>
const openQrScanner = () => {
  uni.scanCode({
    scanType: ["qrCode"],
    success: (resp) => {
      onScanQrCodeSuccess(resp);
    },
    fail: (err) => {
      uni.showToast({ title: "无效的二维码", icon: "error" });
    },
  });
};

const onScanQrCodeSuccess = (data) => {
  let regex = /^trace-/;
  if (regex.test(data.result)) {
    uni.vibrateShort();
    uni.navigateTo({
      url: `/pages/trace/trace_info?trace=${data.result}`,
    });
  } else {
    uni.showToast({ title: "无效的二维码", icon: "error" });
  }
};
</script>

<template>
  <view class="container">
    <view class="header">
      <view class="welcome-label">
        <van-image src="../../static/image/vite.png" width="50" height="50" />
        <text style="margin-left: 15rpx; font-weight: bold; font-size: large">
          重要产品溯源系统
        </text>
      </view>
    </view>

    <view class="main">
      <view class="button-container">
        <view class="scanner-button" @click="openQrScanner">
          <van-image
            src="../../static/image/IcRoundQrcode.png"
            width="80"
            height="80"
          />
        </view>
        <text style="font-weight: lighter"> 点击扫面追溯二维码 </text>
      </view>
    </view>

    <view class="footer"> </view>
  </view>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.welcome-label {
  display: flex;
  align-items: center;
}
.button-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 280rpx;
  height: 400rpx;
}
.scanner-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #07c160;
  width: 280rpx;
  height: 280rpx;
  border-radius: 50%;
  transition: background-color 0.3s;
}
.scanner-button:active {
  background-color: rgba(0, 0, 0, 0.5);
}
.header {
  height: 150rpx;
  width: 100%;
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.footer {
  height: 150rpx;
  width: 100%;
}
</style>
