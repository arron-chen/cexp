<template>
  <div class="templatewrap">
    <count></count>
    <div class="backto">
      <img src="http://media.tianxingzhe.vip/video/backto.png" @click="backto">
    </div>
    <div class="videoBox">
      <div class="cvideocont_l">
        <ul>
          <li
            v-for="(item,index) in localData.template.tabs"
            :key="index"
            :class="{active:index == num}"
            @click="tab(index)"
          >
            <a>{{item}}</a>
          </li>
        </ul>
      </div>
      <div class="cvideocont_r">
        <div
          class="r_cont_wrap"
          v-for="(itemCon,index) in localData.template.tabContents"
          :key="index"
          v-show=" index == num"
        >
          <ul class="r_cont_l">
            <li v-for="(item,index1) in itemCon.content" :key="index1">
              <a
                v-for="(span,index2) in item.children"
                :key="index2"
                @click="changePdf(span.url,$event,index1,index2)"
              >{{span.text}}</a>
            </li>
          </ul>
        </div>
        <div class="r_cont_r">
          <pdf :src="pdfurls"></pdf>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pdf from "vue-pdf";
import count from "../components/count";
import localData from "@/util/localData.js";
export default {
  data() {
    return {
      pdfurls:
        "http://media.tianxingzhe.vip/template/%E7%95%99%E5%AD%A6%E6%96%87%E4%B9%A6%E4%B8%AA%E4%BA%BA%E9%99%88%E8%BF%B0%E8%8C%83%E6%96%87%EF%BC%9A%E5%8E%86%E5%8F%B2%E5%AD%A6.pdf",
      isshowpdf: true,
      contentIndex: 1,
      num: 0,
      localData: undefined
    };
  },
  components: {
    pdf,
    count
  },
  created() {
    this.localData = localData;
  },
  methods: {
    backto() {
      this.$router.push({
        path: "/index"
      });
    },
    itemTab(index) {
      this.contentIndex == index;
    },
    tab(index) {
      this.num = index;
    },
    changePdf(url, event, index1, index2) {
      console.log(url);
      this.pdfurls = url;
    },
    onErr(err) {
      console.log("pdf加载失败，请重试");
      console.log("错误信息：", err);
    }
  }
};
</script>
<style lang="less">
.templatewrap {
  width: 100%;
  height: 100%;
  background-color: #000;
  min-width: 860px;
  min-height: 650px;
  .backto {
    position: absolute;
    left: 50px;
    top: 45px;
    width: 100px;
    height: 45px;
    cursor: pointer;
    img {
      width: 100px;
      height: 45px;
    }
  }
  .videoBox {
    width: 93%;
    height: 60%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    .cvideocont_l {
      float: left;
      width: 9%;
      height: 100%;
      ul {
        width: 100%;
        height: 100%;
        list-style: none;
        border-right: 2px solid #368cf8;
        display: flex;
        flex-direction: column;

        li {
          width: 100%;
          height: 25%;
          vertical-align: middle;
          display: flex;
          justify-content: center;
          align-items: center;

          &:nth-child(2),
          &:nth-child(3) {
            border-bottom: 2px solid #368cf8;
            border-top: 2px solid #368cf8;
          }
          &:nth-child(3) {
            border-top: 0;
          }
          a {
            font-size: 16px;
          }
        }
      }
    }
    .cvideocont_r {
      float: right;
      width: 90%;
      height: 100%;
      .r_cont_wrap {
        width: 29%;
        height: 100%;
        float: left;
        .r_cont_l {
          width: 100%;
          height: 100%;
          list-style: none;
          text-align: left;
          float: left;
          color: #fff;
          padding-top: 40px;
          overflow: auto;
          li {
            width: 100%;
            height: 15%;
            line-height: 50px;
            border-bottom: 1px solid #2f7bda;
            margin-bottom: 10px;
            overflow: hidden;
            div {
              font-size: 14px;
              margin-bottom: 10px;
            }
            .active {
              color: red;
            }
            a {
              color: #fff;
              font-size: 14px;
              margin-right: 30px;
              cursor: pointer;
            }
          }
        }
      }

      .r_title {
        width: 100%;
        height: 40px;
        border-bottom: 2px solid #368cf8;
        span {
          color: #ffffff;
          font-size: 14px;
        }
      }

      .r_cont_r {
        width: 70%;
        height: 100%;
        float: right;
        background-color: #fff;
        overflow: auto;
        iframe {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
