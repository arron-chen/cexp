<template>
  <div class="imgWrap">
    <div class="btn_back">
      <a @click="back">返回</a>
    </div>
    <iframe id="resId" :src="resUrl"></iframe>
  </div>
</template>
<script>
import imgBox from "@/components/imgbox";
export default {
  data() {
    return {
      imglist: "",
      resUrl: ""
    };
  },
  methods: {
    back() {
      history.go(-1);
    }
  },
  components: { imgBox },
  created() {
    this.resUrl = this.$route.query.url;
  }
};
</script>
<style lang="less">
.bodyClass {
  width: 100%;
  height: 100%;
  background-color: #358cf6;
  img {
    width: 100%;
    height: 100%;
  }
}
.imgWrap {
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
    border: none;

    html,
    body {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
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
