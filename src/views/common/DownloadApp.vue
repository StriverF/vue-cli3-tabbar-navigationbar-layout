<template>
  <div class="download-app">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'downloadApp',
  components: {},
  created () {
    this.$emit('contentViewChang', {
      navBarOptions: {
        title: '下载App',
        subTitle: '原生App体验更好',
        leftItem: {
          icon: require('../../assets/images/navbar/icon-back2.png'),
          text: '',
          path: 'history.back'
        }
      }
    })
  }
}
</script>

<style lang="less" scoped>
.download-app {
  background-color: cadetblue;
  height: 1000px;
  h1 {
    font-size: 4rem
  }
}
</style>
