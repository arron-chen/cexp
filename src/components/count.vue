<template>
    <div>
      <timec :endTime="endTime" :calllBack="callback"></timec>
      <Modal
        v-model="isShow" :width="modalW"
        class-name="vertical-modal"
        :mask-closable="false"
        :closable="false">
        <div class="pop"></div>
        <div class="logout" @click="logout"><a>注销</a></div>
      </Modal>
    </div>
</template>
<script>
  export default {
    name:'count',
    data() {
      return {
        isShow:false,
        modal:'',
        modalW:'420px'
      }
    },
    mounted(){
        //console.log("mounted-------"+this.$store.state.countime);
    },
    computed:{
      endTime(){
        let timestamp,count = this.$store.state.countime;
        count = count > 0 ? count : 0;
        timestamp = new Date().getTime() + count*60*1000;
        //console.log(timestamp)
        return timestamp;
      }
    },
   /* props:{
      remotecall:{
        type:Function,
      }
    },*/
    methods:{
      callback(){
        debugger;
        console.log('callbakc');
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
