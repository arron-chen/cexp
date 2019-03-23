<template>
  <div class="resultwrap">
    <div class="btn_back">
      <a @click="back">返回</a>
    </div>
    <div class="result_tit">
      <a>{{title}}</a>
    </div>
    <div class="result_cont">
      <img :src="resultsrc">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      resultsrc: ""
    };
  },
  props: {},
  methods: {
    back() {
      history.go(-1);
    }
  },
  mounted() {
    this.title = this.$route.query.resulttitle;
    this.resultsrc = this.$route.query.resultSrc;
  }
};
</script>
<style lang="less">
.resultwrap {
  width: 100%;
  height: 100%;
  background: url("http://media.tianxingzhe.vip/test/result_bg.png") no-repeat
    center center;
  background-size: 100% 100%;
  padding: 10% 10% 6% 10%;
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

  .result_tit {
    width: 70%;
    height: 70px;
    line-height: 70px;
    background-color: #c1272d;
    border-radius: 30px;
    text-align: center;
    position: relative;
    left: 10%;
    a {
      font-size: 28px;
      color: #fff;
    }
  }
  .result_cont {
    width: 70%;
    height: 60%;
    margin: 10% 0 0 15%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
