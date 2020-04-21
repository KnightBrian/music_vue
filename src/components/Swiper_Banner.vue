<template>
  <div class="banner">
    <!-- 轮播图 -->
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img src="../assets/img/b1.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/b2.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/b3.jpg" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// 局部引入Swiper
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper"; //按需导入Swiper组件
import "swiper/css/swiper.css";

export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay:true
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
};
</script>

<style>
</style>
