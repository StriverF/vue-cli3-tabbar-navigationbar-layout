<template>
  <div class="tab-ber-item" @click="handleChang" :class="[current === item.path ? 'active' : '']">
    <span v-show="!imgShow">
      <img :src="item.normalImg" alt>
    </span>
    <span v-show="imgShow">
      <img :src="item.activeImg" alt>
    </span>
    <strong v-text="item.text"></strong>
  </div>
</template>

<script>
export default {
  name: 'TabberItem',
  props: {
    item: {
      type: Object,
      default: function () {
        return {
          text: '',
          path: '',
          activeImg: '',
          normalImg: ''
        }
      }
    },
    current: {
      type: String,
      default: ''
    }
  },
  mounted () {
  },
  methods: {
    handleChang () {
      this.$router.push(this.item.path)
      this.$emit('chang', this.item.path)
    }
  },
  computed: {
    imgShow () {
      return this.current === this.item.path
    }
  }
}
</script>

<style rel="stylesheet" lang="less">
.tab-ber-item {
  text-align: center;
  padding-top: 0.4rem;
  width: 100%;
  span {
    margin: 0 auto;
    width: 2rem;
    height: 2rem;
    overflow: hidden;
    display: block;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  strong {
    line-height: 1.6;
    font-size: 1rem;
    color: #2c2c2c;
  }
  &.active {
    strong {
      color: #00aaee;
    }
  }
}
</style>
