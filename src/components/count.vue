<template>
  <div class="countWrap">
    <span :endTime="time" :endText="endText">
      <slot>{{content}}</slot>
    </span>
    <popc :isShow="isShow"></popc>
  </div>
</template>
<script>
import popc from "../components/pop.vue";
import { mapState, mapGetters } from "vuex";
import * as types from "../store/type";
import { clearAllCookie } from "../util/cookie.js";
export default {
  name: "count",
  data() {
    return {
      isShow: false,
      timmer: "",
      endText: "体验时间结束",
      content: ""
    };
  },
  components: { popc },
  created() {
    let a = document.cookie.split(",")[0];
    var b;
    if (a && a != "") {
      b = a.split("=")[1];
    }
    var param = {
      userid: b
    };
    this.$store
      .dispatch(types.FETCH_TIME, param)
      .then(res => {
        if (this.nextTime < 0) return;
        this.timmer = setInterval(() => {
          var param2 = {
            userid: b,
            time: this.nextTime
          };
          this.$store
            .dispatch(types.MODIFY_TIME, param2)
            .then(res => {
              console.log("修改时间成功---", res);
            })
            .catch(err => {
              console.log("修改时间失败---", err);
            });
        }, 60000);
      })
      .catch(err => {
        console.log("失败回调---", err);
      });

    this.countdown(this.time);
  },
  destory() {
    clearInterval(this.timmer);
  },
  watch: {
    time(val, oldval) {
      this.countdown(val);
    }
  },
  computed: {
    ...mapState(["timeNum"]),
    ...mapGetters(["time"]),
    nextTime() {
      return this.timeNum - 1;
    }
  },
  methods: {
    countdown(timestamp) {
      let self = this;
      let timer11 = setInterval(function() {
        let nowTime = new Date();
        let endTime = new Date(timestamp);
        let t = endTime.getTime() - nowTime.getTime();
        if (t > 0) {
          let day = Math.floor(t / 86400000);
          let hour = Math.floor((t / 3600000) % 24);
          let min = Math.floor((t / 60000) % 60);
          let sec = Math.floor((t / 1000) % 60);
          hour = hour < 10 ? "0" + hour : hour;
          min = min < 10 ? "0" + min : min;
          sec = sec < 10 ? "0" + sec : sec;
          let format = "";
          if (day > 0) {
            format = `${day}天${hour}小时${min}分${sec}秒`;
          }
          if (day <= 0 && hour > 0) {
            format = `${hour}小时${min}分${sec}秒`;
          }
          if (day <= 0 && hour <= 0) {
            format = `${min}分${sec}秒`;
          }
          self.content = format;
          self.isShow = false;
        } else {
          clearInterval(timer11);
          self.content = self.endText;
          self.isShow = true;
        }
      }, 1000);
    },
    logout() {
      this.$Modal.confirm({
        title: "注销登陆",
        content: "<p>是否注销当前用户</p>",
        onOk: () => {
          clearAllCookie();
          var userid;
          let a = document.cookie;
          let b = a.split(",")[0];
          userid = b.split("=")[1];
          this.$Message.info("退出登陆成功");
          this.$router.push({ path: "/" });
          this.$store
            .dispatch(types.LOGOUT)
            .then(res => {})
            .catch(err => {
              console.log(err);
            });
        }
      });
    }
  }
};
</script>
<style lang="less">
.countWrap {
  width: auto;
  height: 30px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  color: #fff;
  z-index: 100;
  text-align: center;
  span {
    text-align: center;
  }
}
.pop {
  width: 100%;
  height: 420px;
  background: url("http://media.tianxingzhe.vip/ahead.jpg") no-repeat center
    center;
  background-size: 100% 100%;
  border-radius: 10px;
}
.logout {
  position: absolute;
  bottom: 33px;
  right: 20px;
  width: 40px;
  text-align: center;
  a {
    display: inline-block;
    width: 100%;
    height: 35px;
    line-height: 35px;
    color: #fff;
    border: none;
    border-radius: 50%;
    background: #358cf6;
  }
}
.vertical-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  .ivu-modal-footer {
    display: none;
  }
  .ivu-modal {
    top: 0;
    .ivu-modal-content {
      background: rgba(196, 196, 196, 0.9);
      border-radius: 10px;
      border: 1px solid #686d71;
    }
    .ivu-modal-body {
      padding: 0;
    }
  }
}
</style>
