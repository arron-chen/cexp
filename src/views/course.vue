<template>
  <div class="coursewrap">
    <div class="backto"><img src="http://p9zd0n0di.bkt.clouddn.com/video/backto.png" @click="backto"></div>
    <div class="videoBox">
      <div class="cvideocont_l">
        <video src="http://7xnt3p.com1.z0.glb.clouddn.com/%E5%A4%A9%E8%A1%8C%E8%80%85%E7%95%99%E5%AD%A6%E4%BD%93%E9%AA%8C%E4%B8%AD%E5%BF%83_01.mp4" controls="controls">
          您的浏览器不支持 video 标签。
        </video>
      </div>
      <div class="cvideocont_r">
        <ul class="r_list">
          <li v-for="item in lists" @click="handleClickItem(item.src)"><span>{{item.text}}</span></li>
        </ul>
        <div class="teste" @click="handleClickTo">英语测试</div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    data(){
      return{
        preimages:'http://p9zd0n0di.bkt.clouddn.com/video/playicon.png',
        lists:[
          {"text":"英语","src":"file:\\D:美国大学\ "},
          {"text":"法语","src":""},
          {"text":"德语","src":""},
          {"text":"韩文","src":""},
          {"text":"日文","src":""},
          {"text":"俄罗斯","src":""},
        ]

      }
    },
    methods:{
      backto(){
        this.$router.push({
          path:'/index'
        })
      },
      handleClickItem(src){
          this.$router.push({
            path:'/videolist',
            query:{"url":src}
          })
      },
      handleClickTo(){

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
        .teste{
          width: 210px;
          height: 40px;
          line-height: 40px;
          position: absolute;
          bottom: 372px;
          font-size: 25px;
          left: 65px;
          text-align: center;
          cursor: pointer;
          border: 2px solid #815940;
          border-radius: 5px;
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
            margin-right:10px;
            vertical-align: middle;
            span{
              display: inline-block;
              width:100%;height:100%;
              padding-top: 20px;
              cursor: pointer;
              border:2px solid #0d0100;
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
