<template>
    <div class="videowrap">
      <div class="backto"><img src="http://p9zd0n0di.bkt.clouddn.com/video/backto.png" @click="backto"></div>
      <div class="videoBox">
        <div class="cvideocont_l">
          <video  id="videoDom" :src="videoSrc" controls="controls">
            您的浏览器不支持 video 标签。
          </video>
        </div>
        <div class="cvideocont_r">
          <div class="r_title"><span>校园场景体验</span></div>
          <ul class="r_list">
            <li v-for="(item,index) in lists" :key="item.id" @click="handleClickItem(item)"><img :src="item.imgSrc"><span>{{item.text}}</span></li>
          </ul>
        </div>
      </div>

    </div>
</template>
<script>
  export default {
    data(){
      return {
        videoSrc:'http://7xnt3p.com1.z0.glb.clouddn.com/guide.mp4',
        lists:[
          {"id":1,"imgSrc":"http://p9zd0n0di.bkt.clouddn.com/video/video.png","text":"多伦多大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/Willwork.mp4"},
          {"id":2,"imgSrc":"http://p9zd0n0di.bkt.clouddn.com/video/video.png","text":"多伦多大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/Willwork.mp4"},
          {"id":3,"imgSrc":"http://p9zd0n0di.bkt.clouddn.com/video/video.png","text":"多伦多大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/Willwork.mp4"},
          {"id":4,"imgSrc":"http://p9zd0n0di.bkt.clouddn.com/video/video.png","text":"多伦多大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/Willwork.mp4"},
          ]
      }
    },
    methods:{
      backto(){
        this.$router.push({
          path:'/index'
        })
      },
      handleClickItem(item){
          console.log(item);
          let _dom=document.getElementById('videoDom');
          _dom.src=item.videoSrc;
          _dom.autoplay=true;
      }
    }
  }
</script>
<style lang="less">
  .videowrap{
    width:100%;
    height:100%;
    background: url('http://p9zd0n0di.bkt.clouddn.com/video/video_bg.png')no-repeat center center;
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
        float:left;
        width:66%;
        height:100%;
        border:1px solid #ffffff;margin-right:10px;
        background:url("http://p9zd0n0di.bkt.clouddn.com/video/playicon.png") no-repeat center center #000;
        background-size:70px 70px;
        cursor: pointer;
        video{
          width:100%;
          height: 100%;
        }
      }
      .cvideocont_r{
        float:right;width:30%;
        height:100%;
        .r_title{
          width:100%;height:40px;
          border-bottom:2px solid #368cf8;
          span{
            color:#ffffff;
            font-size:16px;
          }
        }
        .r_list{
          padding-top:20px;
          height:90%;
          list-style: none;
          text-align: left;
          overflow:auto;
          li{
            width:100%;height:23%;
            line-height: 22%;
            border-bottom:1px solid #2f7bda;
            margin-bottom: 10px;
            cursor: pointer;
            img{
              width:30%;height:80%;
            }
            span{
              color:#fff;
              font-size:18px;
            }
          }
        }
    }
    }
  }
</style>
