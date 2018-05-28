<template>
    <ul class="sidebar">
      <li style="width:44px;height:120px;">
        <img src=".././../static/images/sidebar/phone-d8843c5a10.gif">
        <span>立即咨询</span>
      </li>
      <li style="width:44px;height:120px;">
        <img src=".././../static/images/sidebar/yijian-312c17668d.png">
        <span>在线评估</span>
      </li>
      <li style="width:44px;height:40px;">
        <img src=".././../static/images/sidebar/geren-1e61592771.png">
      </li>
      <li style="width:44px;height:40px;">
        <img src=".././../static/images/sidebar/top-424820e783.png">
      </li>
    </ul>
</template>
<script>
  export default {}
</script>
<style lang="less">
  .sidebar{
    width:40px;
    height:350px;
    position: fixed;
    top:20%;
    right:5px;
    li{
      border:1px solid #efefef;
      text-align: center;
      background: #9a9a9a;
      width:40px;
      cursor: pointer;
      margin:3px 0;
      display: inline-block;
      &:hover{
        background: #c13232;
      }
      img{
        width:28px;height:28px;
        position: relative;
        top:5px;
      }
      span{
        color: #fff;
        display: inline-block;
        text-align: center;
        font-size: 16px;
        padding: 6px;
        box-sizing: border-box;
      }
    }
  }
</style>
