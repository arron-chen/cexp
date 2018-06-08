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
     <!-- <c-header></c-header>
      <section class="ctest">
        <div class="ctest_cont commonWidth" @click="turntoCampus">
          <div  class="ctest_text">
            <h2>测测你的理想院校?</h2>
          </div>

        </div>
      </section>
     &lt;!&ndash; <section class="cbanner">
        <div class="cbanner_cont commonWidth">
          <swiper :options="swiperOption" ref="mySwiper">
            &lt;!&ndash; slides &ndash;&gt;
            <swiper-slide v-for="slide in swiperSlides" v-bind:style="{ 'background': 'url(' + slide + ') no-repeat' ,'background-size':'cover'}" :key="slide.id" ></swiper-slide>
            &lt;!&ndash; Optional controls &ndash;&gt;
            <div class="swiper-pagination" slot="pagination"></div>
         &lt;!&ndash;   <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>&ndash;&gt;
          </swiper>
        </div>
      </section>&ndash;&gt;

      <section class="cvideo">
        <div class="cvideo_cont commonWidth">
         &lt;!&ndash; <swiper :options="swiperOption1" ref="mySwiper1">
            &lt;!&ndash; slides &ndash;&gt;
            <swiper-slide v-for="slide1 in swiperSlides1" v-bind:style="{ 'background': 'url(' + slide1 + ')no-repeat' ,'background-size':'cover' }" :key="slide1.id"></swiper-slide>
            &lt;!&ndash; Optional controls &ndash;&gt;
            <div class="swiper-pagination" slot="pagination"></div>
            &lt;!&ndash;   <div class="swiper-button-prev" slot="button-prev"></div>
               <div class="swiper-button-next" slot="button-next"></div>&ndash;&gt;
          </swiper>&ndash;&gt;
          <div class="cvideo_title"></div>
          <div class="cvideo_contbox">
            <div class="cvideocont_l">
              <video></video>
            </div>
            <div class="cvideocont_r">
              <div class="r_title"><span>精彩视频</span></div>
              <ul class="r_list">
                <li><img src="../../static/images/video/video.png"><span>多伦多大学</span></li>
                <li><img src="../../static/images/video/video.png"><span>多伦多大学</span></li>
                <li><img src="../../static/images/video/video.png"><span>多伦多大学</span></li>
                <li><img src="../../static/images/video/video.png"><span>多伦多大学</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="ctemplate">
        <div class="ctemplate_cont commonWidth">
          <div class="template_tit"><h3>申请模板</h3></div>
          <div class="template_box">
            <ul>
              <li>
                <img src="../../static/images/template/word.png">
                <h4>文书</h4>
              </li>
              <li>
                <img src="../../static/images/template/word.png">
                <h4>推荐信</h4>
              </li>
              <li>
                <img src="../../static/images/template/word.png">
                <h4>offer</h4>
              </li>
              <li>
                <img src="../../static/images/template/word.png">
                <h4>合同</h4>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="conline">
        <div class="conline_cont commonWidth">
          <div class="online_box"><video></video></div>
        </div>
      </section>
      <section class="cdevelop">
        <div class="cdevelop_cont commonWidth">
          <div class="develop">
            <div class="develop_l"><img src="../../static/images/develop.png"></div>
            <div class="develop_r">
              <div class="dev_r_title"><h3>背景提升</h3>
              </div>
              <h5>作品集</h5>
              <h5>实习展示</h5>
              <div class="work_list">
                <h3>万思聪</h3>
                <h5>录取院校：多伦多大学</h5>
                <h5>专业：包装设计</h5>
              </div>
            </div>
          </div>
          <div class="develop_nav">
            <ul>
              <li>全部</li>
              <li>服装设计</li>
              <li>平面设计</li>
              <li>工业设计</li>
              <li>建筑设计</li>
              <li>插画</li>
              <li>纯艺术</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="netStroage">
        <div class="netStroage_cont commonWidth">
          <div class="net_cont_l">
            <div>
              <img src="../../static/images/person.png">
              <p>18688754662<br>网盘</p>
            </div>

          </div>
          <div class="net_cont_r">
            <textarea></textarea>
          </div>
        </div>
      </section>
      <section class="countdown">
        <div class="countdown_cont commonWidth">
          <div class="count_tit"><span>&#45;&#45;体验时长&#45;&#45;</span></div>
          <count-down endTime="1627734695" :callback="callback" endText="已经结束了" class="time_spiner"></count-down>
        </div>
      </section>
      <c-footer class="cfooter"></c-footer>
      <c-sidebar @isModal="openModal"></c-sidebar>-->

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
