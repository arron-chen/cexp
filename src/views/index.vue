<template>
    <div>
      <Button @click="modal3 = true">No title bar</Button>
      <Modal v-model="modal3">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
      </Modal>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        modal2: false,
        modal_loading: false,
        modal3: false,
        modal4: false,
        modal5: false
      }
    },
    methods: {
      del () {
        this.modal_loading = true;
        setTimeout(() => {
          this.modal_loading = false;
          this.modal2 = false;
          this.$Message.success('Successfully delete');
        }, 2000);
      }
    }
  }
</script>
<style>
  @import '../assets/less/default/index.less';
</style>
