<template>
    <div class="testwrap">
        <div class="backto"><img src="http://p9zd0n0di.bkt.clouddn.com/test/backto.png" @click="backto"></div>
      <div class="navwrap">
        <ul>
          <router-link to="/test/campus" tag="li">MACL测试</router-link>
          <router-link to="/test/character" tag="li">性格测试</router-link>
          <router-link to="/test/work" tag="li">职业测试</router-link>
          <router-link to="/test/willing" tag="li">意向书</router-link>
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
                  "question":"1. 识你的人倾向形容你为：",
                  "answerA":"A 热和敏感",
                  "answerB":" B逻辑和正确"
                },
                {"id":2,"prop":"gender","model":"formValidate.gender2",
                  "question":"Q2. 下列哪一件事听起来比较吸引你?",
                  "answerA":"A 与恋人到有很多人且社交活动频繁的地方。",
                  "answerB":"B 呆在家中与恋人做一些特别的事情，例如说观赏一部有趣的录影带并享用你最喜欢的外卖食物。"},
                {"id":3,"prop":"gender","model":"formValidate.gender3",
                  "question":"Q3 你倾向通过以下哪种方式收集信息",
                  "answerA":"A 你对有可能发生之事的想像和期望。",
                  "answerB":" B 你对目前状况的实际认知。"},
                {"id":4,"prop":"gender","model":"formValidate.gender4",
                  "question":"Q4 哪种特质更像你：",
                  "answerA":"A 友善而仁慈",
                  "answerB":"B 冷静而理智"},
                {"id":5,"prop":"gender","model":"formValidate.gender5",
                  "question":"Q5 当和某人分手时：",
                  "answerA":" A 你通常让自己的情绪深陷其中，很难抽身出来。",
                  "answerB":"B 虽然你觉得受伤，但一旦下定决心，你会直截了当地将过去恋人的影子甩开。"},
                {"id":6,"prop":"gender","model":"formValidate.gender6",
                  "question":"Q6 当与一个人交往时，你倾向于看重：",
                  "answerA":" A 情感上的相容性：表达爱意和对另一半的需求很敏感。 ",
                  "answerB":" B 智慧上的相容性：沟通重要的想法；客观地讨论和辩论事情。  "},
                {"id":7,"prop":"gender","model":"formValidate.gender7",
                  "question":"Q7 你倾向拥有：",
                  "answerA":"A 很多认识的人和很亲密的朋友。  ",
                  "answerB":" B 一些很亲密的朋友和一些认识的人。"},
                {"id":8,"prop":"gender","model":"formValidate.gender8",
                  "question":"Q8 过去，你的爱人和恋人倾向对你说：",
                  "answerA":"A 你难道不可以安静一会儿吗？  ",
                  "answerB":"B 可以请你从你的世界中出来一下吗？"},
                {"id":9,"prop":"gender","model":"formValidate.gender9",
                  "question":"Q9 当你对一个约会觉得放心时，你偏向谈论：",
                  "answerA":"A 未来，关于改进或发明事物和生活的种种可能性。 ",
                  "answerB":"B 实际的、具体的、关于“此时此地”的事物。例如，你也许会谈论品酒的好方法，或你即将要参加的新奇旅程。"},
                {"id":10,"prop":"gender","model":"formValidate.gender10",
                  "question":"Q10 你倾向相信：",
                  "answerA":"A 你的直觉。    ",
                  "answerB":"B 你直接的观察和现成的经验。 "},
                {"id":11,"prop":"gender","model":"formValidate.gender11",
                  "question":"Q11 在约会中，你通常：",
                  "answerA":"A 整体来说很健谈。",
                  "answerB":"B 较安静并保留，直到你觉得舒服。"},
                {"id":12,"prop":"gender","model":"formValidate.gender12",
                  "question":"Q12 在第一次约会中：",
                  "answerA":"A 若你所约的人来迟了，你会很不高兴。",
                  "answerB":"B 一点儿都不在乎，因为你自己常常迟到。 "},
                {"id":13,"prop":"gender","model":"formValidate.gender13",
                  "question":"Q13 当你置身于一段关系中时，你倾向相信：",
                  "answerA":"A 永远有进步的空间。  ",
                  "answerB":" B 若它没有被破坏，不予修补。    "},
                {"id":14,"prop":"gender","model":"formValidate.gender14",
                  "question":"Q14 你是这种人:",
                  "answerA":"A 喜欢先纵观全局。  ",
                  "answerB":"B 喜欢先掌握细节。  "},
                {"id":15,"prop":"gender","model":"formValidate.gender15",
                  "question":"Q15 过去，你遇见你大部分的恋人是：",
                  "answerA":"A 在宴会中、夜总会、工作上、休闲活动中、会议上或当朋友介绍我给他们的朋友时。   ",
                  "answerB":"B 通过私人的方式，例如个人广告、录影约会，或是由亲密的朋友和家人介绍。"},
                {"id":16,"prop":"gender","model":"formValidate.gender16",
                  "question":"Q16 你是这类型的人：",
                  "answerA":" A 与其活在现实中，不如活在想像里。   ",
                  "answerB":"B 与其活在想像里，不如活在现实中。   "},
                {"id":17,"prop":"gender","model":"formValidate.gender17",
                  "question":"Q17 哪一项较常见：",
                  "answerA":" A 你准时出席而其他人都迟到。",
                  "answerB":" B 其他人都准时出席而你迟到。 "},
                {"id":18,"prop":"gender","model":"formValidate.gender18",
                  "question":"Q18 你偏好：",
                  "answerA":"A 事先知道约会的行程：要去哪里、有谁参加、你会在那里多久、该如何打扮。  ",
                  "answerB":"B 让约会自然地发生，不做太多事先的计划。 "},
                {"id":19,"prop":"gender","model":"formValidate.gender19",
                  "question":"Q19 你是此类型的人",
                  "answerA":" A 喜欢在一段时间里专心于一件事情直到完成。    ",
                  "answerB":" B 享受同时进行好几件事情。   "},
                {"id":20,"prop":"gender","model":"formValidate.gender20",
                  "question":"Q20 你倾向如此做决定",
                  "answerA":" A 首先依你的心意，然后依你的逻辑。   ",
                  "answerB":"B 首先依你的逻辑，然后依你的心意。 "},
                {"id":21,"prop":"gender","model":"formValidate.gender21",
                  "question":"Q21 你倾向从何处得到力量：",
                  "answerA":" A 朋友。 ",
                  "answerB":" B 自己的想法。 "},
                {"id":22,"prop":"gender","model":"formValidate.gender22",
                  "question":"Q22 你通常",
                  "answerA":"A 偏向于去想像一大堆关于即将来临的约会的事情。",
                  "answerB":"B 偏向于拘谨地想象即将来临的约会，只期待让它自然地发生"},
                {"id":23,"prop":"gender","model":"formValidate.gender23",
                  "question":"Q23 当你参加一个社交聚会时，你会：",
                  "answerA":" A 永远有进步的空间。",
                  "answerB":"B 若它没有被破坏，不予修补。"},
                {"id":24,"prop":"gender","model":"formValidate.gender24",
                  "question":"Q24 当你置身于一段关系中时，你倾向相信：",
                  "answerA":"A 在夜色很深时，一旦你开始投入，也许就是最晚离开的那一个。 ",
                  "answerB":"B 在夜晚刚开始的时候，我就疲倦了并且想回家。"},
                {"id":25,"prop":"gender","model":"formValidate.gender25",
                  "question":"Q25 当你不同意恋人的想法时：",
                  "answerA":"A 你尽可能地避免伤害对方的感情；若是会对对方造成伤害的话，你就不会说。",
                  "answerB":"B 你通常毫无保留地说话，并且对情人直言不讳，因为对的就是对的"},
                {"id":26,"prop":"gender","model":"formValidate.gender26",
                  "question":"Q26 你倾向比较能够察觉到",
                  "answerA":"A 当人们需要情感上的支持时。     ",
                  "answerB":"B 当人们不合逻辑时。   "},
                {"id":27,"prop":"gender","model":"formValidate.gender27",
                  "question":"Q27 若你有时间和金钱，你的朋友邀请你到国外度假，并且在前一天才通知，你会",
                  "answerA":" A 必须先检查你的时间表。",
                  "answerB":"B 立刻收拾行装。 "},
                {"id":28,"prop":"gender","model":"formValidate.gender28",
                  "question":"Q28 你选择的生活充满着：",
                  "answerA":"A 日程表和组织。 ",
                  "answerB":"B 自然发生和弹性。"}

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
          let result=[
            {
            "resulttitle":"ESTP挑战者型 -- 不间断地尝试新的挑战",
            "resultSrc":"http://p9zd0n0di.bkt.clouddn.com/test/echart1.png"
            },
            {
              "resulttitle":"ISTP 冒险家型 -- 平静的思考着，但间或的行为往往出人意料",
              "resultSrc":"http://p9zd0n0di.bkt.clouddn.com/test/echart2.png"
            },
            {
              "resulttitle":"ENFJ 教导型 -- 谆谆善诱地引导他人",
              "resultSrc":"http://p9zd0n0di.bkt.clouddn.com/test/echart3.png"
            },
            {
              "resulttitle":"INFJ 博爱型 -- 基于博爱的理想，设身处地的关怀他人",
              "resultSrc":"http://p9zd0n0di.bkt.clouddn.com/test/echart4.png"
            },
          ];
          this.$router.push({
            path:'/test/result1',
            query:result[0]
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
      width:90px;
      height:180px;
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
          font-size:16px;
        }
      }
    }

  }

</style>
