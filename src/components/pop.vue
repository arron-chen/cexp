<template>
  <Modal
    v-model="isShow"
    :width="modalW"
    class-name="vertical-modal"
    :mask-closable="false"
    :closable="false"
  >
    <div class="pop"></div>
    <div class="logout" @click="logout">
      <a>注销</a>
    </div>
  </Modal>
</template>
<script>
import { clearAllCookie } from '../util/cookie.js' 
import * as types from '../store/type.js'
export default {
  name: "popc",
  data() {
    return {
      modal: "",
      modalW: "420px"
    };
  },
  methods: {
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
          this.$store.dispatch(types.LOGOUT)
            .then(res => { console.log('注销成功',res)})
            .catch(err => {
              console.log(err);
            });
        }
      });
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="less">
.pop {
  width: 100%;
  height: 420px;
  background: url("http://media.tianxingzhe.vip/ahead.png") no-repeat center
    center;
  background-size: 100% 100%;
  border-radius: 10px;
}
.logout {
  position: absolute;
  bottom: 40px;
  right: 30px;
  width: 60px;
  text-align: center;
  cursor: pointer;
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
