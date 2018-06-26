<template>
    <img-box :src="imglist"></img-box>
</template>
<script>
  import imgBox from '@/components/imgbox';
  export default {
    data(){
      return{
        imglist:"",
      }
    },
    components:{imgBox},
    mounted(){
      debugger
     this.imglist=this.$route.query.imgUrl;
    }
  }
</script>
<style>
</style>
