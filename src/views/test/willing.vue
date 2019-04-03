<template>
  <div class="testwillwrap">
    <div class="backto">
      <img src="http://media.tianxingzhe.vip/test/backto.png" @click="backto">
    </div>
    <div class="navwrap">
      <ul>
        <router-link to="/test/campus" tag="li">MACL测试</router-link>
        <router-link to="/test/character" tag="li">专业方向测试</router-link>
        <router-link to="/test/work" tag="li">职业心理测试</router-link>
        <router-link to="/test/willing" tag="li">留学意向书</router-link>
      </ul>
    </div>
    <div class="question_wrap">
      <h1 style="text-align: center;margin-bottom:20px;">出国留学客户意向表</h1>
      <Form v-model="form" ref="formValidate" :model="formValidate" :rules="ruleValidate">
        <FormItem label="期望留学的国家">
          <CheckboxGroup v-model="form.checkbox">
            <Checkbox label="美国"></Checkbox>
            <Checkbox label="英国"></Checkbox>
            <Checkbox label="加拿大"></Checkbox>
            <Checkbox label="澳洲"></Checkbox>
            <Checkbox label="新西兰"></Checkbox>
            <Checkbox label="亚洲"></Checkbox>
            <Checkbox label="其他"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="选择国家原因">
          <Input v-model="form.reason" />
        </FormItem>
        <FormItem label="出国预算">
          <Input v-model="form.reason" style="width: 200px" />
        </FormItem>
        <FormItem label="在国外完成">
          <CheckboxGroup v-model="form.checkbox">
            <Checkbox label="高中"></Checkbox>
            <Checkbox label="本科预科"></Checkbox>
            <Checkbox label="硕士预科"></Checkbox>
            <Checkbox label="硕士"></Checkbox>
            <Checkbox label="语言培训"></Checkbox>
            <Checkbox label="职业培训"></Checkbox>
            <Checkbox label="其他"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="办理留学手续">
          <CheckboxGroup v-model="form.checkbox">
            <Checkbox label="越快越好"></Checkbox>
            <Checkbox label="三个月内"></Checkbox>
            <Checkbox label="半年内"></Checkbox>
            <Checkbox label="未确定先做了解"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="计划入学时间">
          <DatePicker type="date" placeholder="选择入学时间" style="width: 200px"></DatePicker>
        </FormItem>
        <FormItem label="姓名">
          <Input v-model="form.reason" style="width: 200px" />
        </FormItem>
        <FormItem label="性别">
          <RadioGroup v-model="form.radio">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="出生年月">
          <DatePicker type="date" placeholder="选择你的出生日期" style="width: 200px"></DatePicker>
        </FormItem>
        <FormItem label="手机号">
          <Input v-model="form.reason" style="width: 200px" />
        </FormItem>
        <FormItem label="邮箱">
          <Input v-model="form.reason" style="width: 200px" />
        </FormItem>
        <FormItem label="父母职业">
          <Input v-model="form.reason" style="width: 200px" />
        </FormItem>
        <FormItem label="最方便联系的时间段">
          <CheckboxGroup v-model="form.checkbox">
            <Checkbox label="工作日"></Checkbox>
            <Checkbox label="周末"></Checkbox>
            <Checkbox label="上午"></Checkbox>
            <Checkbox label="下午"></Checkbox>
            <Checkbox label="晚上"></Checkbox>
            <Checkbox label="任何时候"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="在读／毕业院校">
          <Input v-model="form.reason" style="width: 200px" />
        </FormItem>
        <FormItem label="年级">
          <Input v-model="form.reason" style="width: 200px" />
        </FormItem>
        <FormItem label="就读专业">
          <Input v-model="form.reason" style="width: 200px" />
        </FormItem>
        <FormItem label="留学期望就读专业">
          <Input v-model="form.reason" style="width: 200px" />
        </FormItem>
        <FormItem label="平均分">
          <Input v-model="form.reason" style="width: 200px" />
        </FormItem>
        <FormItem label="外语情况">
          <CheckboxGroup v-model="form.checkbox">
            <Checkbox label="LELTS"></Checkbox>
            <Checkbox label="TOEFL"></Checkbox>
            <Checkbox label="SAT"></Checkbox>
            <Checkbox label="GRE"></Checkbox>
            <Checkbox label="GMAT"></Checkbox>
          </CheckboxGroup>
          <span>考试时间</span>
          <Input v-model="form.reason" style="width: 200px" />
          <span>成绩</span>
          <Input v-model="form.reason" style="width: 200px" />
        </FormItem>
        <FormItem label="实习／工作经验">
          <Input v-model="form.reason" />
        </FormItem>
        <FormItem label="申请人签证历史（护照／获签／拒签／国家等）">
          <Input v-model="form.reason" />
        </FormItem>
        <FormItem label="对留学的期望（环境、住宿、工作、移民等）">
          <Input v-model="form.reason" />
        </FormItem>

        <div>
          <Button @click="handleSubmit('formValidate')">提交</Button>
        </div>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        checkbox: [],
        reason: ""
      },
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
      resultArray: []
    };
  },
  methods: {
    backto() {
      this.$router.push({
        path: "/index"
      });
    },
    changeRadio(e) {
      console.log(e);
      if (e) {
        this.enableBtn = false;
      }
      this.radioE = e;
    },
    nextQuestion(ind) {
      this.resultArray.push(this.radioE);
      if (ind == this.questions.length) {
        this.showSubmitBtn = true;
        this.itemIndex = ind;
      } else {
        this.itemIndex = ind + 1;
        this.enableBtn = true;
      }
    },
    handleSubmit() {}
  }
};
</script>
<style lang="less">
.showItem {
  display: block !important;
}
.testwillwrap {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #fff;
  background-size: 100% 100%;
  position: relative;
  .backto {
    position: fixed;
    left: 40px;
    top: 20px;
    width: 80px;
    height: 35px;
    cursor: pointer;
    img {
      width: 80px;
      height: 35px;
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
    height: 100%;
    position: absolute;
    top: 10%;
    left: 10%;
    text-align: left;
    padding-left: 10%;
    .question_tit {
      font-size: 30px;
      font-weight: bold;
    }
    .answer_cont {
      margin-top: 50px;
      .ivu-radio-wrapper {
        font-size: 20px;
      }
    }
  }
}
</style>
