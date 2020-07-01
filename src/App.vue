<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  /*background: url(assets/bg1.jpg) center !important;
    background-size: cover;*/
  // background: #1F2D3D;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;

  input.el-input__inner:invalid {
    box-shadow: none;
    -moz-box-shadow: none;
    outline: none;
  }
}

#app {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}

.el-submenu [class^=fa] {
  vertical-align: baseline;
  margin-right: 10px;
}

.el-menu-item [class^=fa] {
  vertical-align: baseline;
  margin-right: 10px;
}

.toolbar {
  background: #f2f2f2;
  padding: 10px;
  //border:1px solid #dfe6ec;
  margin: 10px 0px;
  .el-form-item {
    margin-bottom: 10px;
  }
}

.el-submenu__title {
  padding: 0 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.search-select,.search-select-mode {
  vertical-align: top;

  /*.el-select__tags {
    white-space: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;

    span:nth-child(1) {
      position: relative;
      overflow: auto;

      &::-webkit-scrollbar {
          width: 0px;
          height: 0px;
      }
    }
  }*/
}

.el-select.search-select {
  width: 315px;
}

input:invalid, input:focus:invalid, input:blur:invalid {
    box-shadow: none;
    -moz-box-shadow: none;
    outline: none;
}

.el-table tbody {
  color: #333;
}
</style>
