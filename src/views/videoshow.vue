<template>
  <div class="videoCont">
    <div class="btn_back">
      <a @click="back">返回</a>
    </div>
    <video :src="videoSrc" controls="controls" :autoplay="autoplay">您的浏览器不支持 video 标签。</video>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoSrc: "",
      autoplay: true
    };
  },
  methods: {
    back() {
      history.go(-1);
    }
  },
  mounted() {
    this.videoSrc = this.$route.query[0];
  }
};
</script>
<style lang="less">
.videoCont {
  width: 100%;
  height: 100%;
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
  video {
    width: 100%;
    height: 100%;
  }
}
</style>
