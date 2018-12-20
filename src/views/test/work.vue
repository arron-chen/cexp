<template>
  <div class="testworkwrap">
    <count></count>
    <div class="backto"><img src="http://media.tianxingzhe.vip/test/backto.png" @click="backto"></div>
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
            <RadioGroup v-model="item.model" v-on:on-change="changeRadio(item)">
              <Radio label="A"> {{item.answerA}}</Radio>
              <Radio label="B"> {{item.answerB}}</Radio>
            </RadioGroup>
          </FormItem>
          <div>
            <Button v-show="!showSubmitBtn" :disabled="enableBtn" type="primary" size="small" @click="preQuestion(item.id)">返回上一题</Button>
            <Button v-show="showSubmitBtn" @click="handleSubmit('formValidate')">提交</Button>
          </div>
        </div>
      </Form>
    </div>

  </div>
</template>
<script>
  import count from '../../components/count';
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
            "question":"Q1. 我喜欢把一件事情做完后再做另一件事",
            "answerA":"A 是",
            "answerB":"B 否"
          },
          {"id":2,"prop":"gender","model":"formValidate.gender2",
            "question":"Q2.在学习和生活中我喜欢独自筹划，不愿受别人干涉。",
            "answerA":"A 是",
            "answerB":"B 否"},
          {"id":3,"prop":"gender","model":"formValidate.gender3",
            "question":"Q3 在集体讨论中，我往往保持沉默",
            "answerA":"A 是",
            "answerB":"B 否"},
          {"id":4,"prop":"gender","model":"formValidate.gender4",
            "question":"Q4 我喜欢做戏剧、音乐、歌舞、新闻采访等方面的工作。",
            "answerA":"A 是",
            "answerB":"B 否"},
          {"id":5,"prop":"gender","model":"formValidate.gender5",
            "question":"Q5 每次写信我都一挥而就，不再重复。",
            "answerA":" A 是",
            "answerB":"B 否"},
          {"id":6,"prop":"gender","model":"formValidate.gender6",
            "question":"Q6 我经常不停地思考某一问题，直到想出正确的答案",
            "answerA":" A 是 ",
            "answerB":" B 否"},
          {"id":7,"prop":"gender","model":"formValidate.gender7",
            "question":"Q7 对别人借我的和我借别人的东西，我都能记得很清楚",
            "answerA":"A 是",
            "answerB":" B 否"},
          {"id":8,"prop":"gender","model":"formValidate.gender8",
            "question":"Q8 我喜欢抽象思维的工作，不喜欢动手的工作",
            "answerA":"A 是 ",
            "answerB":"B 否"},
          {"id":9,"prop":"gender","model":"formValidate.gender9",
            "question":"Q9 我喜欢成为人们注意的焦点",
            "answerA":"A 是",
            "answerB":"B 否"},
          {"id":10,"prop":"gender","model":"formValidate.gender10",
            "question":"Q10 我喜欢不时地夸耀一下自己取得的好成就",
            "answerA":"A 是",
            "answerB":"B 否"},
          {"id":11,"prop":"gender","model":"formValidate.gender11",
            "question":"Q11 我很渴望参加探险活动",
            "answerA":"A 是",
            "answerB":"B 否"},
          {"id":12,"prop":"gender","model":"formValidate.gender12",
            "question":"Q12 当我一个独处时，会感到更愉快",
            "answerA":"A 是",
            "answerB":"B 否 "},
          {"id":13,"prop":"gender","model":"formValidate.gender13",
            "question":"Q13 我喜欢在做事情前，对此事情做出细致的安排",
            "answerA":"A 是",
            "answerB":"B 否"},
          {"id":14,"prop":"gender","model":"formValidate.gender14",
            "question":"Q14 我讨厌修理自行车、电器一类的工作",
            "answerA":"A 是  ",
            "answerB":"B 否"},
          {"id":15,"prop":"gender","model":"formValidate.gender15",
            "question":"Q15 我喜欢参加各种各样的聚会",
            "answerA":"A 是  ",
            "answerB":"B 否"},
          {"id":16,"prop":"gender","model":"formValidate.gender16",
            "question":"Q16 对于将来的职业，我愿意从事虽然工资少、但是比较稳定的职业",
            "answerA":" A 是   ",
            "answerB":"B 否"},
          {"id":17,"prop":"gender","model":"formValidate.gender17",
            "question":"Q17 我常陶醉于音乐之中",
            "answerA":" A 是  ",
            "answerB":" B 否"},
          {"id":18,"prop":"gender","model":"formValidate.gender18",
            "question":"Q18 我办事很少思前想后",
            "answerA":"A 是    ",
            "answerB":"B 否"},
          {"id":19,"prop":"gender","model":"formValidate.gender19",
            "question":"Q19 我在处理学校事务时，经常请示老师",
            "answerA":" A 是    ",
            "answerB":"B 否 "},
          {"id":20,"prop":"gender","model":"formValidate.gender20",
            "question":"Q20 比较普通的游戏，我更喜欢需要动脑子的智力游戏",
            "answerA":" A 是  ",
            "answerB":"B 否"},
          {"id":21,"prop":"gender","model":"formValidate.gender21",
            "question":"Q21 我很难持续集中注意力在2小时以上",
            "answerA":" A 是  ",
            "answerB":" B 否 "},
          {"id":22,"prop":"gender","model":"formValidate.gender22",
            "question":"Q22 我喜欢亲自动手制作一些小玩意儿，从中得到乐趣",
            "answerA":"A 是  ",
            "answerB":"B 否"},
          {"id":23,"prop":"gender","model":"formValidate.gender23",
            "question":"Q23 我的动手能力很差",
            "answerA":" A 是  ",
            "answerB":"B 否"},
          {"id":24,"prop":"gender","model":"formValidate.gender24",
            "question":"Q24 和不熟悉的人交谈对我来说毫不困难",
            "answerA":"A 是   ",
            "answerB":"B 否"},
          {"id":25,"prop":"gender","model":"formValidate.gender25",
            "question":"Q25 和别人谈判时，我总是很容易放弃自己的观点",
            "answerA":"A 是  ",
            "answerB":"B 否"},
          {"id":26,"prop":"gender","model":"formValidate.gender26",
            "question":"Q26 我很容易结识同性别的朋友",
            "answerA":"A 是   ",
            "answerB":"B 否 "},
          {"id":27,"prop":"gender","model":"formValidate.gender27",
            "question":"Q27 我做人做事，既不悲观，也不偏激，基本属于不偏不倚的温和型",
            "answerA":" A 是  ",
            "answerB":"B 否"},
          {"id":28,"prop":"gender","model":"formValidate.gender28",
            "question":"Q28 当我开始做一件事情后，即使碰到再多的困难，我也要执著地干下去",
            "answerA":"A 是  ",
            "answerB":"B 否"}

        ],
        resultArray:[]

      }
    },
    components:{count},
    methods:{
      backto(){
        this.$router.push({
          path:'/index'
        })
      },
      changeRadio(e){
        //console.log(e);
        this.itemIndex= e.id+1 > this.questions.length ? this.questions.length : e.id+1;
        if(e){
          this.enableBtn=false;
        }
        if(e.id === this.questions.length){
          this.showSubmitBtn=true;
        }else{
          this.showSubmitBtn=false;
        }
        this.radioE=e.model;
        this.resultArray.push(this.radioE);
        console.log(this.resultArray);
      },
      preQuestion(ind){
        if(ind == 1){
          this.itemIndex=1;
          this.enableBtn=true;
        }else{
          this.itemIndex=ind-1;
          this.resultArray.pop();
          console.log(this.resultArray);
        }
      },
      handleSubmit(){
        let  imglist=[
          "http://media.tianxingzhe.vip/test/%E5%86%85-18.png",
          "http://media.tianxingzhe.vip/test/%E5%86%85-19.png",
          "http://media.tianxingzhe.vip/test/%E5%86%85-21.png",
          "http://media.tianxingzhe.vip/test/%E5%86%85-22.png"
        ]
        let a= document.cookie;
        var param={"userId":"","userForm":{}};
        if(a && a!=""){
          let b=a.split(',')[0];
          param.userId= b.split('=')[1];
        }
        let index = parseInt(Math.random()*3);
        param.userForm=imglist[index];
        this.$http.post("http://112.74.25.26/user/test3",param).then((res)=>{
          this.$Message.info('提交成功，留学芯片中查看结果');
        }).catch((err)=>{
          console.log(err)
        })
      }
    }
  }
</script>
<style lang="less">
  .showItem{
    display:block!important;
  }
  .testworkwrap{
    width:100%;
    height:100%;
    background: url('http://media.tianxingzhe.vip/test/test_bg.jpg') no-repeat center center;
    background-size: 100% 100%;
    position:relative;
    .backto{
      position:absolute;
      left:40px;
      top:20px;
      width:100px;height:45px;
      cursor: pointer;
      img{
        width:100px;height:45px;
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
        user-select: none;
        margin-top:50px;
        .ivu-radio-wrapper{
          font-size:20px;
        }
      }
    }

  }

</style>
