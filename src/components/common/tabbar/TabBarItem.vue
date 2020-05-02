<template>
    <div class="tab-bar-item" @click="clickItem">
      <div v-if="!isActive"><slot name="tab-icon"></slot></div>
      <div v-else><slot name="tab-icon-active"></slot></div>
      <div :style="styleColor"><slot name="tab-text"></slot></div>
    </div>
</template>

<script>
  export default {
    name:"TabBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:"red"
      }
    },
    data(){
      return{
        // isActive:true
      }
    },
    computed:{
      // clickItem(){
      //   return this.$route.path !==-1
      // }
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      styleColor(){
        return this.isActive ? {color:this.activeColor}:{}
      }
    },
    methods:{
      clickItem(){
        this.$router.push(this.path).catch(err =>err)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex:1;
    text-align:center;
    height:49px;
    font-size:12px;
  }
  .tab-bar-item img{
    width:24px;
    height:24px;
    vertical-align: middle;
    margin:3px 0 2px 0;
    text-align: center;
  }
</style>
