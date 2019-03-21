<template>
  <div class='home'>
    <!-- swiper -->
    <swiper :options='swiperOption' ref='mySwiper'>
      <swiper-slide v-for='banner in banners' :key='banner.name' :data-url='banner.url'>
        <img :src='banner.image'>
      </swiper-slide>
      <div class='swiper-pagination swiper-pagination-white' slot='pagination'></div>
    </swiper>
    <div class='items-box'></div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'home',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        preventLinksPropagation: true,
        on: {
          click: this.swiperOnClick
        }
      },
      banners: [
        {
          image:
            'https://img.ppwebstatic.com/origin/event/5c8f17d75c297.jpg/750x400',
          name: 'banner1',
          url: '/about'
        },
        {
          image:
            'https://img.ppwebstatic.com/origin/event/5c88640860bd2.jpg/750x400',
          name: 'banner2',
          url: '/about'
        },
        {
          image:
            'https://img.ppwebstatic.com/origin/event/5c8b3357630c3.jpg/750x400',
          name: 'banner3',
          url: '/about'
        }
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  created () {
    this.$emit('contentViewChang', {
      navBarOptions: {
        title: '好运',
        subTitle: '',
        leftItem: {
          icon: require('../assets/images/navbar/icon-download-app.png'),
          text: 'App',
          path: '/download-app'
        },
        rightItem: {
          icon: require('../assets/images/navbar/icon-hple-center.png'),
          text: '帮助',
          path: '/hple'
        }
      }
    })
  },
  mounted () {
    console.log('this is current swiper instance object', this.swiper)
    // this.swiper.on('')
    // this.swiper.slideTo(6, 1000, false)
  },
  methods: {
    swiperOnClick (event) {
      let clickUrl = this.swiper.clickedSlide.getAttribute('data-url')
      console.log(clickUrl)
      this.$router.push({ path: clickUrl })
    }
  }
}
</script>

<style lang='less'>
.home {
  .swiper-container {
    height: 200px;
    background-color: #8a8a8a;
  }
}
.swiper-slide img {
  width: 100%;
  height: 100%;
  display: block;
}
.items-box {
  margin-top: 12px;
  height: 300px;
  margin-bottom: 12px;
  background-color: #fff;
}
</style>
