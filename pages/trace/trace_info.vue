<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";

const traceCode = ref("");
const data = ref({});

const requestTraceDataInfo = () => {
    console.log(traceCode.value);
    uni.showToast({ title: traceCode.value });
};

onLoad((options) => {
  traceCode.value = options.trace;
  requestTraceDataInfo()
});
</script>

<template>
  <view class="container">
    <view class="head"> </view>

    <view class="main"> </view>

    <view class="footer"> </view>
  </view>
</template>

<style scoped>
</style>