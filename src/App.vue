<template>
  <div id="app">
    <router-view/>
    <pop :isShow="isShow"></pop>
    <time-count :endTime="endTime" :endText="endText" :callback="callback" class="countStyle"></time-count>
  </div>
</template>

<script>
  import pop from '@/components/pop';
  import timeCount from '@/components/countDown'
export default {
  name: 'App',
  components:{pop,timeCount},
  data(){
    return{
      isShow:false,
      endTime:'1528990003',
      endText:'已经结束了'
    }
  },
  methods:{
    callback(){
      let timestamp=new Date().getTime();
      if(this.endTime= timestamp){
        this.isShow=true;
      }
    }
  },
  watch:{

  }
}
</script>

<style>
  html,body{
    width:100%;height:100%;
  }
  body{
    display: flex;
    flex-direction:column;
  }
  #app{
    flex:1;
    overflow: hidden;
  }
  .countStyle{
    display: block;
    position: fixed;
    width:120px;height:30px;
    bottom:10px;
    right:10px;
    color:#fff;
    font-size:12px;
  }
</style>

