<template>
  <div class="templatewrap">
    <div class="backto"><img src="http://p9zd0n0di.bkt.clouddn.com/video/backto.png" @click="backto"></div>
    <div class="videoBox">
      <div class="cvideocont_l">
        <ul>
          <li
            v-for="(item,index) in tabs"
            :class="{active:index == num}"
            @click="tab(index)"><a>{{item}}</a></li>
        </ul>
      </div>
      <div class="cvideocont_r">
        <div class="r_cont_wrap"
          v-for='(itemCon,index) in tabContents'
          v-show=" index == num" >
          <ul class="r_cont_l">
            <li v-for="item in itemCon.content">
              <div>{{item.campus}}</div>
              <span v-for="span in item.children" @click="changePdf(span.url)">{{span.text}}</span>
            </li>
          </ul>
        </div>
        <div  class="r_cont_r">
          <iframe :src="pdfurls" frameborder="0" id="pdfContainer" name="pdfContainer"></iframe>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import vueshowpdf from 'vueshowpdf'
  export default {
    data(){
      return {
        pdfurls:'http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf',
        isshowpdf:true,
        contentIndex:1,
        tabs: ["申请文书", "推荐信"],
        tabContents:[
          {
            "content": [
              {
                "campus":"美国专业",
                "children":[
                  {
                    "text":"航空航天专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E7%94%B5%E5%AD%90%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"广告专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E5%B9%BF%E5%91%8A%E5%AD%A6%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"电子专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                ]
              },
              {
                "campus":"英国",
                "children":[
                  {
                    "text":"多伦多大学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"多伦多xiao学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"多伦多大da1学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                ]
              },
              {
                "campus":"英国",
                "children":[
                  {
                    "text":"多伦多大学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"多伦多xiao学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"多伦多大da1学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                ]
              },
              {
                "campus":"英国",
                "children":[
                  {
                    "text":"多伦多大学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"多伦多xiao学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"多伦多大da1学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                ]
              },
            ]
          },
          {
            "content": [
              {
                "campus":"美国的",
                "children":[
                  {
                    "text":"航空航天专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"广告专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E5%B9%BF%E5%91%8A%E5%AD%A6%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"电子专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E7%94%B5%E5%AD%90%E4%B8%93%E4%B8%9A.pdf",
                  },
                ]
              },
              {
                "campus":"英国的",
                "children":[
                  {
                    "text":"多伦多大学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"多伦多xiao学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"多伦多大da1学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                ]
              },
              {
                "campus":"英国的",
                "children":[
                  {
                    "text":"多伦多大学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"多伦多xiao学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"多伦多大da1学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                ]
              },
              {
                "campus":"英国的",
                "children":[
                  {
                    "text":"多伦多大学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"多伦多xiao学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"多伦多大da1学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                ]
              }
            ]
          },

          ],
        num: 1
      }
    },
    components:{
      vueshowpdf
    },
    methods:{
      backto(){
        this.$router.push({
          path:'/index'
        })
      },
      itemTab(index){
        debugger
        this.contentIndex==index;
      },
      tab(index) {
        this.num = index;
      },
      changePdf(url){
        console.log(url);
        this.pdfurls=url;
      }
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
        .r_cont_wrap{
          width:45%;height:100%;
          float:left;
          .r_cont_l{
            width:100%;
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
        }

        .r_title{
          width:100%;height:40px;
          border-bottom:2px solid #368cf8;
          span{
            color:#ffffff;
            font-size:14px;
          }
        }

        .r_cont_r{
          width:50%;
          height:100%;
          float:right;
          background-color: #fff;
          iframe{
            width:100%;height:100%;
          }
        }
      }
    }
  }
</style>
