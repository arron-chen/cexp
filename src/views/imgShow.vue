<template>
  <div class="imgWrap">
    <div class="btn_back"><a @click="back">返回</a></div>
    <img-box :src="imglist"></img-box>
    <!--<iframe id="resId" :src="resUrl" ></iframe>-->
  </div>

</template>
<script>
  import imgBox from '@/components/imgbox';
  export default {
    data(){
      return{
        imglist:"",
        resUrl:''
      }
    },
    methods:{
      back(){
        history.go(-1);
      }
    },
    components:{imgBox},
    created(){
      this.imglist=this.$route.query.url;
     /* this.resUrl=this.$route.query.url;*/
    },
    mounted(){
     /* var iframe = document.getElementById("resId");
      var iwindow = iframe.contentWindow;
      var idoc = iwindow.document;
      idoc.body.className= "bodyClass"
      console.log("window",iwindow);//获取iframe的window对象
      console.log("document",idoc); //获取iframe的document
      console.log("html",idoc.documentElement);//获取iframe的html
      console.log("head",idoc.head); //获取head
      console.log("body",idoc.body); //获取body*/
    }
  }
</script>
<style lang="less">
  .bodyClass{
    width:100%;height:100%;
    background-color: #358cf6;
    img{
      width:100%;height:100%;
    }
  }
  .imgWrap{
    width:100%;height:100%;
    iframe{
      width:100%;
      height:100%;
      border:none;

      html,body{
        width:100%;height:100%;
        img{
          width:100%;height:100%;
        }
      }
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
