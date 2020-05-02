<template>
  <div class="goods-list-item">
    <img :src="goodsItem.show.img" alt="">
    <div class="title">
      <p>{{goodsItem.title}}</p>
      <span class="money">{{goodsItem.orgPrice}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:"GoodsListItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-list-item{
    width:49%;
    height:49%;
    display: flex;
    flex-direction: column;

  }
  .goods-list-item img{
    width:100%;
    border-radius:5px;
    
    text-align:center;
  }
  .title{
    text-align: center;
    margin-bottom:5px;
  }
  .title p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin:3px;
    margin-top:5px;
    font-size:15px;
    color:#666;
  }
  .title .money{
    color:#ff0000;
    margin-right:30px;
  }
  .title .collect{
    position: relative;
  }
  .title .collect::before{
    content: "";
    position: absolute;
    left:-35px;
    top:2px;
    width:14px;
    height:14px;
    margin-left:20px;
    background:url("~assets/img/home/xing.svg") 0 0/14px 14px;
  }
</style>
