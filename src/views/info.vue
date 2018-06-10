<template>
  <div class="infowrap">
    <div class="backto"><img src="http://p9zd0n0di.bkt.clouddn.com/video/backto.png" @click="backto"></div>
    <div class="videoBox">
      <div class="cvideocont_l">
        <ul class="r_list">
          <li><img src="http://p9zd0n0di.bkt.clouddn.com/network/word.png"><h3>offer</h3></li>
          <li><img src="http://p9zd0n0di.bkt.clouddn.com/network/word.png"><h3>offer</h3></li>
          <li><img src="http://p9zd0n0di.bkt.clouddn.com/network/word.png"><h3>offer</h3></li>
        </ul>
      </div>
      <div class="cvideocont_r">
        <div>
          <div><img src="http://p9zd0n0di.bkt.clouddn.com/network/network_icon.png"></div>
          <h4>15579884221用户</h4>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    data(){
      return {}
    },
    methods:{
      backto(){
        this.$router.push({
          path:'/index'
        })
      },
    }
  }
</script>
<style lang="less">
  .infowrap{
    width:100%;
    height:100%;
    background: url('http://p9zd0n0di.bkt.clouddn.com/network/net_bg.jpg')no-repeat center center;
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
      width:85%;
      height:50%;
      position:absolute;
      left:50%;
      top:50%;
      transform: translate(-50%,-50%);
      text-align: center;

      .cvideocont_l{
        float:right;
        width:80%;
        height:100%;
        border:1px solid #ffffff;margin-right:10px;
        border-radius:20px;
        background-color: #fff;
        overflow: auto;
        .r_list{
          padding:20px;
          height:100%;
          width:100%;
          overflow: auto;
          list-style: none;
          text-align: left;
          li{
            width:60px;height:70px;
            text-align: center;
            float:left;
            margin:10px 10px 10px 0;
            cursor: pointer;
            img{
              width:50px;height:50px;
            }
            span{
              color:#fff;
              font-size:18px;
            }
          }
        }
      }
      .cvideocont_r{
        float:left;width:15%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          width:80px;
          height:85px;
        }
        h4{
          color:#fff;
        }


      }
    }
  }
</style>
