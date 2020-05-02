<template>
  <div id="home">
      <nav-bar class="home-bar"><div slot="center">购物街</div></nav-bar>
      <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
        <home-swiper :banners="banners"></home-swiper>
        <recommend :recommend="recommends" />
        <feature-view :keywords="keywords"></feature-view>
        <tab-control
          class="tab-control"
          :titles="['流行','新款','精选']"
          @tabClick="handleClick"
          ></tab-control>
        <goods-list :goods="showGoods"></goods-list>

      </scroll>
      <back-top @click.native="backTop" v-show="isShowTop"></back-top>
  </div>
</template>

<script>
  import axios from "axios"
  import HomeSwiper from "./components/HomeSwiper.vue"
  import Recommend from "./components/Recommend.vue"
  import FeatureView from "./components/FeatureView.vue"
  import GoodsList from "components/content/goods/GoodsList.vue"

  import NavBar from "components/common/navbar/NavBar"
  import TabControl from "components/content/tabControl/TabControl.vue"
  import Scroll from "components/common/scroll/Scroll.vue"
  import BackTop from "components/content/backTop/BackTop.vue"

  import {getMultidata} from "network/home"
  export default {
    name:"Home",
    data(){
      return {
        banners:[],
        recommends:[],
        keywords:[],
        goods:{
          "pop":{page:0,list:[]},
          "new":{page:0,list:[]},
          "sell":{page:0,list:[]}
        },
        currentType:"pop",
        isShowTop:false
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
		components:{
      NavBar,
      HomeSwiper,
      Recommend,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
		},
    created(){
      this.getMultidataList()
      this.goodsData("pop")
      this.goodsData("new")
      this.goodsData("sell")
    },
    methods:{


      /**
       * 方法相关的请求
       */
      handleClick(index){
        // console.log(index)
        switch(index){
          case 0:
            this.currentType = "pop"
            break
          case 1:
            this.currentType = "new"
            break
          case 2:
            this.currentType = "sell"
            break
        }
        console.log(this.currentType)
      },

      backTop(){
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position){
        this.isShowTop = (-position.y) > 1000
      },
      /**
       * 网络相关的请求
       */
      getMultidataList(){
        getMultidata().then( res => {
          const data = res.data;
          // console.log(data)
          this.banners = data.banner.list
          this.recommends = data.recommend.list
          this.keywords = data.keywords.list
          // console.log(this.keywords)
        }).catch(err => {
          console.log(err)
        })
      },
      goodsData(type){
        const page = this.goods[type].page + 1
        axios({url:"http://localhost:3000/data"},type,page).then( res => {
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
          console.log(res)
        }).catch( err => {
          console.log(err)
        })
      }

    }
  }
</script>

<style scoped>
  #home{
    padding-top:44px;
    height:100vh;
    position: relative;
  }
  .home-bar{
    width:100%;
    background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    left:0;
    right:0;
    top:0;
    z-index:9;
  }
  .tab-control{
    position: sticky;
    top:44px;
    background-color: #FFFFFF;
  }
  /* .content{
    position: absolute;
    top:44px;
    bottom:49px;
    left:0;
    right:0;
  } */
  .content{
    height:calc(100vh - 93px);
    overflow:hidden;
  }
</style>
