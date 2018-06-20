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
              <i-form :model="formCustom1" :rules="ruleCustom1" ref="formCustom1">
                <Form-item  prop="phone">
                  <i-input type="text" v-model="formCustom1.phone"  icon="iphone" placeholder="手机号码">
                  </i-input>
                </Form-item>
                 <Form-item  prop="vcode">
                   <i-input type="password"  v-model="formCustom1.vcode" icon="compose" placeholder="请填写图形验证码"><i-input></i-input>
                   </i-input>
                 </Form-item>
               <!-- <Form-item  prop="age">
                  <i-input type="text" :value.sync="formCustom.vcode" icon="chatbox-working" placeholder="验证码"><i-input></i-input>
                  </i-input>
                </Form-item>-->
                <Form-item>
                  <i-button class="form_submit"  @click="handleSubmit1('formCustom1')">注册</i-button>
                </Form-item>
              </i-form>
            </div>
            <div> <Radio  v-model="single1">我已经阅读并同意<a>体验中心用户使用协议</a></Radio></div>
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
              <i-form :model="formCustom2" :rules="ruleCustom2" ref="formCustom2">
                <Form-item  prop="phone">
                  <i-input type="text" v-model="formCustom2.phone"   icon="iphone" placeholder="手机号码">
                  </i-input>
                </Form-item>
                <Form-item  prop="vcode">
                  <i-input type="password" v-model="formCustom2.vcode"  icon="chatbox-working" placeholder="验证码"><i-input></i-input>
                  </i-input>
                </Form-item>
                <Form-item>
                  <i-button class="form_submit"  @click="handleSubmit2('formCustom2')">登录</i-button>
                </Form-item>
              </i-form>
            </div>
            <div> <Radio  v-model="single2">我已经阅读并同意<a>体验中心用户使用协议</a></Radio></div>
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
      const validatePass1 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.formCustom1.passwdCheck !== '') {
            // 对第二个密码框单独验证
            //this.$refs.formCustom.validateField('passwdCheck');
          }
          callback();
        }
      };
      const validatePhone1 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else {
          let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
          if (!myreg.test(value)) {
            callback(new Error('手机格式不正确'));
          }
          callback();
        }
      };
      const validateCode1 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else {
          if (this.formCustom1.vcode !== '') {

          }
          callback();
        }
      };
      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.formCustom1.passwdCheck !== '') {
            // 对第二个密码框单独验证
            //this.$refs.formCustom.validateField('passwdCheck');
          }
          callback();
        }
      };
      const validatePhone2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else {
          let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
          if (!myreg.test(value)) {
            callback(new Error('请输入正确的手机号'));
          }
          callback();
        }
      };
      const validateCode2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else {
          if (this.formCustom1.vcode !== '') {

          }
          callback();
        }
      };

      return {
        modal1:false,
        modal2:false,
        single1:false,
        single2:false,
        formCustom1: {
          phone:'',
          vcode:'',
          passwd: '',
        },
        formCustom2: {
          phone:'',
          vcode:'',
          passwd: '',
        },
        ruleCustom1: {
          phone: [
            { validator: validatePhone1, trigger: 'blur' }
          ],
          vcode:[
            {validator: validateCode1, trigger: 'blur'}
            ],
          passwdCheck: [
            { validator: validatePass1, trigger: 'blur' }
          ],
        },
        ruleCustom2: {
          phone: [
            { validator: validatePhone2, trigger: 'blur' }
          ],
          vcode:[
            {validator: validateCode2, trigger: 'blur'}
          ],
          passwdCheck: [
            { validator: validatePass2, trigger: 'blur' }
          ],
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
      handleSubmit1(name){
        let _this=this;
        this.$refs[name].validate((valid) => {
          if (valid) {
            let user={
              "username":"",
              "password":"",
            };
            user.username=this.formCustom1.phone;
            user.password=this.formCustom1.vcode;
            if(_this.single1){

              this.$http.post('http://111.230.235.200:8011/user/signup',user).then((res)=>{
                console.log(res);
                if(res.data.code ==0){
                  this.$Message.success('注册成功,请登录!');
                  this.modal1=false;
                  this.modal2=true;
                }else{
                  this.$Message.error('注册失败!');
                }


              }).catch((err)=>{
                this.$Message.error('注册失败!');
                console.log(err);
              });

              this.$router.push({path:'/'});
            }

          }
        })

      },
      handleSubmit2(name){
        let _this=this;
        this.$refs[name].validate((valid) => {
          if (valid) {
            let user={
              "username":"",
              "password":"",
            };
            user.username=this.formCustom2.phone;
            user.password=this.formCustom2.vcode;
            if(_this.single2){
              this.$http.post('http://111.230.235.200:8011/user/login',user).then((res)=>{
                console.log(res);
                if(res.data.code === 0){
                  let id = res.data.msg;
                  let exp = new Date();
                  exp.setTime(exp.getTime() + 1000 * 60 * 60 * 24); //这里表示保存24小时
                  document.cookie = "userid=" + id + ";expires=" + exp.toGMTString();

                  this.$Message.success('欢迎体验!');
                  this.$router.push({path:'/index'});
                }else{
                  this.$Message.error('登录失败!');
                }

              }).catch((err)=>{
                this.$Message.error('登录失败!');
                console.log(err);
              });


            }

          }
        })

      },
    }
  }
</script>
<style lang="less">
  @import '../assets/less/default/guide.less';
</style>
