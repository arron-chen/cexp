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
                    "text":"NBA专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9AMBA%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"化学专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E5%8C%96%E5%AD%A6%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"市场营销",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E5%B8%82%E5%9C%BA%E8%90%A5%E9%94%80.pdf",
                  },
                ]
              },
              {
                "campus":"英国的",
                "children":[
                  {
                    "text":"广告学专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E5%B9%BF%E5%91%8A%E5%AD%A6%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"心理学专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E5%BF%83%E7%90%86%E5%AD%A6%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"物理专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E7%89%A9%E7%90%86%E4%B8%93%E4%B8%9A.pdf",
                  },
                ]
              },
              {
                "campus":"英国的",
                "children":[
                  {
                    "text":"电子专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E7%94%B5%E5%AD%90%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"美术专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E7%BE%8E%E6%9C%AF%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"航空航天专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E4%B8%93%E4%B8%9A.pdf",
                  },
                ]
              },
              {
                "campus":"英国的",
                "children":[
                  {
                    "text":"计算机专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%B8%93%E4%B8%9A.pdf",
                  },
                  {
                    "text":"金融专业",
                    "url":"http://p9zd0n0di.bkt.clouddn.com/template/%E7%95%99%E5%AD%A6%E6%8E%A8%E8%8D%90%E4%BF%A1%E8%8C%83%E6%96%87%EF%BC%9A%E9%87%91%E8%9E%8D%E4%B8%93%E4%B8%9A.pdf",
                  }

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
            overflow: auto;
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
