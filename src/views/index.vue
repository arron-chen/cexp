<template>
    <div class="wrap">
      <c-header></c-header>
      <section class="cbanner">
        <div class="cbanner_cont commonWidth"></div>
      </section>
      <section class="ctest">
        <div class="ctest_cont commonWidth"></div>
      </section>
      <section class="cvideo">
        <div class="cvideo_cont commonWidth"></div>
      </section>
      <section class="ctemplate">
        <div class="ctemplate_cont commonWidth"></div>
      </section>
      <section class="conline">
        <div class="conline_cont commonWidth"></div>
      </section>
      <section class="cdevelop">
        <div class="cdevelop_cont commonWidth"></div>
      </section>
      <section class="countdown">
        <div class="countdown_cont commonWidth">
         <!-- <Button @click="modal3 = true">No title bar</Button>
          <Modal v-model="modal3">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
          </Modal>-->
        </div>
      </section>
      <c-footer class="cfooter"></c-footer>

    </div>
</template>
<script>
  import cHeader from '../components/header';
  import cFooter from '../components/footer';
  export default {
    data () {
      return {
        modal3: false,
      }
    },
    components:{cHeader,cFooter},
    methods: {
    }
  }
</script>
<style lang="less">
  @import '../assets/less/default/index.less';
</style>
