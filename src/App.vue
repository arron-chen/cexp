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
  body{
    display: flex;
    flex-direction:column;
  }
  #app{
    flex:1;
  }
</style>

