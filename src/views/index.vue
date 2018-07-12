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
     <!-- <time-cont :endTime="time" :endText="endText" :callback="callback" class="countStyle"></time-cont>
      --><!--<pop :isShow="isShow"></pop>-->
      <count ></count>
      <!--<timec :endTime="endTime" :callback="callback"></timec>-->
      <div class="exit_box"> <a class="btn_exit"  @click="exitSys"><span>退出</span></a></div>
    </div>
</template>
<script>
  import timec from '../components/count/timec';
  import pop from '../components/pop';
  import { mapState } from 'vuex';
  export default {
    data () {
      return {
        modal1: false,
        isShow:false,
       /* endTime:1539687195949,*/
        endText:'体验时间结束',
        timenum:0,
        timmer:{
          type:Object
        },
      }
    },
    components:{timec,pop},
    methods: {
      response(){
        debugger;
        console.log("----");
      },
      pdferr(errurl) {
        console.log(errurl);
      },
      callback(){
        debugger
        this.isShow=true;
        let timestamp=new Date().getTime();
        console.log(this.time)
        if(this.time <= timestamp){

        }
      },
      turntoCampus(){
        this.$router.push({path:'/test/campus'});
      },
      getTime(){
        let a= document.cookie;
        var param={"userid":""};
        if(a && a!=""){
          let b=a.split(',')[0];
          param.userid= b.split('=')[1];
        }
        var _this=this;
        this.$http.get('http://112.74.25.26/user/timeout',{params:param}).then((res)=>{
         //console.log(res);
         this.timenum=parseInt(res.data.msg);
         debugger
          //console.log(this.$store);
         this.$store.dispatch('setT', { countime:this.timenum });
         var _this=this;

         let currenttime=new Date();

         currenttime.setTime(currenttime.getTime()+this.timenum*60*1000);
          //console.log(currenttime);
         let endt=currenttime.getTime();
         //console.log(1+endt);
         this.endTime=this.timenum;
         console.log("endtime"+this.endTime)
        }).catch((err)=>{
          console.log(err)
        })
      },
      clearAllCookie() {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if(keys) {
          for(var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
        }
      },
      exitSys(){
        this.$Modal.confirm({
          title: '注销登陆',
          content: '<p>是否注销当前用户</p>',
          onOk: () => {
              this.clearAllCookie();
              var userid ;
              let a = document.cookie;
              let b=a.split(',')[0];
              userid =b.split('=')[1];
            this.$Message.info('退出登陆成功');
            clearInterval(this.timmer);
            this.$router.push({path:'/'});
            this.$http.delete("http://112.74.25.26/user/logout").then((res)=>{
            }).catch((err)=>{
              console.log(err)
            })

          },
        })

          }
      },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      time(){
        let date =new Date().getTime();
        console.log("time"+this.endTime);
        return this.endTime*60*1000+date;
      },
      endTime(){
        let timestamp,count = this.$store.state.countime;
        count = count > 0 ? count : 0;
        timestamp = new Date().getTime() + count*60*1000;
        console.log(timestamp)
        return timestamp;
      },
      ...mapState({
        countime(state){
          return state;
        }
      })
        },
    watch:{
        endTime(val){
          this.endTime=val;
        }
    },
    mounted() {
      /*this.getTime();
      this.endTime=this.$store.state.countime;
      var _this=this
      this.$nextTick(function () {
         this.timmer=setInterval(function(){
          _this.timenum=_this.timenum-1
          var now =_this.timenum;
          _this.$store.dispatch('settime', { countime:now });
        }, 60000);
      })*/

    },
    destroyed(){
      clearTimeout(this.timmer);//清空定时器
    }
  }
</script>
<style lang="less">
  @import '../assets/less/default/index.less';
</style>
