<template>
    <div class="wrap">
      <c-header></c-header>
      <section class="cbanner">
        <div class="cbanner_cont commonWidth">
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="slide in swiperSlides" v-bind:style="{ 'background': 'url(' + slide + ') no-repeat' ,'background-size':'cover'}" :key="slide.id" ></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
         <!--   <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>-->
          </swiper>
        </div>
      </section>
      <section class="ctest">
        <div class="ctest_cont commonWidth">
          <h3>测试你的理想院校！</h3>
        </div>
      </section>
      <section class="cvideo">
        <div class="cvideo_cont commonWidth">
          <swiper :options="swiperOption1" ref="mySwiper1">
            <!-- slides -->
            <swiper-slide v-for="slide1 in swiperSlides1" v-bind:style="{ 'background': 'url(' + slide1 + ')no-repeat' ,'background-size':'cover' }" :key="slide1.id"></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!--   <div class="swiper-button-prev" slot="button-prev"></div>
               <div class="swiper-button-next" slot="button-next"></div>-->
          </swiper>
        </div>
      </section>
      <section class="ctemplate">
        <div class="ctemplate_cont commonWidth">
          <h3>模板申请！</h3>
        </div>
      </section>
      <section class="conline">
        <div class="conline_cont commonWidth">
          <h3>在线课程！</h3>
        </div>
      </section>
      <section class="cdevelop">
        <div class="cdevelop_cont commonWidth">
          <h3>背景提升！</h3>
        </div>
      </section>
      <section class="countdown">
        <div class="countdown_cont commonWidth">
          <span>体验倒计时：</span><count-down endTime="1527734695" :callback="callback" endText="已经结束了"></count-down>
        </div>
      </section>
      <c-footer class="cfooter"></c-footer>
      <c-sidebar @isModal="openModal"></c-sidebar>

    </div>
</template>
<script>
  import cHeader from '../components/header';
  import cFooter from '../components/footer';
  import cSidebar from '../components/siderbar';
  import countDown from '../components/countDown';

  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data () {
      return {
        modal1: false,
        swiperOption: {
          autoplay:{
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          grabCursor : false,
          loop : true,
          pagination : {
            el: '.swiper-pagination',
            clickable :true,
          },
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',

        },
        swiperOption1: {
          autoplay:{
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          grabCursor : false,
          loop : true,
          pagination : {
            el: '.swiper-pagination',
            clickable :true,
          },
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',

        },
        swiperSlides: ['../../static/images/banner/20180409041042283.jpg', '../../static/images/banner/20180425113844399.jpg', '../../static/images/banner/20180525032349951.jpg', '../../static/images/banner/20180409041042283.jpg'],
        swiperSlides1: ['../../static/images/video/1.jpg', '../../static/images/video/2.jpg']
      }
    },
    components:{cHeader,cFooter,cSidebar,swiper,
      swiperSlide,countDown},
    methods: {
      openModal(val){
          this.modal1=val;
          console.log(this.modal1)
      },
      callback(){

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
