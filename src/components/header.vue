<template>
  <div>
    <div class="top">
      <div class="topCont">
        <div class="topleft">
          <span>天行者留学  SKYWALKER YOUR DREAM MAKER！</span>
        </div>
        <div class="topright">
          <router-link  class="c_login" to="/login" tag="a">登录</router-link><router-link class="c_register" to="/login" tag="a">注册</router-link>
        </div>
      </div>
    </div>
   <!-- <div class="ctop">
      <div class="ctop_cont commonWidth">
        <div class="top_cont_r fr"><router-link  class="c_login" to="/login" tag="span">登录</router-link><router-link class="c_register" to="/login" tag="span">注册</router-link><i >|</i><i class="icon_weixin" ></i> <i class="icon_weibo"></i></div>
      </div>
    </div>-->
    <div class="cbanner">
      <div class="cbannerCont"></div>
    </div>
   <!-- <div class="cheader">
      <div class="cheader_cont commonWidth">
        <div class="clogo fl"><img src="../../static/images/logo.png"></div>
        <div class="fr"><Input size="small"></Input></div>
      </div>
    </div>-->
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="less">
  @import "../assets/less/default/header.less";
</style>
