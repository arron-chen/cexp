<template>
    <div class="countWrap">
      <timec :callback="callback" v-on:rescall="rescall" :endTime="time" :endText="endText" ></timec>
      <popc :isShow="isShow"></popc>
    </div>
</template>
<script>
  import timec from '../components/countDown.vue';
  import popc from '../components/pop.vue';
  import {mapState,mapGetters} from 'vuex';
  export default {
    name:'count',
    data() {
      return {
        isShow:false,
        timmer:'',
        endText:'体验时间结束',
      }
    },
    components:{timec,popc},
    created(){
        this.$store.dispatch('gettime');
        this.$nextTick(() => {
          this.timmer = setInterval(()=>{
            this.$store.dispatch('settime');
          },60000)
        })
    },
    updated(){
      //clearInterval(this.timmer);
    },
    destory(){
      clearInterval(this.timmer);
    },
    watch:{
      endTime(val,oldval){
        console.log("val: --"+val+" oldval:--"+oldval);
      }
    },
    computed:{
    /*  endTime(){
        let timestamp;
        let count = this.$store.state.countime;
        console.log("endTime -- "+ count);
        timestamp = new Date().getTime() + count *60*1000;
        return timestamp;
      },*/
      ...mapState(['countime']),
      ...mapGetters(['time']),
    },
    methods:{
      callback(){
        //console.log("倒计时回调");
        this.isShow= true;
      },
      rescall(){
        this.isShow = false;
      },
      logout(){
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
            this.$router.push({path:'/'});
            this.$http.delete("http://112.74.25.26/user/logout").then((res)=>{
            }).catch((err)=>{
              console.log(err)
            })
          },
        })
      },
      clearAllCookie() {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if(keys) {
          for(var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
        }
      },
    },
  }
</script>
<style lang="less">
  .countWrap{
    position: absolute;
    right:20px;
    bottom:20px;
    color:#fff;
  }
  .pop{
    width:100%;height:420px;
    background: url("http://p9zd0n0di.bkt.clouddn.com/ahead.jpg")no-repeat center center;
    background-size: 100% 100%;
    border-radius: 10px;
  }
  .logout{
    position:absolute;
    bottom:33px;
    right:20px;
    width:40px;
    text-align: center;
  a{
    display: inline-block;
    width:100%;
    height:35px;
    line-height:35px;
    color: #fff;
    border: none;
    border-radius:50%;
    background: #358cf6;
  }
  }
  .vertical-modal{
    display: flex;
    align-items: center;
    justify-content: center;
  .ivu-modal-footer{
    display: none;
  }
  .ivu-modal{
    top: 0;
  .ivu-modal-content{
    background: rgba(196,196,196,.9);
    border-radius: 10px;
    border:1px solid #686d71;
  }
  .ivu-modal-body{
    padding:0;
  }
  }
  }
</style>
