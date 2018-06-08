<template>
    <div class="guidewrap">
      <div class="login_btn">
        <!--<router-link to="/login" tab="button">注册</router-link>-->
        <a @click="register">注册</a>
        <a @click="login">登录</a>
       <!-- <router-link to="/login" tab="button">登录</router-link>-->
      </div>
      <Modal
        v-model="modal1" width="420"
        class-name="vertical-center-modal"
        :mask-closable="false"
        :closable="false">
        <div class="loginCont">
          <div class="login_head"></div>
          <div class="loginWrap">
            <div class="login_code"><span>注册</span></div>
            <div class="login_form">
              <i-form :model="formCustom" :rules="ruleCustom">
                <Form-item  prop="passwd">
                  <i-input type="password" :value.sync="formCustom.passwd"  icon="iphone" placeholder="手机号码">
                  </i-input>
                </Form-item>
                <!-- <Form-item  prop="passwdCheck">

                   <i-input type="password" :value.sync="formCustom.passwdCheck" icon="compose" placeholder="请填写图形验证码"><i-input></i-input>
                   </i-input>
                 </Form-item>-->
                <Form-item  prop="age">
                  <i-input type="text" :value.sync="formCustom.age" icon="chatbox-working" placeholder="验证码"><i-input></i-input>
                  </i-input>
                </Form-item>
                <Form-item>
                  <i-button class="form_submit" @click="handleSubmit('formCustom')">注册</i-button>
                </Form-item>
              </i-form>
            </div>
            <div> <Radio :checked.sync="single">我已经阅读并同意<a>体验中心用户使用协议</a></Radio></div>
            <!--<div class="other_login_tit"><div><i>社交账号登录</i></div></div>-->
          </div>
        </div>
        <div slot="footer"></div>
      </Modal>
      <Modal
        v-model="modal2" width="420"
        class-name="vertical-center-modal"
        :mask-closable="false"
        :closable="false">
        <div class="loginCont">
          <div class="login_head"></div>
          <div class="loginWrap">
            <div class="login_code"><span>登录</span></div>
            <div class="login_form">
              <i-form :model="formCustom" :rules="ruleCustom">
                <Form-item  prop="passwd">
                  <i-input type="password" :value.sync="formCustom.passwd"  icon="iphone" placeholder="手机号码">
                  </i-input>
                </Form-item>
                <!-- <Form-item  prop="passwdCheck">

                   <i-input type="password" :value.sync="formCustom.passwdCheck" icon="compose" placeholder="请填写图形验证码"><i-input></i-input>
                   </i-input>
                 </Form-item>-->
                <Form-item  prop="age">
                  <i-input type="text" :value.sync="formCustom.age" icon="chatbox-working" placeholder="验证码"><i-input></i-input>
                  </i-input>
                </Form-item>
                <Form-item>
                  <i-button class="form_submit" @click="handleSubmit('formCustom')">登录</i-button>
                </Form-item>
              </i-form>
            </div>
            <div> <Radio :checked.sync="single">我已经阅读并同意<a>体验中心用户使用协议</a></Radio></div>
            <!--<div class="other_login_tit"><div><i>社交账号登录</i></div></div>-->
          </div>
        </div>
        <div slot="footer"></div>
      </Modal>
    </div>
</template>
<script>
  export default {
    data(){
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.formCustom.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formCustom.validateField('passwdCheck');
          }
          callback();
        }
      };
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.formCustom.passwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      const validateAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        // 模拟异步验证效果
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      return {
        modal1:false,
        modal2:false,
        single:false,
        formCustom: {
          passwd: '',
          passwdCheck: '',
          age: ''
        },
        ruleCustom: {
          passwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          passwdCheck: [
            { validator: validatePassCheck, trigger: 'blur' }
          ],
          age: [
            { validator: validateAge, trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      register(){
        this.modal1=true;
      },
      login(){
        this.modal2=true;
      },
      handleSubmit(){
        this.$router.push({path:'index'});
      }
    }
  }
</script>
<style lang="less">
  @import '../assets/less/default/guide.less';
</style>
