<template>
  <div class="mine">
   <h1>This is an Mine page</h1>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {},
  created () {
    this.$emit('contentViewChang', {
      navBarOptions: {
        title: '我的',
        subTitle: '金币、订单、个人信息',
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
.mine {
  background-color: cadetblue;
  height: 1000px;
  h1 {
    font-size: 4rem
  }
}
</style>
