<template>
  <div class="wraper" ref="wraper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name:"Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      }
    },
    
    data(){
      return {
        scroll:null
      }
    },
    mounted(){

      this.scroll = new BScroll(this.$refs.wraper,{
        probeType:this.probeType,
        // pullUpLoad:true,
        click:true,
      })
      this.scroll.on("scroll",(position) => {
        // console.log(position)
        this.$emit("scroll",position)
      })
      // this.scroll.on("fullingUp",() => {
      //   console.log("上拉加载更多")
      // })
    },
    methods:{
      scrollTo(x,y,time=1000){
        this.scroll.scrollTo(x,y,time)
      }
    }
  }

</script>

<style scoped>
</style>
