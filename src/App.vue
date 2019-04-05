<template>
  <div id="app">
    <router-view></router-view>
    <component :is="currentComponent"></component>
    <div class="copyright">
      备案号：
      <a href="http://www.miitbeian.gov.cn">粤ICP备18071075号</a>
    </div>
  </div>
</template>

<script>
const count = () => import("./components/count.vue");
export default {
  name: "App",
  data() {
    return {
      currentComponent: ""
    };
  },
  components: { count },
  methods: {
    isContainedInRoute(to) {
      let allowRoute = [
        "/index",
        "/test/campus",
        "/test/character",
        "/test/work",
        "/test/willing",
        "/test/result1",
        "/video",
        "/course",
        "/videoshow",
        "/develop",
        "/devshow",
        "/template",
        "/info",
        "/imgShow"
      ];
      if(allowRoute.indexOf(to.path) !== -1){
        return true;
      }else{
        return false
      }
    }
  },
  watch: {
    $route(to, from) {
      if (this.isContainedInRoute(to)) {
        this.currentComponent = count;
      } else {
        this.currentComponent = "";
      }
    }
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

