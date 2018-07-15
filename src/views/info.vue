<template>
  <div class="infowrap">
    <div class="backto"><img src="http://p9zd0n0di.bkt.clouddn.com/video/backto.png" @click="backto"></div>
    <div class="videoBox">
      <div class="cvideocont_l">
        <ul class="r_list">
          <li v-for="(item,index) in resultList"><img src="http://p9zd0n0di.bkt.clouddn.com/network/word.png" @click="showItem(item)"><h3 >{{item.title}}</h3></li>
        </ul>
      </div>
      <div class="cvideocont_r">
        <div>
          <div><img src="http://p9zd0n0di.bkt.clouddn.com/network/network_icon.png"></div>
          <h4>{{username}}用户</h4>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    data(){
      return {
        resultList:[],
        username:""
      }
    },
    methods:{
      backto(){
        this.$router.push({
          path:'/index'
        })
      },
      showItem(item){
          debugger;
        this.$router.push({
          path:'/imgShow',
          query:item
        })

      },
      getInfo(){
        let a= document.cookie;
        var param={"userId":"","userForm":{}};
        if(a && a!=""){
          let b=a.split(',')[0];
          param.userId= b.split('=')[1];
        }
        this.$http.get("http://112.74.25.26/user/test1",{params:param}).then((res)=>{
          if(res.data.msg!= "失败"){
            var a;for(var i in res.data.msg){a=i}
            let arr={"imgUrl":a,"title":"macl测试结果"};
            this.resultList.push(arr);
          }

        }).catch((err)=>{
          console.log(err)
        })
         this.$http.get("http://112.74.25.26/user/test2",{params:param}).then((res)=>{
           if(res.data.msg!= "失败"){
             var a;for(var i in res.data.msg){a=i}
             let arr ={"imgUrl":a,"title":"专业方向测试"}
             this.resultList.push(arr);
           }

         }).catch((err)=>{
           console.log(err)
         })
        this.$http.get("http://112.74.25.26/user/test3",{params:param}).then((res)=>{
          if(res.data.msg!= "失败"){
            var a;for(var i in res.data.msg){a=i}
            let arr={"imgUrl":a,"title":"职业心理测试"};
            this.resultList.push(arr);
          }

        }).catch((err)=>{
          console.log(err)
        })
      }
    },
    computed:{

    },
    mounted(){
      debugger
      let a= document.cookie;
      var userid="";
      if(a && a!=""){
        let b=a.split(',')[0];
        this.username= b.split('=')[1];
      }

      this.getInfo()
    }
  }
</script>
<style lang="less">
  .infowrap{
    width:100%;
    height:100%;
    background: url('http://p9zd0n0di.bkt.clouddn.com/network/net_bg.jpg')no-repeat center center;
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
