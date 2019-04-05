<template>
  <div class="testworkwrap">
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
            >返回上一题</Button>
            <Button v-show="showSubmitBtn" @click="handleSubmit('formValidate')">提交</Button>
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>
<script>
import localData from "@/util/localData.js";
import * as types from "../../store/type.js";
export default {
  data() {
    return {
      form: "",
      formValidate: {
        name: "",
        mail: "",
        city: "",
        gender: "",
        interest: [],
        date: "",
        time: "",
        desc: "",
        item1: true
      },
      ruleValidate: {},
      showItem: true,
      itemIndex: 1,
      enableBtn: true,
      showSubmitBtn: false,
      radioE: "",
      questions: [],
      resultArray: []
    };
  },
  created() {
    this.questions = localData.test.test3;
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
    },
    preQuestion(ind) {
      if (ind == 1) {
        this.itemIndex = 1;
        this.enableBtn = true;
      } else {
        this.itemIndex = ind - 1;
        this.resultArray.pop();
      }
    },
    handleSubmit() {
      let imglist = [
        "http://media.tianxingzhe.vip/test/%E5%86%85-18.png",
        "http://media.tianxingzhe.vip/test/%E5%86%85-19.png",
        "http://media.tianxingzhe.vip/test/%E5%86%85-21.png",
        "http://media.tianxingzhe.vip/test/%E5%86%85-22.png"
      ];
      let a = document.cookie;
      var param = { userId: "", userForm: {} };
      if (a && a != "") {
        let b = a.split(",")[0];
        param.userId = b.split("=")[1];
      }
      let index = parseInt(Math.random() * 3);
      param.userForm = imglist[index];
       this.$store
        .dispatch(types.SUBMIT_TEST3, param)
        .then(res => {
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
.testworkwrap {
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
