<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" class="img-item">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:"Recommend",
    props:{
      recommend:Array
    },
    data(){
      return {

      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    width:100%;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0 20px;
    border-bottom:10px solid #eee;
  }
  .img-item{
    width: 70px;
    height:70px;
    margin-bottom:8px;
  }
</style>
