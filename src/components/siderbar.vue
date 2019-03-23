<template>
  <div>
    <ul class="sidebar">
      <li style="width:25px;height:100px;" @click="login">
        <img src=".././../static/images/sidebar/login_person.png">
        <span>用户登陆</span>
      </li>
    </ul>
    <Modal v-model="modal1" width="420" class-name="vertical-center-modal" :closable="false">
      <div class="loginCont">
        <div class="login_head"></div>
        <div class="loginWrap">
          <div class="login_code">
            <span>注册</span>
          </div>
          <div class="login_form">
            <i-form :model="formCustom" :rules="ruleCustom">
              <Form-item prop="passwd">
                <i-input
                  type="password"
                  :value.sync="formCustom.passwd"
                  icon="iphone"
                  placeholder="手机号码"
                ></i-input>
              </Form-item>
              <Form-item prop="age">
                <i-input
                  type="text"
                  :value.sync="formCustom.age"
                  icon="chatbox-working"
                  placeholder="验证码"
                >
                  <i-input></i-input>
                </i-input>
              </Form-item>
              <Form-item>
                <i-button class="form_submit" @click="handleSubmit('formCustom')">登录</i-button>
              </Form-item>
            </i-form>
          </div>
          <div>
            <Radio :checked.sync="single">
              我已经阅读并同意
              <a>体验中心用户使用协议</a>
            </Radio>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.formCustom.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    const validateAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      // 模拟异步验证效果
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      modal1: false,
      single: false,
      formCustom: {
        passwd: "",
        passwdCheck: "",
        age: ""
      },
      ruleCustom: {
        passwd: [{ validator: validatePass, trigger: "blur" }],
        passwdCheck: [{ validator: validatePassCheck, trigger: "blur" }],
        age: [{ validator: validateAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      this.modal1 = true;
      this.$emit("isModal", this.modal1);
    },
    toTop() {
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop;
      //获得当前高度
      let step = distance / 50;
      //每步的距离
      (function jump() {
        if (distance > 0) {
          distance -= step;
          window.scrollTo(0, distance);
          setTimeout(jump, 10);
        }
      })();
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("提交成功!");
        } else {
          this.$Message.error("表单验证失败!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
<style lang="less">
.vertical-center-modal {
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
      border-radius: 5px;
      border: 10px solid #686d71;
    }
    .ivu-modal-body {
      padding: 0;
    }
  }
}
.loginCont {
  width: 100%;
  height: 420px;
  padding: 40px 50px;
  .login_head {
    width: 100%;
    height: 60px;
    padding: 5px 0;
    background: url("../../static/images/logo.png") no-repeat center;
    background-size: 60% 60%;
  }
  .loginWrap {
    .login_code {
      width: 100%;
      height: 35px;
      line-height: 35px;
      text-align: center;
      span {
        display: inline-block;
        font-size: 14px;
        height: 30px;
        color: #333;
        font-weight: bold;
      }
    }
    .login_form {
      .form_submit {
        width: 100%;
        height: 35px;
        color: #fff;
        border: none;
        border-radius: 20px;
        background: #358cf6;
      }
    }
    .other_login_tit {
      text-align: center;
      position: relative;
      margin-top: 18px;
      div {
        width: 330px;
        height: 1px;
        background-color: #999;
        line-height: 0px;
        i {
          font-style: normal;
          font-size: 14px;
          color: #999;
          background-color: #fff;
          z-index: 10;
        }
      }
    }
  }
}
.sidebar {
  width: 25px;
  height: 350px;
  position: fixed;
  top: 20%;
  right: 5px;
  z-index: 999;
  li {
    border: 2px solid #3e90fc;
    border-radius: 5px;
    text-align: center;
    background: #fff;
    width: 25px;
    cursor: pointer;
    margin: 3px 0;
    display: inline-block;
    /* &:hover{
        background: #c13232;
      }*/
    img {
      width: 15px;
      height: 15px;
      position: relative;
      top: 5px;
    }
    span {
      color: #000;
      display: inline-block;
      text-align: center;
      font-size: 13px;
      padding: 14px 0;
      box-sizing: border-box;
    }
  }
}
</style>
