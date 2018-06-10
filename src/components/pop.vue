<template>
  <Modal
    v-model="isShow" :width="modalW"
    class-name="vertical-modal"
    :mask-closable="false"
    :closable="false">
    <div class="pop"></div>
  </Modal>
</template>
<script>
  export default {
    data(){
      return {
        modal:'',
        modalW:'420px'
      }
    },
    props:{
      isShow:''
    }
  }
</script>
<style lang="less">
  .pop{
    width:100%;height:420px;
    background: url("http://p9zd0n0di.bkt.clouddn.com/ahead.jpg")no-repeat center center;
    background-size: 100% 100%;
    border-radius: 10px;
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
