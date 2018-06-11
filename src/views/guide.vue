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
        :closable="false">
        <div class="loginCont">
          <div class="login_head"></div>
          <div class="loginWrap">
            <div class="login_code"><span>注册</span></div>
            <div class="login_form">
              <i-form :model="formCustom" :rules="ruleCustom">
                <Form-item  prop="phone">
                  <i-input type="text" v-model="formCustom.phone"  icon="iphone" placeholder="手机号码">
                  </i-input>
                </Form-item>
                 <Form-item  prop="vcode">
                   <i-input type="password"  v-model="formCustom.vcode" icon="compose" placeholder="请填写图形验证码"><i-input></i-input>
                   </i-input>
                 </Form-item>
               <!-- <Form-item  prop="age">
                  <i-input type="text" :value.sync="formCustom.vcode" icon="chatbox-working" placeholder="验证码"><i-input></i-input>
                  </i-input>
                </Form-item>-->
                <Form-item>
                  <i-button class="form_submit" disabled="canSubmit1" @click="handleSubmit('formCustom')">注册</i-button>
                </Form-item>
              </i-form>
            </div>
            <div>
              <Checkbox v-model="single1">我已经阅读并同意<a>体验中心用户使用协议</a></Checkbox>
            </div>
            <!--<div class="other_login_tit"><div><i>社交账号登录</i></div></div>-->
          </div>
        </div>
        <div slot="footer"></div>
      </Modal>
      <Modal
        v-model="modal2" width="420"
        class-name="vertical-center-modal"
        :closable="false">
        <div class="loginCont">
          <div class="login_head"></div>
          <div class="loginWrap">
            <div class="login_code"><span>登录</span></div>
            <div class="login_form">
              <i-form :model="formCustom" :rules="ruleCustom">
                <Form-item  prop="phone">
                  <i-input type="text" v-model="formCustom.phone"   icon="iphone" placeholder="手机号码">
                  </i-input>
                </Form-item>
                <Form-item  prop="vcode">
                  <i-input type="text" v-model="formCustom.vcode"  icon="chatbox-working" placeholder="密码"><i-input></i-input>
                  </i-input>
                </Form-item>
                <Form-item>
                  <i-button class="form_submit" disabled="canSubmit2" @click="handleSubmit('formCustom')">登录</i-button>
                </Form-item>
              </i-form>
            </div>
            <div>
              <Checkbox v-model="single2">我已经阅读并同意<a>体验中心用户使用协议</a></Checkbox>
              <!--<Radio :checked.sync="single">我已经阅读并同意<a>体验中心用户使用协议</a></Radio>-->
            </div>
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
            //this.$refs.formCustom.validateField('passwdCheck');
          }
          callback();
        }
      };
      const validatePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else {
          /*if (this.formCustom.phone !== '') {

          }*/
          callback();
        }
      };
      const validateCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else {
          if (this.formCustom.vcode !== '') {

          }
          callback();
        }
      };




      return {
        modal1:false,
        modal2:false,
        single1:false,
        single2:false,
        formCustom: {
          phone:'',
          vcode:'',
          passwd: '',
        },
        ruleCustom: {
          phone: [
            { validator: validatePhone, trigger: 'blur' }
          ],
          vcode:[
            {validator: validateCode, trigger: 'blur'}
            ],
          passwdCheck: [
            { validator: validatePass, trigger: 'blur' }
          ],
        },
        canSubmit1:true,
        canSubmit2:true,
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
