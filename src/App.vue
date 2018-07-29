<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
    }
  },
  methods:{

  },
  watch:{
      $route(to , from ){
        //this.$store.dispatch('gettime');
      }
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

</style>

