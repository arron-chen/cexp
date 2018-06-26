<template>
    <img :src="imgSrc" class="imgBox">
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    props:{
      imgSrc:{
        type:String
      }
    }
  }
</script>
<style lang="less">
  .imgBox{
    width:100%;height:100%;
  }
</style>
