<template>
  <div id="app">
    <router-view></router-view>
    <div class="copyright">
      备案号：
      <a href="http://www.miitbeian.gov.cn">粤ICP备18071075号</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  watch: {
    $route(to, from) {}
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
}
#app {
  flex: 1;
  overflow: hidden;
}
.copyright {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
}
.copyright a {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
}
</style>

