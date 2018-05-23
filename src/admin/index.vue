<template>
    <div class="wrap">
      <cheader class="cheader"></cheader>
      <div class="main">
        <csub-menu class="csubmenu"></csub-menu>
        <div class="content"></div>
      </div>

    </div>
</template>
<script>
  import cheader from './header';
  import csubMenu from './subMenu';
  export default {
    components:{cheader,csubMenu}
  }
</script>
<style lang="less">
  @import '../assets/less/admin/index.less';
  @import '../assets/less/admin/style.less';
</style>
