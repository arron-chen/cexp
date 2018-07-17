<template>
    <div class="wrap">
      <count></count>
      <div class="module_wrap">
        <div class="module module1">
          <div class="module_box">
            <img src="http://p9zd0n0di.bkt.clouddn.com/module/01.png">
            <h3>MACL智能评估</h3>
            <div class="box_btn"><router-link  to="/test/campus" tag="a">进入</router-link></div>
          </div>

        </div>
        <div class="module module2">
          <div class="module_box">
          <img src="http://p9zd0n0di.bkt.clouddn.com/module/02.png">
          <h3>360环球名校直播</h3>
            <div class="box_btn"><router-link  to="/video" tag="a">进入</router-link></div>
          </div>
        </div>
        <div class="module module3">
          <div class="module_box">
          <img src="http://p9zd0n0di.bkt.clouddn.com/module/03.png">
          <h3>优能线上课堂</h3>
            <div class="box_btn"><router-link  to="/course" tag="a">进入</router-link></div>
          </div>
        </div>
        <div class="module module4">
          <div class="module_box">
          <img src="http://p9zd0n0di.bkt.clouddn.com/module/04.png">
          <h3>个人背景突破</h3>
            <div class="box_btn"><router-link  to="/develop" tag="a">进入</router-link></div>
          </div>
        </div>
        <div class="module module5">
          <div class="module_box">
          <img src="http://p9zd0n0di.bkt.clouddn.com/module/05.png">
          <h3>留学智能模板</h3>
            <div class="box_btn"><router-link  to="/template" tag="a">进入</router-link></div>
          </div>
        </div>
        <div class="module module6">
          <div class="module_box">
          <img src="http://p9zd0n0di.bkt.clouddn.com/module/06.png">
          <h3>SPI留学信息芯片</h3>
            <div class="box_btn"><router-link  to="/info" tag="a">进入</router-link></div>
          </div>
        </div>
      </div>
      <div class="exit_box"> <a class="btn_exit"  @click="exitSys"><span>退出</span></a></div>
    </div>
</template>
<script>
  import count from '../components/count';
  export default {
    data () {
      return {
      }
    },
    components:{count},
    methods: {
      response(){
        console.log("----");
      },
      turntoCampus(){
        this.$router.push({path:'/test/campus'});
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
    },

  }
</script>
<style lang="less">
  @import '../assets/less/default/index.less';
</style>
