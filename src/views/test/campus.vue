<template>
    <div class="testwrap">
        <div class="backto"><img src="http://p9zd0n0di.bkt.clouddn.com/test/backto.png" @click="backto"></div>
      <div class="question_wrap">
        <Form v-model="form" ref="formValidate" :model="formValidate" :rules="ruleValidate">
          <div v-for="(item,index) in questions" :key="item.id" v-show="item.id == itemIndex"  style="display: none">
            <div class="question_tit">{{item.question}}</div>
            <FormItem :prop="item.prop" class="answer_cont">
              <RadioGroup v-model="item.model" v-on:on-change="changeRadio">
                <Radio label="male"> {{item.answerA}}</Radio>
                <Radio label="female"> {{item.answerB}}</Radio>
              </RadioGroup>
            </FormItem>
            <div>
              <Button v-show="!showSubmitBtn" :disabled="enableBtn" type="primary" size="small" @click="nextQuestion(item.id)">下一题</Button>
              <Button v-show="showSubmitBtn" @click="handleSubmit('formValidate')">提交</Button>
            </div>
          </div>

       <!--
          <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
          </FormItem>-->

        </Form>

      </div>
     <!-- <div class="test_header">
        <div class="test_header_cont commonWidth">

        </div>
      </div>-->
      <!--<div class="cam_wrap">
        <div class="test_wrap_cont commonWidth">
         &lt;!&ndash; <div class="test_nav">
            <ul>
              <li>性格测试</li>
              <li>职业测试</li>
              <li>英语测试</li>
              <li>学校测试</li>
            </ul>
          </div>&ndash;&gt;
          &lt;!&ndash;<div class="test_content">
            <div class="test_title"><h3>理想学校测试</h3></div>
              <Form v-model="form" ref="formValidate" :model="formValidate" :rules="ruleValidate">
                <div>1. 认识你的人倾向形容你为：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender1">
                    <Radio label="male">A 热情和敏感</Radio>
                    <Radio label="female">B 逻辑和正确</Radio>
                  </RadioGroup>
                </FormItem>
                <div>2. 下列哪一件事听起来比较吸引你？</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender2">
                    <Radio label="male"> A 与恋人到有很多人且社交活动频繁的地方。</Radio>
                    <Radio label="female"> B 呆在家中与恋人做一些特别的事情，例如说观赏一部有趣的录影带并享用你最喜欢的外卖食物。</Radio>
                  </RadioGroup>
                </FormItem>
                <div>3. 你倾向通过以下哪种方式收集信息：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender3">
                    <Radio label="male"> A 你对有可能发生之事的想像和期望。</Radio>
                    <Radio label="female"> B 你对目前状况的实际认知。 </Radio>
                  </RadioGroup>
                </FormItem>
                <div>4. 哪种特质更像你：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender4">
                    <Radio label="male"> A 友善而仁慈。                                              </Radio>
                    <Radio label="female"> B 冷静而理智。                                             </Radio>
                  </RadioGroup>
                </FormItem>
                <div>5. 当和某人分手时：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender5">
                    <Radio label="male"> A 你通常让自己的情绪深陷其中，很难抽身出来。                               </Radio>
                    <Radio label="female"> B 虽然你觉得受伤，但一旦下定决心，你会直截了当地将过去恋人的影子甩开。                 </Radio>
                  </RadioGroup>
                </FormItem>
                <div>6. 当与一个人交往时，你倾向于看重：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender6">
                    <Radio label="male"> A 情感上的相容性：表达爱意和对另一半的需求很敏感。                            </Radio>
                    <Radio label="female"> B 智慧上的相容性：沟通重要的想法；客观地讨论和辩论事情。                        </Radio>
                  </RadioGroup>
                </FormItem>
                <div>7. 你倾向拥有：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender7">
                    <Radio label="male"> A 很多认识的人和很亲密的朋友。                                      </Radio>
                    <Radio label="female"> B 一些很亲密的朋友和一些认识的人。                                   </Radio>
                  </RadioGroup>
                </FormItem>
                <div>8. 过去，你的爱人和恋人倾向对你说：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender8">
                    <Radio label="male"> A 你难道不可以安静一会儿吗？                                       </Radio>
                    <Radio label="female"> B 可以请你从你的世界中出来一下吗？                                   </Radio>
                  </RadioGroup>
                </FormItem>
                <div>9. 当你对一个约会觉得放心时，你偏向谈论：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender9">
                    <Radio label="male"> A 未来，关于改进或发明事物和生活的种种可能性。                              </Radio>
                    <Radio label="female"> B 实际的、具体的、关于“此时此地”的事物。例如，你也许会谈论品酒的好方法，或你即将要参加的新奇旅程。  </Radio>
                  </RadioGroup>
                </FormItem>
                <div>10. 你倾向相信：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender10">
                    <Radio label="male"> A 你的直觉。                                               </Radio>
                    <Radio label="female"> B 你直接的观察和现成的经验。                                      </Radio>
                  </RadioGroup>
                </FormItem>
                <div>11. 在约会中，你通常：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender11">
                    <Radio label="male"> A 整体来说很健谈。                                            </Radio>
                    <Radio label="female"> B 较安静并保留，直到你觉得舒服。                                    </Radio>
                  </RadioGroup>
                </FormItem>
                <div>12. 在第一次约会中：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender12">
                    <Radio label="male"> A 若你所约的人来迟了，你会很不高兴。                                   </Radio>
                    <Radio label="female"> B 一点儿都不在乎，因为你自己常常迟到。                                 </Radio>
                  </RadioGroup>
                </FormItem>
                <div>13. 当你置身于一段关系中时，你倾向相信：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender13">
                    <Radio label="male"> A 永远有进步的空间。                                           </Radio>
                    <Radio label="female"> B 若它没有被破坏，不予修补。                                      </Radio>
                  </RadioGroup>
                </FormItem>
                <div>14. 你是这种人:</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender14">
                    <Radio label="male">  A 喜欢先纵观全局。                                </Radio>
                    <Radio label="female">  B 喜欢先掌握细节。                                             </Radio>
                  </RadioGroup>
                </FormItem>
                <div>15. 过去，你遇见你大部分的恋人是：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender15">
                    <Radio label="male"> A 在宴会中、夜总会、工作上、休闲活动中、会议上或当朋友介绍我给他们的朋友时。               </Radio>
                    <Radio label="female">  B 通过私人的方式，例如个人广告、录影约会，或是由亲密的朋友和家人介绍。                  </Radio>
                  </RadioGroup>
                </FormItem>
                <div>16. 你是这类型的人：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender16">
                    <Radio label="male">  A 与其活在现实中，不如活在想像里。                                     </Radio>
                    <Radio label="female">  B 与其活在想像里，不如活在现实中。                                    </Radio>
                  </RadioGroup>
                </FormItem>
                <div>17. 哪一项较常见：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender17">
                    <Radio label="male">  A 你准时出席而其他人都迟到。                                         </Radio>
                    <Radio label="female">  B 其他人都准时出席而你迟到。                                        </Radio>
                  </RadioGroup>
                </FormItem>
                <div>18. 你偏好：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender18">
                    <Radio label="male"> A 事先知道约会的行程：要去哪里、有谁参加、你会在那里多久、该如何打扮。                    </Radio>
                    <Radio label="female"> B 让约会自然地发生，不做太多事先的计划。                                 </Radio>
                  </RadioGroup>
                </FormItem>
                <div>19. 你是此类型的人：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender19">
                    <Radio label="male">  A 喜欢在一段时间里专心于一件事情直到完成。                                 </Radio>
                    <Radio label="female">  B 享受同时进行好几件事情。                                          </Radio>
                  </RadioGroup>
                </FormItem>
                <div>20. 你倾向如此做决定：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender20">
                    <Radio label="male">  A 首先依你的心意，然后依你的逻辑。                                     </Radio>
                    <Radio label="female">  B 首先依你的逻辑，然后依你的心意。                                      </Radio>
                  </RadioGroup>
                </FormItem>
                <div>21. 你倾向从何处得到力量：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender21">
                    <Radio label="male">  A 朋友。                                                 </Radio>
                    <Radio label="female">  B 自己的想法。                                                </Radio>
                  </RadioGroup>
                </FormItem>
                <div>22. 你通常：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender22">
                    <Radio label="male"> A 偏向于去想像一大堆关于即将来临的约会的事情。                              </Radio>
                    <Radio label="female">  B 偏向于拘谨地想象即将来临的约会，只期待让它自然地发生。                          </Radio>
                  </RadioGroup>
                </FormItem>
                <div>23. 当你参加一个社交聚会时，你会：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender23">
                    <Radio label="male"> A 永远有进步的空间。                                           </Radio>
                    <Radio label="female"> B 若它没有被破坏，不予修补。                                      </Radio>
                  </RadioGroup>
                </FormItem>
                <div>24. 当你置身于一段关系中时，你倾向相信：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender24">
                    <Radio label="male">  A 在夜色很深时，一旦你开始投入，也许就是最晚离开的那一个。                          </Radio>
                    <Radio label="female">  B 在夜晚刚开始的时候，我就疲倦了并且想回家。                               </Radio>
                  </RadioGroup>
                </FormItem>
                <div>25. 当你不同意恋人的想法时：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender25">
                    <Radio label="male"> A 你尽可能地避免伤害对方的感情；若是会对对方造成伤害的话，你就不会说。                    </Radio>
                    <Radio label="female">  B 你通常毫无保留地说话，并且对情人直言不讳，因为对的就是对的。                     </Radio>
                  </RadioGroup>
                </FormItem>
                <div>26. 你倾向比较能够察觉到：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender26">
                    <Radio label="male">  A 当人们需要情感上的支持时。                                         </Radio>
                    <Radio label="female">  B 当人们不合逻辑时。                                               </Radio>
                  </RadioGroup>
                </FormItem>
                <div>27. 若你有时间和金钱，你的朋友邀请你到国外度假，并且在前一天才通知，你会：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender27">
                    <Radio label="male">  A 必须先检查你的时间表。                                           </Radio>
                    <Radio label="female">  B 立刻收拾行装。                                                </Radio>
                  </RadioGroup>
                </FormItem>
                <div>28. 你选择的生活充满着：</div>
                <FormItem prop="gender">
                  <RadioGroup v-model="formValidate.gender28">
                    <Radio label="male">  A 日程表和组织。                                              </Radio>
                    <Radio label="female">  B 自然发生和弹性。                                             </Radio>
                  </RadioGroup>
                </FormItem>
                <FormItem>
                  <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                  <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                </FormItem>

              </Form>
          </div>&ndash;&gt;
        </div>
      </div>-->
     <!-- <div class="test_footer">
        <div class="test_footer_cont commonWidth">&copy; 天行者版权所有</div>
      </div>
      <div class="sidebar_nav"></div>-->
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
              questions:[
                {id:1,prop:'gender',model:'formValidate.gender1',question:'Q1. 认识你的人倾向形容你为：',answerA:' A 与恋人到有很多人且社交活动频繁的地方。',answerB:' B 呆在家中与恋人做一些特别的事情，例如说观赏一部有趣的录影带并享用你最喜欢的外卖食物。'},
                {id:2,prop:'gender',model:'formValidate.gender2',question:'Q2. 你倾向通过以下哪种方式收集信息：',answerA:' A 你对有可能发生之事的想像和期望。',answerB:' B 你对目前状况的实际认知。 '},
                {id:3,prop:'gender',model:'formValidate.gender3',question:'Q3',answerA:'11',answerB:'22'},
                {id:4,prop:'gender',model:'formValidate.gender4',question:'Q4',answerA:'333',answerB:'44'},
              ]
            }
        },
      methods:{
        backto(){
          this.$router.push({
            path:'/index'
          })
        },
        changeRadio(e){
          //console.log(e);
          if(e){
            this.enableBtn=false;
          }
        },
        nextQuestion(ind){
          //console.log(ind);
          if(ind == this.questions.length){
            this.showSubmitBtn=true;
            this.itemIndex=ind;
          }else{
            this.itemIndex=ind+1;
            this.enableBtn=true;
          }
        },
        handleSubmit(){

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
