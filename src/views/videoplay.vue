<template>
    <div>
      你要访问的视频地址为：<span class="urlstyle">{{itemsrc}}</span>,请将地址复制粘贴到顶部地址栏访问视频
    </div>
</template>
<script>
  export default {
    data(){
      return {
        itemsrc:''
      }
    },
    mounted(){
      debugger
      this.itemsrc=this.$route.query.url;
    }
  }
</script>
<style lang="less">
  .urlstyle{
    color:red;
  }
</style>
