<template>
  <div class="templatewrap">
    <count></count>
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
            <li v-for="(item,index1) in itemCon.content">
              <a v-for="(span,index2) in item.children" @click="changePdf(span.url,$event,index1,index2)" >{{span.text}}</a>
            </li>
          </ul>
        </div>
        <div  class="r_cont_r">
          <!--<iframe :src="pdfurls" frameborder="0" id="pdfContainer" name="pdfContainer"></iframe>-->
          <pdf :src="pdfurls"></pdf>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import pdf from 'vue-pdf';
  import count from '../components/count';
  export default {
    data(){
      return {
        pdfurls:'http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf',
        isshowpdf:true,
        contentIndex:1,
        tabs: ["申请文书", "简历模板"],
        tabContents:[
          {
            "content": [
              {
                "campus":"美国专业",
                "children":[
                  {
                    "text":"历史学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%96%87%E4%B9%A6%E4%B8%AA%E4%BA%BA%E9%99%88%E8%BF%B0%E8%8C%83%E6%96%87%EF%BC%9A%E5%8E%86%E5%8F%B2%E5%AD%A6.pdf",
                  },
                  {
                    "text":"电器工程",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%94%B5%E5%99%A8%E5%B7%A5%E7%A8%8B%E4%B8%93%E4%B8%9A%E4%B8%AA%E4%BA%BA%E9%99%88%E8%BF%B0%E8%8C%83%E6%96%87.pdf",
                  },
                  {
                    "text":"数学专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E6%95%B0%E5%AD%A6%E4%B8%93%E4%B8%9A%E4%B8%AA%E4%BA%BA%E9%99%88%E8%BF%B0%E8%8C%83%E6%96%87.pdf",
                  },
                ]
              },
              {
                "campus":"英国",
                "children":[
                  {
                    "text":"软件工程",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%96%87%E4%B9%A6%E4%B8%AA%E4%BA%BA%E9%99%88%E8%BF%B0%E8%8C%83%E6%96%87%EF%BC%9A%E8%BD%AF%E4%BB%B6%E5%B7%A5%E7%A8%8B.pdf",
                  },
                  {
                    "text":"生物医学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E4%B8%AA%E4%BA%BA%E9%99%88%E8%BF%B0%E8%8C%83%E6%96%87%E7%94%9F%E7%89%A9%E5%8C%BB%E5%AD%A6.pdf",
                  },
                  {
                    "text":"地理学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%96%87%E4%B9%A6%E4%B8%AA%E4%BA%BA%E9%99%88%E8%BF%B0%E8%8C%83%E6%96%87%EF%BC%9A%E5%9C%B0%E7%90%86%E5%AD%A6.pdf",
                  },
                ]
              },
              {
                "campus":"英国",
                "children":[
                  {
                    "text":"建筑专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E4%B8%AA%E4%BA%BA%E9%99%88%E8%BF%B0%E8%8C%83%E4%BE%8B%E2%80%94%E2%80%94%E5%BB%BA%E7%AD%91%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"牙医专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%89%99%E5%8C%BB%E4%B8%93%E4%B8%9A%E4%B8%AA%E4%BA%BA%E9%99%88%E8%BF%B0%E8%8C%83%E6%96%87.pdf",
                  },
                  {
                    "text":"人类学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%96%87%E4%B9%A6%E4%B8%AA%E4%BA%BA%E9%99%88%E8%BF%B0%E8%8C%83%E6%96%87%EF%BC%9A%E4%BA%BA%E7%B1%BB%E5%AD%A6.pdf",
                  },
                ]
              },
              {
                "campus":"英国",
                "children":[
                  {
                    "text":"生物化学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%96%87%E4%B9%A6%E4%B8%AA%E4%BA%BA%E9%99%88%E8%BF%B0%E8%8C%83%E6%96%87%EF%BC%9A%E7%94%9F%E7%89%A9%E5%8C%96%E5%AD%A6.pdf",
                  },
                  {
                    "text":"政治学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%96%87%E4%B9%A6%E4%B8%AA%E4%BA%BA%E9%99%88%E8%BF%B0%E8%8C%83%E6%96%87%EF%BC%9A%E6%94%BF%E6%B2%BB%E5%AD%A6.pdf",
                  },
                  {
                    "text":"法律专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%94%B3%E8%AF%B7%E6%96%87%E4%B9%A6%EF%BC%9A%E6%B3%95%E5%BE%8B%E4%B8%93%E4%B8%9A%E4%B8%AA%E4%BA%BA%E9%99%88%E8%BF%B0%E8%8C%83%E6%96%87.pdf",
                  },
                ]
              },
              {
                "campus":"英国",
                "children":[
                  {
                    "text":"材料科学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E4%B8%AA%E4%BA%BA%E9%99%88%E8%BF%B0%E8%8C%83%E6%96%87%E2%80%94%E2%80%94%E6%9D%90%E6%96%99%E7%A7%91%E5%AD%A6.pdf",
                  },
                  {
                    "text":"戏剧学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%96%87%E4%B9%A6%E4%B8%AA%E4%BA%BA%E9%99%88%E8%BF%B0%E8%8C%83%E6%96%87%EF%BC%9A%E6%88%8F%E5%89%A7.pdf",
                  },
                  {
                    "text":"艺术设计",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E8%89%BA%E6%9C%AF%E8%AE%BE%E8%AE%A1%E4%B8%93%E4%B8%9A%E4%B8%AA%E4%BA%BA%E9%99%88%E8%BF%B0%E8%8C%83%E6%96%87.pdf",
                  },
                ]
              },
              {
                "campus":"英国",
                "children":[
                  {
                    "text":"广告策划",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%96%87%E4%B9%A6%E4%B8%AA%E4%BA%BA%E9%99%88%E8%BF%B0%E8%8C%83%E6%96%87%EF%BC%9A%E5%B9%BF%E5%91%8A%E7%AD%96%E5%88%92.pdf",
                  },
                  {
                    "text":"航空航天",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%96%87%E4%B9%A6%E4%B8%AA%E4%BA%BA%E9%99%88%E8%BF%B0%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9.pdf",
                  },
                  {
                    "text":"金融经济",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E4%B8%AA%E4%BA%BA%E9%99%88%E8%BF%B0%E8%8C%83%E6%96%87%E2%80%94%E2%80%94%E9%87%91%E8%9E%8D%E7%BB%8F%E6%B5%8E%E7%B1%BB.pdf",
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
                    "text":"杜克大学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/Duke+Resume+Template.pdf",
                  },
                  {
                    "text":"耶鲁大学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/Yale%20resume%20tips.pdf",
                  },
                  {
                    "text":"康奈尔大学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/Cornell%20resume%20template.pdf",
                  },
                ]
              },
              {
                "campus":"英国的",
                "children":[
                  {
                    "text":"哥伦比亚大学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/Columbia%20resume%20sample%20sample+resume+in+MC.pdf",
                  },
                  {
                    "text":"耶鲁大学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/Dupras-Boileau_Laurent_CV.pdf",
                  },
                  {
                    "text":"普林斯顿大学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/Fischer_Jeremie_CV.pdf",
                  },
                ]
              },
              {
                "campus":"英国的",
                "children":[
                  {
                    "text":"剑桥大学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/hbs2001resumes.pdf",
                  },
                  {
                    "text":"普林斯顿大学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/Wu_Tong_CV.pdf",
                  },
                  {
                    "text":"普林斯顿大学",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/Zabukovec_Igor_CV.pdf",
                  },
                ]
              },
              {
                "campus":"英国的",
                "children":[
                  {
                    "text":"商行",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/work/%E5%95%86%E8%A1%8C1.pdf",
                  },
                  {
                    "text":"投行",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/work/%E6%8A%95%E8%A1%8C1.pdf",
                  },
                  {
                    "text":"券商",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/work/%E5%88%B8%E5%95%861.pdf",
                  }
                ]
              },
              {
                "campus":"英国的",
                "children":[
                  {
                    "text":"人力咨询",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/work/%E4%BA%BA%E5%8A%9B%E5%92%A8%E8%AF%A21.pdf",
                  },
                  {
                    "text":"管理咨询",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/work/%E7%AE%A1%E7%90%86%E5%92%A8%E8%AF%A23.pdf",
                  },
                  {
                    "text":"律师事务所",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/work/%E5%9B%9B%E5%A4%A71.pdf",
                  }
                ]
              },
              {
                "campus":"英国的",
                "children":[
                  {
                    "text":"互联网",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/work/%E4%BA%92%E8%81%94%E7%BD%911.pdf",
                  },
                  {
                    "text":"人力资源",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/work/%E4%BA%BA%E5%8A%9B%E8%B5%84%E6%BA%901.pdf",
                  },
                  {
                    "text":"保险",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/work/%E4%BF%9D%E9%99%A91.pdf",
                  }
                ]
              },
              {
                "campus":"英国的",
                "children":[
                  {
                    "text":"外贸",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/work/%E5%A4%96%E8%B4%B81.pdf",
                  },
                  {
                    "text":"物流",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/work/%E7%89%A9%E6%B5%811.pdf",
                  },
                  {
                    "text":"法律",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/work/%E6%B3%95%E5%BE%8B1.pdf",
                  }
                ]
              },
            ]
          },

          ],
        num: 1
      }
    },
    components: {
      pdf,count
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
      changePdf(url,event,index1,index2){
        console.log(url);
        this.pdfurls=url;
      },
      onErr(err) {
        console.log('pdf加载失败，请重试');
        console.log('错误信息：', err);
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
      width:100px;height:45px;
      cursor: pointer;
      img{
        width:100px;height:45px;
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
        width:9%;
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
        float:right;width:90%;
        height:100%;
        .r_cont_wrap{
          width:29%;height:100%;
          float:left;
          .r_cont_l{
            width:100%;
            height:100%;
            list-style: none;
            text-align: left;
            float:left;
            color:#fff;
            padding-top:40px;
            overflow: auto;
            li{
              width:100%;height:15%;
              line-height: 50px;
              border-bottom:1px solid #2f7bda;
              margin-bottom: 10px;
              div{
                font-size:14px;
                margin-bottom:10px;
              }
              .active{
                color:red;
              }
              a{
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
          width:70%;
          height:100%;
          float:right;
          background-color: #fff;
          overflow: auto;
          iframe{
            width:100%;height:100%;
          }
        }
      }
    }
  }
</style>
