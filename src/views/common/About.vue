<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  created () {
    this.$emit('contentViewChang', {
      navBarOptions: {
        title: '关于',
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
.about {
  background-color: cadetblue;
  height: 1000px;
  h1 {
    font-size: 4rem
  }
}
</style>
