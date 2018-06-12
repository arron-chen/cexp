<template>
    <div class="imgContBox">
      <img v-for="item in imglist" :src="item">
    </div>
</template>
<script>
  export default {
    data(){
      return {}
    },
    props:{
      imglist:{},
    }
  }
</script>
<style lang="less">
    .imgContBox{
      width:100%;height:100%;
      overflow: auto;
      text-align: center;
    }
</style>
