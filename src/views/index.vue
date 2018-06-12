<template>
    <div class="wrap">
      <div class="module_wrap">
        <div class="module module1">
          <div class="module_box">
            <img src="http://p9zd0n0di.bkt.clouddn.com/module/icon1.png">
            <h3>MACL智能评估</h3>
            <div class="box_btn"><router-link  to="/test/campus" tag="a">进入</router-link></div>
          </div>

        </div>
        <div class="module module2">
          <div class="module_box">
          <img src="http://p9zd0n0di.bkt.clouddn.com/module/icon2.png">
          <h3>360环球名校直播</h3>
            <div class="box_btn"><router-link  to="/video" tag="a">进入</router-link></div>
          </div>
        </div>
        <div class="module module3">
          <div class="module_box">
          <img src="http://p9zd0n0di.bkt.clouddn.com/module/icon3.png">
          <h3>优能线上课堂</h3>
            <div class="box_btn"><router-link  to="/course" tag="a">进入</router-link></div>
          </div>
        </div>
        <div class="module module4">
          <div class="module_box">
          <img src="http://p9zd0n0di.bkt.clouddn.com/module/icon4.png">
          <h3>个人背景突破</h3>
            <div class="box_btn"><router-link  to="/develop" tag="a">进入</router-link></div>
          </div>
        </div>
        <div class="module module5">
          <div class="module_box">
          <img src="http://p9zd0n0di.bkt.clouddn.com/module/icon5.png">
          <h3>留学智能模板</h3>
            <div class="box_btn"><router-link  to="/template" tag="a">进入</router-link></div>
          </div>
        </div>
        <div class="module module6">
          <div class="module_box">
          <img src="http://p9zd0n0di.bkt.clouddn.com/module/icon6.png">
          <h3>SPI留学信息芯片</h3>
            <div class="box_btn"><router-link  to="/info" tag="a">进入</router-link></div>
          </div>
        </div>
      </div>
      <time-cont :endTime="endTime" :endText="endText" :callback="callback" class="countStyle"></time-cont>
      <pop :isShow="isShow"></pop>
    </div>
</template>
<script>

  import timeCont from '../components/countDown';
  import pop from '../components/pop';
  export default {
    data () {
      return {
        modal1: false,
        isShow:false,
        endTime:'1528990003',
        endText:'已经结束了',
      }
    },
    components:{timeCont,pop},
    methods: {
      callback(){
        let timestamp=new Date().getTime();
        if(this.endTime= timestamp){
          this.isShow=true;
        }
      },
      openModal(val){
          this.modal1=val;
          console.log(this.modal1)
      },
      turntoCampus(){
        this.$router.push({path:'/test/campus'});
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {

    }
  }
</script>
<style lang="less">
  @import '../assets/less/default/index.less';
</style>
