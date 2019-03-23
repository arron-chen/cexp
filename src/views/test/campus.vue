<template>
  <div class="testwrap">
    <count></count>
    <div class="backto">
      <img src="http://media.tianxingzhe.vip/test/backto.png" @click="backto">
    </div>
    <div class="navwrap">
      <ul>
        <router-link to="/test/campus" tag="li">MACL测试</router-link>
        <router-link to="/test/character" tag="li">专业方向测试</router-link>
        <router-link to="/test/work" tag="li">职业心理测试</router-link>
      </ul>
    </div>
    <div class="question_wrap">
      <Form v-model="form" ref="formValidate" :model="formValidate" :rules="ruleValidate">
        <div
          v-for="item in questions"
          :key="item.id"
          v-show="item.id == itemIndex"
          style="display: none"
        >
          <div class="question_tit">{{item.question}}</div>
          <FormItem :prop="item.prop" class="answer_cont">
            <RadioGroup v-model="item.model" v-on:on-change="changeRadio(item)">
              <Radio label="A">{{item.answerA}}</Radio>
              <Radio label="B">{{item.answerB}}</Radio>
            </RadioGroup>
          </FormItem>
          <div>
            <Button
              v-show="!showSubmitBtn"
              :disabled="enableBtn"
              type="primary"
              size="small"
              @click="preQuestion(item.id)"
            >上一题</Button>
            <Button v-show="showSubmitBtn" @click="handleSubmit('formValidate')">提交</Button>
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>
<script>
import count from "../../components/count";
import localData from "@/util/localData.js";
export default {
  data() {
    return {
      form: "",
      formValidate: {
        gender1: "",
        gender2: "",
        gender3: ""
      },
      ruleValidate: {},
      showItem: true,
      itemIndex: 1,
      enableBtn: true,
      clickPre: false,
      showSubmitBtn: false,
      radioE: "",
      questions: [],
      resultArray: []
    };
  },
  components: { count },
  created(){
    this.questions = localData.test.test1;
  },
  methods: {
    backto() {
      this.$router.push({
        path: "/index"
      });
    },
    changeRadio(e) {
      this.itemIndex =
        e.id + 1 > this.questions.length ? this.questions.length : e.id + 1;
      if (e) {
        this.enableBtn = false;
      }
      if (e.id === this.questions.length) {
        this.showSubmitBtn = true;
      } else {
        this.showSubmitBtn = false;
      }
      this.radioE = e.model;
      this.resultArray.push(this.radioE);
      console.log(this.resultArray);
    },
    preQuestion(ind) {
      this.clickPre = true;
      if (ind == 1) {
        this.itemIndex = 1;
        this.enableBtn = true;
      } else {
        this.itemIndex = ind - 1;
        this.resultArray.pop();
        console.log(this.resultArray);
      }
    },
    nextQuestion(ind) {
      if (ind == this.resultArray.length) {
        this.itemIndex = this.resultArray.length;
        this.enableBtn = true;
      } else {
        this.itemIndex = ind + 1;
        this.resultArray.push(this.radioE);
      }
      console.log(this.resultArray);
    },
    handleSubmit() {
      let result = [
        "http://media.tianxingzhe.vip/test/result11.jpg",
        "http://media.tianxingzhe.vip/test/result12.jpg",
        "http://media.tianxingzhe.vip/test/result13.jpg",
        "http://media.tianxingzhe.vip/test/result14.jpg",
        "http://media.tianxingzhe.vip/test/result15.jpg"
      ];
      let a = document.cookie;
      var param = { userId: "", userForm: {} };
      if (a && a != "") {
        let b = a.split(",")[0];
        param.userId = b.split("=")[1];
      }
      let index = parseInt(Math.random() * 4);
      param.userForm = result[index];
      this.$http
        .post("http://112.74.25.26/user/test1", param)
        .then(res => {
          console.log(res);
          this.$Message.info("提交成功，留学芯片中查看结果");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less">
.showItem {
  display: block !important;
}
.testwrap {
  width: 100%;
  height: 100%;
  background: url("http://media.tianxingzhe.vip/test/test_bg.jpg") no-repeat
    center center;
  background-size: 100% 100%;
  position: relative;
  .backto {
    position: absolute;
    left: 40px;
    top: 20px;
    width: 100px;
    height: 45px;
    cursor: pointer;
    img {
      width: 100px;
      height: 45px;
    }
  }
  .navwrap {
    position: fixed;
    left: 50px;
    top: 40%;
    width: 100px;
    height: 180px;
    z-index: 10;
    ul {
      list-style: none;
      width: 100%;
      height: 100%;

      li {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border: 1px solid #efefef;
        text-align: center;
        cursor: pointer;
        &:hover {
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
        }
        &:visited {
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
        }
        &:active {
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
  .question_wrap {
    width: 80%;
    height: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
    padding: 10%;
    .question_tit {
      font-size: 30px;
      font-weight: bold;
    }
    .answer_cont {
      user-select: none;
      margin-top: 50px;
      .ivu-radio-wrapper {
        font-size: 20px;
      }
    }
  }
}
</style>
