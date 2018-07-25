<template>
  <div class="showWrap">
    <count></count>
    <img v-for="(img,index) in imgurl"
         v-preview="img.url"
         :src="img.url"
         :key="index"
         preview-title-enable="true"
         preview-nav-enable="true">
    <div class="btn_back"><a @click="back">返回</a></div>
  </div>

</template>
<script>
  import imageCont from '@/components/imageCont';
  import count from '../components/count';
  export default {
    data(){
      return{
        imglist:{},
        imgurl:[],
      }
    },
    components:{imageCont,count},
    methods:{
      back(){
        history.go(-1);
      }
    },
    mounted(){
      let res = this.$route.query;
      for(let i in res){
        this.imgurl.push({"url":res[i]});
      }
     //this.imglist=this.$route.query;
    }
  }
</script>
<style lang="less">
  .showWrap{
    width:100%;height:100%;
    img{
      width:100%;height:100%;
    }
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
