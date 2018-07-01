<template>
  <div class="testwrap">
    <div class="backto"><img src="http://p9zd0n0di.bkt.clouddn.com/test/backto.png" @click="backto"></div>
    <div class="navwrap">
      <ul>
        <router-link to="/test/campus" tag="li">MACL测试</router-link>
        <router-link to="/test/character" tag="li">专业方向测试</router-link>
        <router-link to="/test/work" tag="li">职业心理测试</router-link>
       <!-- <router-link to="/test/willing" tag="li">留学意向书</router-link>-->
      </ul>
    </div>
    <div class="question_wrap">
      <Form v-model="form" ref="formValidate" :model="formValidate" :rules="ruleValidate">
        <div v-for="(item,index) in questions" :key="item.id" v-show="item.id == itemIndex"  style="display: none">
          <div class="question_tit">{{item.question}}</div>
          <FormItem :prop="item.prop" class="answer_cont">
            <RadioGroup v-model="item.model" v-on:on-change="changeRadio">
              <Radio label="A"> {{item.answerA}}</Radio>
              <Radio label="B"> {{item.answerB}}</Radio>
            </RadioGroup>
          </FormItem>
          <div>
            <Button v-show="!showSubmitBtn" :disabled="enableBtn" type="primary" size="small" @click="nextQuestion(item.id)">下一题</Button>
            <Button v-show="showSubmitBtn" @click="handleSubmit('formValidate')">提交</Button>
          </div>
        </div>
      </Form>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        form:'',
        formValidate: {
          name: '',
          mail: '',
          city: '',
          gender: '',
          interest: [],
          date: '',
          time: '',
          desc: '',
          item1:true
        },
        ruleValidate: {},
        showItem:true,
        itemIndex:1,
        enableBtn:true,
        showSubmitBtn:false,
        radioE:'',
        questions:[
          {"id":1,"prop":"gender","model":"formValidate.gender1'",
            "question":"Q1. 是否喜欢上数学课",
            "answerA":"A 喜欢",
            "answerB":" B 不喜欢"
          },
          {"id":2,"prop":"gender","model":"formValidate.gender2",
            "question":"Q2. 是否喜欢看世界名著",
            "answerA":"A 喜欢",
            "answerB":"B 不喜欢"},
          {"id":3,"prop":"gender","model":"formValidate.gender3",
            "question":"Q3 是否爱看新闻类节目",
            "answerA":"A 喜欢",
            "answerB":" B 不喜欢"},
          {"id":4,"prop":"gender","model":"formValidate.gender4",
            "question":"Q4 是否爱看世界经济、文化类书籍",
            "answerA":"A 喜欢",
            "answerB":"B 不喜欢"},
          {"id":5,"prop":"gender","model":"formValidate.gender5",
            "question":"Q5 喜欢看艺术展览或音乐会等",
            "answerA":" A 喜欢",
            "answerB":"B 不喜欢"},
          {"id":6,"prop":"gender","model":"formValidate.gender6",
            "question":"Q6 喜欢与小孩玩耍",
            "answerA":" A 喜欢 ",
            "answerB":" B 不喜欢 "},
          {"id":7,"prop":"gender","model":"formValidate.gender7",
            "question":"Q7 喜欢模型、建筑等",
            "answerA":"A 喜欢 ",
            "answerB":" B 不喜欢"},
          {"id":8,"prop":"gender","model":"formValidate.gender8",
            "question":"Q8 经常写日记记录生活",
            "answerA":"A 是 ",
            "answerB":"B 否"},
          {"id":9,"prop":"gender","model":"formValidate.gender9",
            "question":"Q9 善于查阅字典、索引等",
            "answerA":"A 是",
            "answerB":"B 否"},
          {"id":10,"prop":"gender","model":"formValidate.gender10",
            "question":"Q10 是否主动遵守组织的纪律",
            "answerA":"A 是    ",
            "answerB":"B 否"},
          {"id":11,"prop":"gender","model":"formValidate.gender11",
            "question":"Q11 喜欢观察自然景物",
            "answerA":"A 是",
            "answerB":"B 否"},
          {"id":12,"prop":"gender","model":"formValidate.gender12",
            "question":"Q12 是否乐于花费业余时间参加公益活动",
            "answerA":"A 是",
            "answerB":"B 否"},
          {"id":13,"prop":"gender","model":"formValidate.gender13",
            "question":"Q13 是否爱做实验",
            "answerA":"A 是  ",
            "answerB":" B 否"},
          {"id":14,"prop":"gender","model":"formValidate.gender14",
            "question":"Q14 喜欢骑车、坐车",
            "answerA":"A 是 ",
            "answerB":"B 否。  "},
          {"id":15,"prop":"gender","model":"formValidate.gender15",
            "question":"Q15 乐意安排活动、规划路线",
            "answerA":"A 是 ",
            "answerB":"B 否"},
          {"id":16,"prop":"gender","model":"formValidate.gender16",
            "question":"Q16 乐于了解新科技、新产品的原理",
            "answerA":" A 是",
            "answerB":"B 否 "},
          {"id":17,"prop":"gender","model":"formValidate.gender17",
            "question":"Q17  喜欢看综艺节目",
            "answerA":" A 是",
            "answerB":" B 否"},
          {"id":18,"prop":"gender","model":"formValidate.gender18",
            "question":"Q18 对电子产品感兴趣",
            "answerA":"A 是 ",
            "answerB":"B 否 "},
          {"id":19,"prop":"gender","model":"formValidate.gender19",
            "question":"Q19 乐于参加集体活动",
            "answerA":" A 是 ",
            "answerB":" B 否 "},
          {"id":20,"prop":"gender","model":"formValidate.gender20",
            "question":"Q20 向往探险",
            "answerA":" A 是 ",
            "answerB":"B 否"},
          {"id":21,"prop":"gender","model":"formValidate.gender21",
            "question":"Q21 对图表、分析感兴趣",
            "answerA":" A 是",
            "answerB":" B 否 "},
          {"id":22,"prop":"gender","model":"formValidate.gender22",
            "question":"Q22 喜欢看动物世界",
            "answerA":"A 是",
            "answerB":"B 否"},
          {"id":23,"prop":"gender","model":"formValidate.gender23",
            "question":"Q23 喜欢表现自己",
            "answerA":" A 是",
            "answerB":"B 否"},
          {"id":24,"prop":"gender","model":"formValidate.gender24",
            "question":"Q24 喜欢钻研课题",
            "answerA":"A 是 ",
            "answerB":"B 否"},
          {"id":25,"prop":"gender","model":"formValidate.gender25",
            "question":"Q25 学习成绩乐于与人竞争",
            "answerA":"A 是",
            "answerB":"B 否"},
          {"id":26,"prop":"gender","model":"formValidate.gender26",
            "question":"Q26 行动前是否考虑细致",
            "answerA":"A 是",
            "answerB":"B 否"},
          {"id":27,"prop":"gender","model":"formValidate.gender27",
            "question":"Q27 是否动手能力强",
            "answerA":" A 是",
            "answerB":"B 否 "},
          {"id":28,"prop":"gender","model":"formValidate.gender28",
            "question":"Q28 是否主动向别人提出建议",
            "answerA":"A 是",
            "answerB":"B 否"}

        ],
        resultArray:[]

      }
    },
    methods:{
      backto(){
        this.$router.push({
          path:'/index'
        })
      },
      changeRadio(e){
        console.log(e);
        if(e){
          this.enableBtn=false;
        }
        this.radioE=e;
      },
      nextQuestion(ind){
        //console.log(ind);
        this.resultArray.push(this.radioE);
        console.log(this.resultArray);
        if(ind == this.questions.length){
          this.showSubmitBtn=true;
          this.itemIndex=ind;
        }else{
          this.itemIndex=ind+1;
          this.enableBtn=true;
        }
      },
      handleSubmit(){
        let  imglist=[
            "http://p9zd0n0di.bkt.clouddn.com/test/result1.jpg",
            "http://p9zd0n0di.bkt.clouddn.com/test/result2.jpg",
            "http://p9zd0n0di.bkt.clouddn.com/test/result3.jpg"
            ]
        let a= document.cookie;
        var param={"userId":"","userForm":{}};
        if(a && a!=""){
          let b=a.split(',')[0];
          param.userId= b.split('=')[1];
        }
        param.userForm =imglist[0];
        this.$http.post("http://112.74.25.26/user/test2",param).then((res)=>{
          debugger
        }).catch((err)=>{
          console.log(err)
        })
        this.$router.push({
          path:'/test/result2',
          query:{
            imgSrc:imglist[0]
          }
        })
      }
    }
  }
</script>
<style lang="less">
  .showItem{
    display:block!important;
  }
  .testwrap{
    width:100%;
    height:100%;
    background: url('http://p9zd0n0di.bkt.clouddn.com/test/test_bg.jpg') no-repeat center center;
    background-size: 100% 100%;
    position:relative;
    .backto{
      position:absolute;
      left:40px;
      top:20px;
      width:80px;height:35px;
      cursor: pointer;
      img{
        width:80px;height:35px;
      }
    }
    .navwrap{
      position: fixed;
      left:50px;
      top:40%;
      width:100px;
      height:180px;
      z-index: 10;
      ul{
        list-style: none;
        width:100%;height:100%;

        li{
          width:100%;
          height:40px;
          line-height: 40px;
          border:1px solid #efefef;
          text-align: center;
          cursor: pointer;
          &:hover{
            box-shadow: 5px 5px 10px rgba(0,0,0,.2);
          }
          &:visited{
            box-shadow: 5px 5px 10px rgba(0,0,0,.2) ;
          }
          &:active{
             box-shadow: 5px 5px 10px rgba(0,0,0,.2);
           }


        }
      }
    }
    .question_wrap{
      width:80%;
      height:60%;
      position:absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      text-align: left;
      padding:10%;
      .question_tit{
        font-size:30px;
        font-weight:bold;
      }
      .answer_cont{
        margin-top:50px;
        .ivu-radio-wrapper{
          font-size:20px;
        }
      }
    }

  }

</style>
