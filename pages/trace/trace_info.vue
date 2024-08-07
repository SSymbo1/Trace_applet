<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { requestTraceProduct } from "../../js/api";

const traceCode = ref("");
const data = ref({});

const requestTraceDataInfo = async () => {
  try {
    let requestData = await requestTraceProduct(traceCode.value);
    data.value = requestData.data.data;
    uni.showToast({ title: "查询成功!", icon: "success" });
  } catch (err) {
    uni.showToast({ title: "请求错误!", icon: "error" });
  }
};

onLoad((options) => {
  traceCode.value = options.trace;
  requestTraceDataInfo();
});
</script>

<template>
  <view class="container">
    <view class="head">
      <van-card
        style="width: 400rpx"
        :title="data.product.name"
        :thumb="data.product.photo"
        :desc="'追溯码：' + data.trace"
      />
    </view>

    <view class="main">
      <van-divider contentPosition="center">商品基本信息</van-divider>
      <van-cell-group style="width: 100%">
        <van-cell title="生产备案企业" :value="data.product.enterpriseName" />
        <van-cell title="产品备案时间" :value="data.product.productRecord.processTime"/>
        <van-cell title="生产批次号" :value="data.batch" />
        <van-cell title="生产企业编码" :value="data.product.code" />
        <van-cell title="单位" :value="data.product.unit" />
      </van-cell-group>
      <van-divider contentPosition="center">商品追溯信息</van-divider>
      <view class="timeline">
        <view class="timeline-item" v-for="(item,index) in data.traceData" :key="index">
          <view class="timeline-badge">{{index+1}}</view>
          <van-card :title="'经手企业：'+item.enterprise" :desc="'经手时间：'+item.time"/>
        </view>
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
  align-items: center;
}
.header {
  height: 150rpx;
  width: 100%;
}
.main {
  height: 500rpx;
  width: 100%;
}
.footer {
  height: 150rpx;
  width: 100%;
}
.timeline {
  position: relative;
  padding: 20px 0 20px;
  list-style: none;
}
.timeline:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 30rpx;
  width: 2rpx;
  margin-left: -1.5rpx;
  background-color: #eee;
}
.timeline-item {
  position: relative;
  padding-left: 60rpx;
  margin-bottom: 20rpx;
}
.timeline-badge {
  color: #fefeff;
  position: absolute;
  top: 16rpx;
  left: 0;
  width: 50rpx;
  height: 50rpx;
  line-height: 50rpx;
  text-align: center;
  background-color: #1989fa;
  border-radius: 50%;
}
</style>