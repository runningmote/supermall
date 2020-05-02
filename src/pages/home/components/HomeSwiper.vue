<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item,index) in banners" :key="index">
          <a :href="item.link">
            <img class="swiper-img" :src="item.image" alt="">
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
  export default {
    name:"HomeSwiper",
    data(){
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            loop: true
          },
          autoplay:{
            delay:3000
          }
          // Some Swiper option/callback...
        }
      }
    },
    props:{
      banners:Array
    }
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    width:100%;
    justify-content: space-around;
    box-shadow: 0 1px 1px rgba(100,100,100,.3);
  }
  .swiper-img {
    width: 100%;
  }
</style>
