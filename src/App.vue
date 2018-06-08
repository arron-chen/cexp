<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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

