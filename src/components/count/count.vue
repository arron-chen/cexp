<template>
    <div>
      <timec :end-time="endTime" v-on:calllback="endcall"></timec>
      <pop :isShow="isShow"></pop>
    </div>
</template>
<script>
  import timec from './timec';
  import pop from './pop';
  export default {
    name:'count',
    data() {
      return {
        isShow:false
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
    components:{timec, pop},
    methods:{
      endcall(){
        debugger
        //this.isShow = true;
      }
    },
  }
</script>
<style>

</style>
