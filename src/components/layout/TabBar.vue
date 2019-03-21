<template>
  <div class='tab-bar' :class="[showTabbar?'tabbar-show':'tabbar-hide']" ref='myTabBar' v-show="animationendIsShow">
    <tab-ber-item
      v-for='item in tabBarList'
      :key='item.path'
      :item='item'
      :current='current'
      @chang='getPath'
    ></tab-ber-item>
  </div>
</template>

<script>
import TabBerItem from './TabBarItem.vue'
export default {
  name: 'TabBar',
  props: {
    tabBarList: Array
  },
  data () {
    return {
      current: this.$route.path,
      animationendIsShow: true // 动画结束后是否显示
    }
  },
  watch: {
    $route (to, from) {
      this.animationendIsShow = true
    }
  },
  components: { TabBerItem },
  mounted () {
    let _this = this
    this.$refs.myTabBar.addEventListener('animationend', function (e) {
      // console.log('log at end of monkey animation')
      _this.animationendIsShow = _this.showTabbar
    }, false)
  },
  methods: {
    getPath (path) {
      this.current = path
    }
  },
  computed: {
    showTabbar () {
      let isShow = false
      this.tabBarList.forEach(element => {
        if (this.$route.path === element.path) {
          isShow = true
        }
      })
      return isShow
    }
  }
}
</script>

<style lang='less' scoped>
.tab-bar {
  background-color: white;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  border-top: 1px solid #f1f3f2;
}
.tabbar-show {
  animation: tabbar-show 0.5s ease;
}
.tabbar-hide {
  animation: tabbar-hide 0.5s ease;
}
@keyframes tabbar-show {
  0% {
    bottom: -4rem;
    opacity: 0;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
}
@keyframes tabbar-hide {
  0% {
    bottom: 0;
    opacity: 1;
  }
  100% {
    bottom: -4rem;
    opacity: 0;
  }
}
</style>
