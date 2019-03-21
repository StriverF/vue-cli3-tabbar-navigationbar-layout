<template>
  <div class="hple">
    <h1>This is an Hple page</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  created () {
    this.$emit('contentViewChang', {
      navBarOptions: {
        title: '帮助中心',
        subTitle: '',
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
.hple {
  background-color: cadetblue;
  height: 1000px;
  h1 {
    font-size: 4rem
  }
}
</style>
