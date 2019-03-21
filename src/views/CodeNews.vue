<template>
  <div class="code-news">
    <h1>This is an Code Ndews page</h1>
  </div>
</template>

<script>
export default {
  name: 'codeNews',
  created () {
    this.$emit('contentViewChang', {
      navBarOptions: {
        title: '码报',
        subTitle: '预测参考信息',
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
.code-news {
  background-color: cadetblue;
  height: 1000px;
  h1 {
    font-size: 4rem
  }
}
</style>
