<template>
  <div class="nopage-wrap">
    <div class="no-page">
      <div class="no-page-contain">
        <img src="../assets/404.png" alt="404">
        <p>很抱歉，页面他不小心迷路了~</p>
        <el-button type="primary" @click="$router.go(-1)">返回首页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
    .nopage-wrap {
      position: relative;
      width: 100%;
      height: 100%;
      background: #c6e6fd;
    }

    .no-page {
      display: block;
      position: absolute;
      top: 30%;
      left: 50%;
      -webkit-transform: translate(-50%,-50%);
      -moz-transform: translate(-50%,-50%);
      -o-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
    }
    .no-page-contain {
      text-align: center;
      img {
        width: 500px;
      }
      p {
        font-size: 15px;
        color: #172435;
      }
    }
</style>
