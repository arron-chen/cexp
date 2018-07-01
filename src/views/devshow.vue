<template>
  <div class="showWrap">
    <image-Cont :imglist="imglist"></image-Cont>
    <div class="btn_back"><a @click="back">返回</a></div>
  </div>

</template>
<script>
  import imageCont from '@/components/imageCont';
  export default {
    data(){
      return{
        imglist:{},
      }
    },
    components:{imageCont},
    methods:{
      back(){
        history.go(-1);
      }
    },
    mounted(){
      debugger
     this.imglist=this.$route.query;
    }
  }
</script>
<style lang="less">
  .showWrap{
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
  }
</style>
