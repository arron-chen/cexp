<template>
    <image-Cont :imglist="imglist"></image-Cont>
</template>
<script>
  import imageCont from '@/components/imageCont';
  export default {
    data(){
      return{
        imglist:[],
      }
    },
    components:{imageCont}
  }
</script>
<style>
</style>
