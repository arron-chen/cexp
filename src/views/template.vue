<template>
  <div class="templatewrap">
    <div class="backto"><img src="http://p9zd0n0di.bkt.clouddn.com/video/backto.png" @click="backto"></div>
    <div class="videoBox">
      <div class="cvideocont_l">
        <ul>
          <li><a>申请文书</a></li>
          <li><a>推荐信</a></li>
        </ul>
      </div>
      <div class="cvideocont_r">

        <ul class="r_cont_l">
          <li>
            <div>美国</div>
            <span>多伦多大学</span><span>xxxxxxx</span><span>多伦多大学</span><span>xxxxxxx</span>
          </li>
          <li>
            <div>美国</div>
            <span>多伦多大学</span><span>xxxxxxx</span><span>多伦多大学</span><span>xxxxxxx</span>
          </li>
          <li>
            <div>美国</div>
            <span>多伦多大学</span><span>xxxxxxx</span><span>多伦多大学</span><span>xxxxxxx</span>
          </li>
          <li>
            <div>美国</div>
            <span>多伦多大学</span><span>xxxxxxx</span><span>多伦多大学</span><span>xxxxxxx</span>
          </li>
          <li>
            <div>美国</div>
            <span>多伦多大学</span><span>xxxxxxx</span><span>多伦多大学</span><span>xxxxxxx</span>
          </li>
        </ul>
        <div   class="r_cont_r">
          框内预览
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
  .templatewrap{
    width:100%;
    height:100%;
    background-color: #000;
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
        width:10%;
        height:100%;
        ul{
          width:100%;height:100%;
          list-style: none;
          border-right:2px solid #368cf8;
          text-align: center;
          vertical-align: middle;

          li{
            width:100%;
            height:50%;
            vertical-align: middle;
            line-height:200px;
            &:first-child{
              border-bottom:2px solid #368cf8;
            }
            a{
              font-size:16px;
            }
          }
        }
      }
      .cvideocont_r{
        float:right;width:85%;
        height:100%;
        .r_title{
          width:100%;height:40px;
          border-bottom:2px solid #368cf8;
          span{
            color:#ffffff;
            font-size:14px;
          }
        }
        .r_cont_l{
          width:55%;
          height:100%;
          list-style: none;
          text-align: left;
          float:left;
          color:#fff;
          padding-top:40px;
          li{
            width:100%;height:16%;
            border-bottom:1px solid #2f7bda;
            margin-bottom: 10px;
            div{
              font-size:14px;
              margin-bottom:10px;
            }
            span{
              color:#fff;
              font-size:14px;
              margin-right:30px;
              cursor: pointer;
            }
          }
        }
        .r_cont_r{
          width:40%;
          height:100%;
          float:right;
          background-color: #fff;
        }
      }
    }
  }
</style>
