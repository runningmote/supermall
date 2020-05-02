<template>
  <div class="tab-control">
    <div class="control-item"
      v-for="(item,index) in titles"
      :key="index"
      @click="itemClick(index)"
    >
      <span :class="{active:currentIndex === index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:"TabControl",
    props:{
      titles:Array
    },
    data(){
      return {
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        this.$emit("tabClick",index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    width:100%;
    display: flex;
    text-align: center;
  }
  .control-item{
    flex:1;
    height:40px;
    line-height:40px;
  }
  .control-item span{
    padding:5px;
  }
  .active{
    color:pink;
    border-bottom:3px solid pink;
  }
</style>
