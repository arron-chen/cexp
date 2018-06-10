<template>
    <div class="imgwrap">
      <imgbox :imgSrc="imgSrc"></imgbox>
    </div>
</template>
<script>
  import imgbox from '@/components/imgbox';
  export default {
    data(){
      return {
        imgSrc:"",

      }
    },
    components:{imgbox},
    methods:{

    },
    mounted(){
      this.imgSrc=this.$route.query.imgSrc;
    }
  }
</script>
<style lang="less">
  .imgwrap{
    width:100%;height:100%;
    img{
      width:100%;height:100%;
    }
  }
</style>
