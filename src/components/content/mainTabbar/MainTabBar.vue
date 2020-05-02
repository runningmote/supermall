<template>
  <tab-bar>
    <tab-bar-item path='/home' activeColor="pink">
      <img slot="tab-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="tab-icon-active" src="~assets/img/tabbar/home-active.svg" alt="">
      <div slot="tab-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/classify" activeColor="pink">
      <img slot="tab-icon" src="~assets/img/tabbar/classify.svg" alt="">
      <img slot="tab-icon-active" src="~assets/img/tabbar/classify-active.svg" alt="">
      <div slot="tab-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopCart" activeColor="pink">
      <img slot="tab-icon" src="~assets/img/tabbar/cart.svg" alt="">
      <img slot="tab-icon-active" src="~assets/img/tabbar/cart-active.svg" alt="">
      <div slot="tab-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="pink">
      <img slot="tab-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="tab-icon-active" src="~assets/img/tabbar/profile-active.svg" alt="">
      <div slot="tab-text">分类</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar.vue"
  import TabBarItem from "components/common/tabbar/TabBarItem.vue"
  export default {
    name:"MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
</style>
