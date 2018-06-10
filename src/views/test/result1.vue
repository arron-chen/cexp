<template>
    <div class="resultwrap">
     <div class="result_tit">
       <a>{{title}}</a>
     </div>
      <div class="result_cont"><img :src="resultsrc"></div>
    </div>
</template>
<script>
    export default {
      data() {
          return {
            title:'',
            resultsrc:''
          }
      },
      props:{

      },
      mounted(){
        this.title=this.$route.query.resulttitle;
        this.resultsrc=this.$route.query.resultSrc;
      }
    }
</script>
<style lang="less">
  .resultwrap{
    width:100%;height:100%;
    background: url("http://p9zd0n0di.bkt.clouddn.com/test/result_bg.png")no-repeat center center;
    background-size: 100% 100%;
    padding:10% 10% 6% 10%;
    .result_tit{
      width:70%;
      height:70px;
      line-height: 70px;
      background-color: #c1272d;
      border-radius:30px;
      text-align: center;
      position: relative;
      left:10%;
        a{
          font-size:28px;color:#fff;
        }
    }
    .result_cont{
      width:70%;
      height:60%;
      margin:10% 0 0 15%;
      img{
        width:100%;height:100%;
      }
      /*background: url("http://p9zd0n0di.bkt.clouddn.com/test/echart1.png") no-repeat center center;
      background-size: 100% 100%;*/
    }
  }
</style>
