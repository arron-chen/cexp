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
          <div class="r_title">
            <Select v-model="model8" clearable style="width:200px" v-on:on-change="onchange">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
          <ul class="r_list">
            <li v-for="(item,index) in listU" :key="item.id" @click="handleClickItem(item)"><img :src="item.imgSrc"><span>{{item.text}}</span></li>
          </ul>
        </div>
      </div>

    </div>
</template>
<script>
  export default {
    data(){
      return {
        videoSrc:'http://7xnt3p.com1.z0.glb.clouddn.com/%E5%A4%A9%E8%A1%8C%E8%80%85%E7%95%99%E5%AD%A6%E4%BD%93%E9%AA%8C%E4%B8%AD%E5%BF%83_01.mp4',
        cityList: [
          {
            value: 'a',
            label: '美国大学'
          },
          {
            value: 'b',
            label: '英国大学'
          },
          {
            value: 'c',
            label: '法国大学'
          },

        ],
        model8: 'a',
        listIndex:"",
        lists:
          {
            'a':[
              {"id":1,"imgSrc":"http://p9zd0n0di.bkt.clouddn.com/develop/chahua/f/img123.jpg","text":"多伦多大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%A4%A9%E8%A1%8C%E8%80%85%E7%95%99%E5%AD%A6%E4%BD%93%E9%AA%8C%E4%B8%AD%E5%BF%83_01.mp4"},
              {"id":2,"imgSrc":"http://p9zd0n0di.bkt.clouddn.com/video/video.png","text":"万老师解惑一","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/DSC_0102.MOV"},
              {"id":3,"imgSrc":"http://p9zd0n0di.bkt.clouddn.com/video/video.png","text":"万老师解惑二","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/DSC_0105.MOV"},
              {"id":4,"imgSrc":"http://p9zd0n0di.bkt.clouddn.com/develop/industry/f/img415.jpg","text":"多伦多大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%A4%A9%E8%A1%8C%E8%80%85%E7%95%99%E5%AD%A6%E4%BD%93%E9%AA%8C%E4%B8%AD%E5%BF%83_01.mp4"},
            ],
            'b':[
              {"id":1,"imgSrc":"http://p9zd0n0di.bkt.clouddn.com/video/video.png","text":"伦敦大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%A4%A9%E8%A1%8C%E8%80%85%E7%95%99%E5%AD%A6%E4%BD%93%E9%AA%8C%E4%B8%AD%E5%BF%83_01.mp4"},
              {"id":2,"imgSrc":"http://p9zd0n0di.bkt.clouddn.com/video/video.png","text":"万老师解惑三","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/DSC_0103.MOV"},
              {"id":3,"imgSrc":"http://p9zd0n0di.bkt.clouddn.com/video/video.png","text":"伦敦大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%A4%A9%E8%A1%8C%E8%80%85%E7%95%99%E5%AD%A6%E4%BD%93%E9%AA%8C%E4%B8%AD%E5%BF%83_01.mp4"},
              {"id":4,"imgSrc":"http://p9zd0n0di.bkt.clouddn.com/video/video.png","text":"多伦敦大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%A4%A9%E8%A1%8C%E8%80%85%E7%95%99%E5%AD%A6%E4%BD%93%E9%AA%8C%E4%B8%AD%E5%BF%83_01.mp4"},
            ],
            'c':[
              {"id":1,"imgSrc":"http://p9zd0n0di.bkt.clouddn.com/video/video.png","text":"巴黎大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%A4%A9%E8%A1%8C%E8%80%85%E7%95%99%E5%AD%A6%E4%BD%93%E9%AA%8C%E4%B8%AD%E5%BF%83_01.mp4"},
              {"id":2,"imgSrc":"http://p9zd0n0di.bkt.clouddn.com/video/video.png","text":"巴黎大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/DSC_0104.MOV"},
              {"id":3,"imgSrc":"http://p9zd0n0di.bkt.clouddn.com/video/video.png","text":"巴黎大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%A4%A9%E8%A1%8C%E8%80%85%E7%95%99%E5%AD%A6%E4%BD%93%E9%AA%8C%E4%B8%AD%E5%BF%83_01.mp4"},
              {"id":4,"imgSrc":"http://p9zd0n0di.bkt.clouddn.com/video/video.png","text":"巴黎大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%A4%A9%E8%A1%8C%E8%80%85%E7%95%99%E5%AD%A6%E4%BD%93%E9%AA%8C%E4%B8%AD%E5%BF%83_01.mp4"},
            ]
        }

      }
    },
    computed:{
      listU:{
        get:function() {
          return this.listIndex;
        },
        set:function(val,newv){
          return val;
        }
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
      },
      onchange(e){
        this.listU=this.lists[e];
        this.listIndex=this.lists[e];
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
          .ivu-select{
            width: 100%!important;
            .ivu-select-selection{
              background-color:transparent !important;
            }
          }
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
