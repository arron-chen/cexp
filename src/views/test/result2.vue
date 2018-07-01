<template>
    <div class="imgwrap">
      <imgbox :imgSrc="imgSrc"></imgbox>
      <div class="btn_back"><a @click="back">返回</a></div>
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
      back(){
        history.go(-1);
      }
    },
    mounted(){
      this.imgSrc=this.$route.query.imgSrc;
    }
  }
</script>
<style lang="less">
  .imgwrap{
    width:100%;height:100%;
    .btn_back{
      z-index: 10;
      position: fixed;
      top: 30px;
      left: 30px;
      z-index:10;
      a{
        display: inline-block;
        width: 80px;
        height: 35px;
        line-height: 35px;
        color: #000;
        border: 1px solid #efefef;
        border-radius: 5px;
        text-align: center;
        background: #efefef;
        font-size: 16px;
      }
    }
    img{
      width:100%;height:100%;
    }
  }
</style>
