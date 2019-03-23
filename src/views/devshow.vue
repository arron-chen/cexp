<template>
  <div class="showWrap">
    <div class="showcont">
      <count></count>
      <div class="showcont-title">作品集</div>
      <ul class="cont-list" ref="images">
        <li v-for="(item,index) in imgurl" :key="index">
          <img :src="item.url">
        </li>
      </ul>
      <div class="btn_back">
        <a @click="back">返回</a>
      </div>
    </div>
  </div>
</template>
<script>
import count from "../components/count";
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";
export default {
  data() {
    return {
      imglist: {},
      imgurl: [],
      pictureList: []
    };
  },
  components: { count },
  methods: {
    back() {
      history.go(-1);
    },
    getImg() {
      var el = this.$refs.images;
      var viewer = new Viewer(el, {
        // 相关配置项,详情参考官网
        show: { immediate: true }
      });
    }
  },
  created() {
    let b = JSON.parse(this.$route.query.children);
    this.imgurl = b;
  },
  mounted() {
    this.getImg();
  }
};
</script>
<style lang="less">
.showWrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f2f2f2;
  .showcont {
    width: 800px;
    position: relative;
    height: 100%;
    top: 0;
    bottom: 0;
    background-color: #fff;
    margin: 0 auto;
    text-align: center;
    .showcont-title {
      padding: 50px 0 30px;
      border-bottom-style: dotted;
      font-size: 20px;
      font-weight: 700;
    }
    .cont-list {
      list-style: none;

      -ms-flex-pack: center;
      justify-content: center;
      padding: 40px 120px;
      overflow: scroll;
      height: 600px;
      li {
        cursor: pointer;
      }
    }
  }
  img {
    width: 200px;
    height: 200px;
  }
  .btn_back {
    z-index: 10;
    position: fixed;
    top: 30px;
    left: 30px;
    z-index: 10;
    a {
      display: inline-block;
      width: 80px;
      height: 35px;
      line-height: 35px;
      color: #000;
      border: 1px solid #efefef;
      border-radius: 5px;
      text-align: center;
      background: #efefef;
      font-size: 16px;
    }
  }
}
</style>
