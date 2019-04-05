<template>
  <div class="videowrap">
    <div class="backto">
      <img src="http://media.tianxingzhe.vip/video/backto.png" @click="backto">
    </div>
    <div class="videoBox">
      <div class="cvideocont_l">
        <video id="videoDom" :src="videoSrc" controls="controls">您的浏览器不支持 video 标签。</video>
      </div>
      <div class="cvideocont_r">
        <div class="r_title">
          <Select v-model="model8" clearable style="width:200px" v-on:on-change="onchange">
            <Option
              v-for="item in localData.video.cityList"
              :value="item.value"
              :key="item.value"
            >{{ item.label }}</Option>
          </Select>
        </div>
        <ul class="r_list">
          <li v-for="item in listU" :key="item.id" @click="handleClickItem(item)">
            <img :src="item.imgSrc">
            <span>{{item.text}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import localData from "@/util/localData.js";
export default {
  data() {
    return {
      videoSrc:
        "http://media.tianxingzhe.vip/video/%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%A4%9A%E4%BC%A6%E5%A4%9A%E5%A4%A7%E5%AD%A6.mp4",
      model8: "aUniversity",
      listIndex: "",
      lists: undefined,
      localData: undefined
    };
  },
  computed: {
    listU: {
      get: function() {
        return this.listIndex;
      },
      set: function(val, newv) {
        return val;
      }
    }
  },
  created() {
    this.localData = localData;
  },
  mounted() {
    this.listIndex = this.localData.video.lists.aUniversity;
    this.lists = this.localData.video.lists;
  },
  methods: {
    backto() {
      this.$router.push({
        path: "/index"
      });
    },
    handleClickItem(item) {
      let _dom = document.getElementById("videoDom");
      _dom.src = item.videoSrc;
      _dom.autoplay = true;
    },
    onchange(e) {
      this.listU = this.lists[e];
      this.listIndex = this.lists[e];
    }
  }
};
</script>
<style lang="less">
.videowrap {
  width: 100%;
  height: 100%;
  background: url("http://media.tianxingzhe.vip/video/video_bg.png") no-repeat
    center center;
  background-size: 100% 100%;
  min-width: 860px;
  min-height: 650px;
  .countStyle {
    display: block;
    position: fixed;
    width: 120px;
    height: 30px;
    bottom: 10px;
    right: 10px;
    color: #fff;
    font-size: 12px;
  }
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
      width: 66%;
      height: 100%;
      border: 1px solid #ffffff;
      margin-right: 10px;
      background: url("http://media.tianxingzhe.vip/video/playicon.png")
        no-repeat center center #000;
      background-size: 70px 70px;
      cursor: pointer;
      video {
        width: 100%;
        height: 100%;
      }
    }
    .cvideocont_r {
      float: right;
      width: 30%;
      height: 100%;
      .r_title {
        width: 100%;
        height: 40px;
        border-bottom: 2px solid #368cf8;
        .ivu-select {
          width: 100% !important;
          .ivu-select-selection {
            background-color: transparent !important;
          }
        }
        span {
          color: #ffffff;
          font-size: 16px;
        }
      }
      .r_list {
        padding-top: 20px;
        height: 90%;
        list-style: none;
        text-align: left;
        overflow: auto;
        li {
          width: 100%;
          height: 23%;
          line-height: 22%;
          border-bottom: 1px solid #2f7bda;
          margin-bottom: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;

          img {
            width: 30%;
            height: 80%;
          }
          span {
            color: #fff;
            font-size: 18px;
            margin-left: 8%;
          }
        }
      }
    }
  }
}
</style>
