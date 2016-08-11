<template>
  <div id="app">
    <cov-navigator></cov-navigator>
    <cov-loading></cov-loading>
    <!-- 缓存一级路由切换的页面 -->
    <router-view keep-alive></router-view>
  </div>
</template>

<script>

//通用组件
import {
  navigator,
  loading
} from '../components/index'

export default {
  components: {
    CovNavigator:navigator,
    CovLoading:loading
  }
}
</script>

<style src="../assets/styles/base.css"></style>
<style>
body {
    font-family: "Helvetica Neue", "PingFang SC", "Microsoft Yahei", 微软雅黑, STXihei, 华文细黑, sans-serif;
}
</style>
