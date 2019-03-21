<template>
  <div class="found">
    <h1>This is an Found page</h1>
  </div>
</template>

<script>
export default {
  name: 'found',
  created () {
    this.$emit('contentViewChang', {
      navBarOptions: {
        title: '发现',
        subTitle: '活动信息、中奖名单',
        leftItem: {
          icon: require('../assets/images/navbar/icon-download-app.png'),
          text: 'App',
          path: '/download-app'
        }
      }
    })
  }
}
</script>

<style lang="less" scoped>
.found {
  background-color: cadetblue;
  height: 1000px;
  h1 {
    font-size: 4rem
  }
}
</style>
