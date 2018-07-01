<template>
  <div class="imgWrap">
    <div class="btn_back"><a @click="back">返回</a></div>
    <img-box :src="imglist"></img-box>
  </div>

</template>
<script>
  import imgBox from '@/components/imgbox';
  export default {
    data(){
      return{
        imglist:"",
      }
    },
    methods:{
      back(){
        history.go(-1);
      }
    },
    components:{imgBox},
    mounted(){
      debugger
     this.imglist=this.$route.query.imgUrl;
    }
  }
</script>
<style lang="less">
  .imgWrap{
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
