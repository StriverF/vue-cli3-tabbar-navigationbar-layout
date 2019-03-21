<template>
  <div class="navigation-bar">
    <div class="nav-left-item">
      <button v-show="isShowLeftItem" v-on:click="leftItemClick">
        <li><img v-if="options.leftItem" :src="options.leftItem.icon" /></li>
        <li><span v-if="options.leftItem" v-text="options.leftItem.text"></span></li>
      </button>
    </div>
    <div class="nav-title">
      <strong v-text="options.title"></strong>
      <p v-text="options.subTitle"></p>
    </div>
    <div class="nav-right-item">
      <button v-show="isShowRightItem" v-on:click="rightItemClick">
        <li><img v-if="options.rightItem" :src="options.rightItem.icon" /></li>
        <li><span v-if="options.rightItem" v-text="options.rightItem.text"></span></li>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: {
    options: {
      type: Object,
      default: function () {
        return {
          title: '',
          subTitle: '',
          leftItem: null,
          rightItem: null
        }
      }
    },
    title: {
      type: String,
      default: ''
    },
    sub_title: {
      type: String,
      default: ''
    }
  },
  computed: {
    isShowLeftItem () {
      return this.options.leftItem
    },
    isShowRightItem () {
      return this.options.rightItem
    }
  },
  methods: {
    leftItemClick (e) {
      console.log(e)
      if (this.options.leftItem.path === 'history.back') {
        this.$router.go(-1)
      } else {
        this.$router.push({ path: this.options.leftItem.path })
      }
    },
    rightItemClick (e) {
      console.log(e)
      this.$router.push({ path: this.options.rightItem.path })
    }
  }
}
</script>

<style lang="less" scoped>

.nav-button () {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0); // 去掉手机浏览器上button默认样式
  border: 1px solid transparent;
  outline: none;
  img {
    width: 25px;
    height: 25px;
  }
  pan {
  font-size: 0.8rem;
  }
}
.navigation-bar {
  background-color: #00aaee; //#0398e1
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid #f1f3f2;
  text-align: center;
  z-index: 100;
  .nav-left-item {
    float: left;
    width: 16%;
    height: 100%;
    button { .nav-button() }
  }
  .nav-title {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    float: left;
    width: 68%;
    strong {
      display: block;
      font-size: 18px;
    }
    p {
      font-size: 10px;
    }
  }
  .nav-right-item {
    float: right;
    width: 16%;
    height: 100%;
    button { .nav-button() }
  }
}
</style>
