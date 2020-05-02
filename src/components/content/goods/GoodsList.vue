<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem.vue"
  export default {
    name:"GoodsList",
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {

      }
    },
    components:{
      GoodsListItem
    }
  }
</script>

<style scoped>
  .goods-list{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top:10px;
    padding:2px;
    margin-bottom:49px;
  }
</style>
