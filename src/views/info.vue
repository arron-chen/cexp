<template>
  <div class="infowrap">
    <count></count>
    <div class="backto"><img src="http://media.tianxingzhe.vip/video/backto.png" @click="backto"></div>
    <Modal v-model="modal" width="90%"
           class-name="vertical-center-modal"
           :closable="false">
      <iframe :src="resultUrl" width="100%" height="100%" style="overflow: auto"></iframe>
    </Modal>
    <div class="videoBox">
      <div class="cvideocont_l">
        <ul class="r_list">
          <li class="r_list_li" v-for="(item,index) in localData.info.resultList1" :key="index"><img src="http://media.tianxingzhe.vip/network/word.png"><h3 >{{item.title}}</h3></li>

          <li v-for="(item,index) in resultList" :key="index"><img src="http://media.tianxingzhe.vip/network/word.png" @click="showItem(item)"><h3 >{{item.title}}</h3></li>
        </ul>
      </div>
      <div class="cvideocont_r">
        <div>
          <div><img src="http://media.tianxingzhe.vip/network/network_icon.png"></div>
          <h4>{{username}}用户</h4>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import count from '../components/count';
  import localData from '@/util/localData.js'
  export default {
    data(){
      return {
        resultList:[],
        username:"",
        resultUrl:"",
        modal:false,
        localData: undefined
      }
    },
    components:{count},
    created(){
      this.localData = localData
    },
    methods:{
      backto(){
        this.$router.push({
          path:'/index'
        })
      },
      showItem(item){
        this.$router.push({
          path:'/imgShow',
          query:item
        })

      },
      getInfo(){
        let a= document.cookie;
        var param={"userid":"","userForm":{}};
        if(a && a!=""){
          let b=a.split(',')[0];
          param.userid= b.split('=')[1];
        }
        this.$http.get("http://112.74.25.26/user",{params:param}).then((res)=>{
          if(res.data.code !== 2){
           let result = res.data.msg[0];
           this.username = result.username;
           if(result.test1 && result.test1 !== ""){
             this.resultList.push({
               "title":"MACL测试",
               "url":result.test1
             })
           }
            if(result.test2 && result.test2 !== ""){
              this.resultList.push({
                "title":"专业方向",
                "url":result.test2
              })
            }
            if(result.test3 && result.test3 !== ""){
              this.resultList.push({
                "title":"职业心理",
                "url":result.test3
              })
            }
            let par = { "userid":param.userid}
            this.$http.get("http://112.74.25.26/user/infoList",{params:par}).then((res)=>{
                for(var i in res.data.msg){
                  this.resultList.push(res.data.msg[i]);
                }
              }
            ).catch((err)=>{
            })
          }

        }).catch((err)=>{
          console.log(err)
        })
      }
    },
    mounted(){
      this.getInfo()
    }
  }
</script>
<style lang="less">
  .infowrap{
    width:100%;
    height:100%;
    background: url('http://media.tianxingzhe.vip/network/net_bg.jpg')no-repeat center center;
    background-size: 100% 100%;
    min-width: 860px;
    min-height: 650px;
    .backto{
      position:absolute;
      left:50px;
      top:45px;
      width:100px;height:45px;
      cursor: pointer;
      img{
        width:100px;height:45px;
      }
    }
    .videoBox{
      width:85%;
      height:50%;
      position:absolute;
      left:50%;
      top:50%;
      transform: translate(-50%,-50%);
      text-align: center;

      .cvideocont_l{
        float:right;
        width:80%;
        height:100%;
        border:1px solid #ffffff;margin-right:10px;
        border-radius:20px;
        background-color: #fff;
        overflow: auto;
        .r_list{
          padding:20px;
          height:100%;
          width:100%;
          overflow: auto;
          list-style: none;
          text-align: left;
          .r_list_li{
            cursor: default;
          }
          li{
            width:60px;height:70px;
            text-align: center;
            float:left;
            margin:10px 10px 10px 0;
            cursor: pointer;
            img{
              width:42px;height:50px;
            }
            span{
              color:#fff;
              font-size:18px;
            }
          }
        }
      }
      .cvideocont_r{
        float:left;width:15%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          width:90px;
          height:100px;
          margin-bottom:10px;
        }
        h4{
          color:#fff;
        }


      }
    }
  }
</style>
