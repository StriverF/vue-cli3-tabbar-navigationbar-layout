<template>
  <div id="app">
    <navigation-bar :options="navBarOptions"></navigation-bar>
    <router-view class="content-view" @contentViewChang="contentViewChang"></router-view>
    <tab-bar :tabBarList="tabBarList"></tab-bar>
  </div>
</template>

<script>
import NavigationBar from './components/layout/NavigationBar.vue'
import TabBar from './components/layout/TabBar.vue'

export default {
  components: { NavigationBar, TabBar },
  data () {
    return {
      navBarOptions: {},
      tabBarList: [
        {
          text: '好运',
          path: '/',
          normalImg: require('./assets/images/tabbar/icon-good-luck-normal.png'),
          activeImg: require('./assets/images/tabbar/icon-good-luck-active.png')
        },
        {
          text: '码报',
          path: '/code-news',
          normalImg: require('./assets/images/tabbar/icon-code-news-normal.png'),
          activeImg: require('./assets/images/tabbar/icon-code-news-active.png')
        },
        {
          text: '发现',
          path: '/found',
          normalImg: require('./assets/images/tabbar/icon-found-normal.png'),
          activeImg: require('./assets/images/tabbar/icon-found-active.png')
        },
        {
          text: '我的',
          path: '/mine',
          normalImg: require('./assets/images/tabbar/icon-mine-normal.png'),
          activeImg: require('./assets/images/tabbar/icon-mine-active.png')
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    contentViewChang (e) {
      if (e.navBarOptions) {
        this.navBarOptions = e.navBarOptions
      }
      console.log('页面信息', e)
    }
  }
}
</script>

<style lang="less">
html {
  max-width: 767px;
  background-color: #e6e6e6;
}
ul,li,ol{list-style: none;}
img{vertical-align: middle;border: none;}
*{
  padding: 0;
  margin: auto;
  font-style: normal;
  font-size:12px;
  color:#fff;
  text-decoration: none;
  font-weight: normal;
  a{
    &:focus{
      outline: none;
    }
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.content-view {
  width: 100%;
  height: 100%;
  background-color: #e6e6e6;
  margin-top: 4rem;
  margin-bottom: 4rem;
}
</style>
