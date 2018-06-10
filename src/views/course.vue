<template>
  <div class="coursewrap">
    <div class="backto"><img src="http://p9zd0n0di.bkt.clouddn.com/video/backto.png" @click="backto"></div>
    <div class="videoBox">
      <div class="cvideocont_l">
        <video src="http://7xnt3p.com1.z0.glb.clouddn.com/Willwork.mp4" controls="controls">
          您的浏览器不支持 video 标签。
        </video>
      </div>
      <div class="cvideocont_r">
        <ul class="r_list">
          <li @click="handleClickItem"><span>英语</span>      <a href='#' target="_blank"> </a> </li>
          <li><span>法语</span></li>
          <li><span>德语</span></li>
          <li><span>韩文</span></li>
          <li><span>日文</span></li>
          <li><span>俄罗斯</span></li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    data(){
      return{
        preimages:'http://p9zd0n0di.bkt.clouddn.com/video/playicon.png'

      }
    },
    methods:{
      backto(){
        this.$router.push({
          path:'/index'
        })
      },
      handleClickItem(){
      }
    },
    mounted(){


    }
  }
</script>
<style lang="less">
  .coursewrap{
    width:100%;
    height:100%;
    background: url('http://p9zd0n0di.bkt.clouddn.com/nation/nation_bg.jpg')no-repeat center center;
    background-size: 100% 100%;
    min-width: 860px;
    min-height: 650px;
    .backto{
      position:absolute;
      left:50px;
      top:45px;
      width:80px;height:35px;
      cursor: pointer;
      img{
        width:80px;height:35px;
      }
    }
    .videoBox{
      width:93%;
      height:60%;
      position:absolute;
      left:50%;
      top:50%;
      transform: translate(-50%,-50%);
      text-align: center;

      .cvideocont_l{
        float:right;
        width:66%;
        height:100%;
        border:1px solid #000;margin-right:10px;
        background:url("http://p9zd0n0di.bkt.clouddn.com/video/playicon.png") no-repeat center center #000;
        background-size:70px 70px;
        cursor: pointer;
        video{
          width:100%;
          height: 100%;
        }
      }
      .cvideocont_r{
        float:left;width:30%;
        height:100%;
        position: relative;
        .r_title{
          width:100%;height:40px;
          border-bottom:2px solid #368cf8;
          span{
            color:#ffffff;
            font-size:14px;
          }
        }
        .r_list{
          list-style: none;
          text-align: center;
          height:100px;
          position: absolute;
          bottom:20px;
          margin-left: 20%;
          min-width:315px;
          li{
            width:30px;height:100%;
            float:left;
            margin-right:4%;
            vertical-align: middle;
            span{
              display: inline-block;
              width:100%;height:100%;
              padding-top: 25px;
              cursor: pointer;
              border:2px solid #808080;
              border-radius:4px;
              color:#0d3d6c;
              font-size:18px;
            }
          }
        }
      }
    }
  }
</style>
