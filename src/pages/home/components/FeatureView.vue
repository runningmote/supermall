<template>
  <div class="feature">
    <div class="feature-hot">本周热榜</div>
    <div class="feature-item" v-for="(item,index) in keywords" :key="index">
      <a href="https://act.mogujie.com/zzlx67">
        <div>
          <img src="~assets/img/tabbar/classify-active.svg" alt="">
          <div>{{item.words}}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:"FeatureView",
    props:{
      keywords:Array
    }
  }
</script>

<style scoped>
 .feature{
    width:100%;
    padding:10px;
  }
  .feature-hot{
    margin-top:10px;
    font-size:18px;
    font-weight: 600;
    text-align: center;
  }
  .feature-item {
    display: inline-block;
    width:88px;
  }
  .feature-item div{
    text-align: center;
  }
  .feature-item img{
    width:60px;
  }
</style>
