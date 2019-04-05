<template>
  <div class="coursewrap">
    <div class="backto">
      <img src="http://media.tianxingzhe.vip/test/backto.png" @click="backto">
    </div>
    <div class="videoBox">
      <div class="cvideocont_l">
        <video :src="viedoSrc" controls="controls" autoplay>您的浏览器不支持 video 标签。</video>
      </div>
      <div class="cvideocont_r">
        <div class="teste" @click="handleClickTo">英语测试</div>
        <ul class="r_list">
          <li
            v-for="(item,index) in localData.course.lists"
            :key="index"
            @click="handleClickItem(item.src)"
          >
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
      viedoSrc: "http://media.tianxingzhe.vip/video/AP.mp4",
      preimages: "http://media.tianxingzhe.vip/video/playicon.png",
      localData: undefined
    };
  },
  beforeMount() {
    this.localData = localData;
  },
  methods: {
    backto() {
      this.$router.push({
        path: "/index"
      });
    },
    handleClickItem(src) {
      this.viedoSrc = src;
    },
    handleClickTo() {
      window.location.href = "TPO:";
    }
  }
};
</script>
<style lang="less">
.coursewrap {
  width: 100%;
  height: 100%;
  background: url("http://media.tianxingzhe.vip/nation/nation_bg.jpg") no-repeat
    center center;
  background-size: 100% 100%;
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
      float: right;
      width: 66%;
      height: 100%;
      border: 1px solid #000;
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
      float: left;
      width: 30%;
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      .r_title {
        width: 100%;
        height: 40px;
        border-bottom: 2px solid #368cf8;
        span {
          color: #ffffff;
          font-size: 14px;
        }
      }
      .teste {
        width: 250px;
        height: 50px;
        line-height: 50px;
        background-color: #fff;
        font-size: 25px;
        left: 65px;
        text-align: center;
        cursor: pointer;
        border: 2px solid #815940;
        border-radius: 5px;
        margin: 20px 0 0 30px;
        &:hover {
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        }
      }
      .r_list {
        list-style: none;
        text-align: center;
        height: 100px;
        position: absolute;
        bottom: 20px;
        margin-left: 40px;
        min-width: 315px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: auto;
        li {
          width: 30px;
          height: 100%;
          margin-right: 10px;
          float: left;
          span {
            display: inline-block;
            width: 100%;
            height: 100%;
            padding-top: 12px;
            cursor: pointer;
            border: 2px solid #0d0100;
            border-radius: 4px;
            color: #0d3d6c;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
