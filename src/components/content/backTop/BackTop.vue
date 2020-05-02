<template>
  <div class="back-top">
    <img src="~assets/img/home/backTop.svg" alt="">
  </div>
</template>

<script>
  export default {
    name:"BackTop",
  }
</script>

<style scoped>
  .back-top{
    position: relative;
  }
  img{
    width:35px;

    height:35px;
    position: fixed;
    right:8px;
    bottom:53px;
    border-radius: 50%;
    background-color: #FFFFFF;
  }
</style>
