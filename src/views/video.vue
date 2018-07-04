<template>
    <div class="videowrap">
      <time-cont :endTime="time" :endText="endText" :callback="callback" class="countStyle"></time-cont>
      <pop :isShow="isShow"></pop>
      <div class="backto"><img src="http://p9zd0n0di.bkt.clouddn.com/video/backto.png" @click="backto"></div>
      <div class="videoBox">
        <div class="cvideocont_l">
          <video  id="videoDom" :src="videoSrc" controls="controls">
            您的浏览器不支持 video 标签。
          </video>
        </div>
        <div class="cvideocont_r">
          <div class="r_title">
            <Select v-model="model8" clearable style="width:200px" v-on:on-change="onchange">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
          <ul class="r_list">
            <li v-for="(item,index) in listU" :key="item.id" @click="handleClickItem(item)"><img :src="item.imgSrc"><span>{{item.text}}</span></li>
          </ul>
        </div>
      </div>

    </div>
</template>
<script>
  import timeCont from '../components/countDown';
  import pop from '../components/pop';
  import { mapState } from 'vuex';
  export default {
    data(){
      return {

        modal1: false,
        isShow:false,
        /* endTime:1539687195949,*/
        endText:'体验时间结束',
        timenum:0,
        timmer:{
          type:Object
        },


        videoSrc:'http://7xnt3p.com1.z0.glb.clouddn.com/%E5%A4%A9%E8%A1%8C%E8%80%85%E7%95%99%E5%AD%A6%E4%BD%93%E9%AA%8C%E4%B8%AD%E5%BF%83_01.mp4',
        cityList: [
          {
            value: 'a',
            label: '加拿大大学'
          },
          {
            value: 'b',
            label: '英国大学'
          },
          {
            value: 'c',
            label: '法国大学'
          },
          {
            value: 'd',
            label: '美国大学'
          },
          {
            value: 'e',
            label: '德国大学'
          },
          {
            value: 'f',
            label: '意大利大学'
          },
          {
            value: 'g',
            label: '新加坡大学'
          },
          {
            value: 'h',
            label: '新西兰大学'
          },
          {
            value: 'i',
            label: '澳洲大学'
          },
          {
            value: 'j',
            label: '西班牙大学'
          },
          {
            value: 'k',
            label: '香港大学'
          },
          {
            value: 'l',
            label: '荷兰大学'
          },



        ],
        model8: 'a',
        listIndex:"",
        lists:
          {
            'a':[
              {"id":1,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%A4%9A%E4%BC%A6%E5%A4%9A%E5%A4%A7%E5%AD%A6.jpg","text":"多伦多大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%A4%9A%E4%BC%A6%E5%A4%9A%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":2,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%B8%83%E9%B2%81%E5%85%8B%E5%A4%A7%E5%AD%A6.jpg","text":"布鲁克大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%B8%83%E9%B2%81%E5%85%8B%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":3,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E5%8A%A0%E6%8B%BF%E5%A4%A7%E6%B8%A5%E5%A4%AA%E5%8D%8E%E5%A4%A7%E5%AD%A6.jpg","text":"渥太华大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%8A%A0%E6%8B%BF%E5%A4%A7%E6%B8%A5%E5%A4%AA%E5%8D%8E%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":4,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E5%8A%A0%E6%8B%BF%E5%A4%A7%E6%BB%91%E9%93%81%E5%8D%A2%E5%A4%A7%E5%AD%A6.jpg","text":"滑铁卢大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%8A%A0%E6%8B%BF%E5%A4%A7%E6%BB%91%E9%93%81%E5%8D%A2%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":5,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E5%8A%A0%E6%8B%BF%E5%A4%A7%E7%BA%A6%E5%85%8B%E5%A4%A7%E5%AD%A6.jpg","text":"约克大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%8A%A0%E6%8B%BF%E5%A4%A7%E7%BA%A6%E5%85%8B%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":6,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E5%8A%A0%E6%8B%BF%E5%A4%A7%E7%BB%B4%E5%A4%9A%E5%88%A9%E4%BA%9A%E5%A4%A7%E5%AD%A6.jpg","text":"维多利亚大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%8A%A0%E6%8B%BF%E5%A4%A7%E7%BB%B4%E5%A4%9A%E5%88%A9%E4%BA%9A%E5%A4%A7%E5%AD%A64.mp4"},
              {"id":7,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E5%8A%A0%E6%8B%BF%E5%A4%A7%E8%92%99%E7%89%B9%E5%88%A9%E5%B0%94%E5%A4%A7%E5%AD%A6.jpg","text":"蒙特利尔大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%8A%A0%E6%8B%BF%E5%A4%A7%E8%92%99%E7%89%B9%E5%88%A9%E5%B0%94%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":8,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E5%8A%A0%E6%8B%BF%E5%A4%A7%E9%98%BF%E5%B0%94%E4%BC%AF%E5%A1%94%E5%A4%A7%E5%AD%A6.jpg","text":"阿尔伯塔大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%8A%A0%E6%8B%BF%E5%A4%A7%E9%98%BF%E5%B0%94%E4%BC%AF%E5%A1%94%E5%A4%A7%E5%AD%A6.mp4"},
            ],
            'b':[
              {"id":1,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E8%8B%B1%E5%9B%BD%E4%BC%A6%E6%95%A6%E5%A4%A7%E5%AD%A6.jpg","text":"伦敦大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E8%8B%B1%E5%9B%BD%E4%BC%A6%E6%95%A6%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":2,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E8%8B%B1%E5%9B%BD%E4%BC%A6%E6%95%A6%E6%94%BF%E6%B2%BB%E7%BB%8F%E6%B5%8E%E5%AD%A6%E9%99%A2.jpg","text":"伦敦政治经济学院","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E8%8B%B1%E5%9B%BD%E4%BC%A6%E6%95%A6%E6%94%BF%E6%B2%BB%E7%BB%8F%E6%B5%8E%E5%AD%A6%E9%99%A2.mp4"},
              {"id":3,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E8%8B%B1%E5%9B%BD%E5%85%B0%E8%80%83%E6%96%AF%E7%89%B9%E5%A4%A7%E5%AD%A6.jpg","text":"兰考斯特大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E8%8B%B1%E5%9B%BD%E5%85%B0%E8%80%83%E6%96%AF%E7%89%B9%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":4,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E8%8B%B1%E5%9B%BD%E5%89%91%E6%A1%A5%E5%A4%A7%E5%AD%A6.jpg","text":"剑桥大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E8%8B%B1%E5%9B%BD%E5%89%91%E6%A1%A5%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":5,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E8%8B%B1%E5%9B%BD%E5%9C%A3%E5%AE%89%E5%BE%B7%E9%B2%81%E6%96%AF%E5%A4%A7%E5%AD%A6.jpg","text":"安德鲁斯大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E8%8B%B1%E5%9B%BD%E5%9C%A3%E5%AE%89%E5%BE%B7%E9%B2%81%E6%96%AF%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":6,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E8%8B%B1%E5%9B%BD%E6%9D%9C%E4%BC%A6%E5%A4%A7%E5%AD%A6.jpg","text":"杜伦大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E8%8B%B1%E5%9B%BD%E6%9D%9C%E4%BC%A6%E5%A4%A7%E5%AD%A6.mp4"},
            ],
            'c':[
              {"id":1,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%B3%95%E5%9B%BD%E4%B8%AD%E5%A4%AE%E7%90%86%E5%B7%A5%E5%AD%A6%E9%99%A2.jpg","text":"中央理工学院","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%B3%95%E5%9B%BD%E4%B8%AD%E5%A4%AE%E7%90%86%E5%B7%A5%E5%AD%A6%E9%99%A2.mp4"},
              {"id":2,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%B3%95%E5%9B%BD%E5%B7%B4%E9%BB%8E%E6%94%BF%E6%B2%BB%E5%AD%A6%E9%99%A2.jpg","text":"巴黎政治学院","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%B3%95%E5%9B%BD%E5%B7%B4%E9%BB%8E%E6%94%BF%E6%B2%BB%E5%AD%A6%E9%99%A2.mp4"},
              {"id":3,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%B3%95%E5%9B%BD%E5%B7%B4%E9%BB%8E%E7%AC%AC%E4%B8%80%E5%A4%A7%E5%AD%A6.jpg","text":"巴黎第一大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%B3%95%E5%9B%BD%E5%B7%B4%E9%BB%8E%E7%AC%AC%E4%B8%80%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":4,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%B3%95%E5%9B%BD%E6%A0%BC%E5%8B%92%E8%AF%BA%E5%B8%83%E5%B0%94%E5%A4%A7%E5%AD%A6.jpg","text":"格勒诺布尔大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%B3%95%E5%9B%BD%E6%A0%BC%E5%8B%92%E8%AF%BA%E5%B8%83%E5%B0%94%E5%A4%A7%E5%AD%A6.mp4"},
            ],
            'd':[
              {"id":1,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E7%BE%8E%E5%9B%BD%E4%BF%84%E5%8B%92%E5%86%88%E5%A4%A7%E5%AD%A6.jpg","text":"俄勒冈大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%B3%95%E5%9B%BD%E4%B8%AD%E5%A4%AE%E7%90%86%E5%B7%A5%E5%AD%A6%E9%99%A2.mp4"},
              {"id":2,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E7%BE%8E%E5%9B%BD%E6%96%AF%E5%9D%A6%E7%A6%8F%E5%A4%A7%E5%AD%A6.jpg","text":"斯坦福大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E7%BE%8E%E5%9B%BD%E6%96%AF%E5%9D%A6%E7%A6%8F%E5%A4%A7%E5%AD%A61.mp4"},
              {"id":3,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E7%BE%8E%E5%9B%BD%E6%99%AE%E6%9E%97%E6%96%AF%E9%A1%BF%E5%A4%A7%E5%AD%A6.jpg","text":"普林斯顿大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E7%BE%8E%E5%9B%BD%E6%99%AE%E6%9E%97%E6%96%AF%E9%A1%BF%E5%A4%A7%E5%AD%A61.mp4"},
              {"id":4,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E7%BE%8E%E5%9B%BD%E7%88%B1%E8%BE%BE%E8%8D%B7%E5%A4%A7%E5%AD%A6.jpg","text":"爱达荷大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E7%BE%8E%E5%9B%BD%E7%88%B1%E8%BE%BE%E8%8D%B7%E5%A4%A7%E5%AD%A63.mp4"},
              {"id":5,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E7%BE%8E%E5%9B%BD%E8%80%B6%E9%B2%81%E5%A4%A7%E5%AD%A6.jpg","text":"耶鲁大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E7%BE%8E%E5%9B%BD%E8%80%B6%E9%B2%81%E5%A4%A7%E5%AD%A6.mp4"},
            ],
            'e':[
              {"id":1,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E5%BE%B7%E5%9B%BD%E6%85%95%E5%B0%BC%E9%BB%91%E5%A4%A7%E5%AD%A6.jpg","text":"慕尼黑大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%BE%B7%E5%9B%BD%E6%85%95%E5%B0%BC%E9%BB%91%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":2,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E5%BE%B7%E5%9B%BD%E6%85%95%E5%B0%BC%E9%BB%91%E5%B7%A5%E4%B8%9A%E5%A4%A7%E5%AD%A6.jpg","text":"慕尼黑工业大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%BE%B7%E5%9B%BD%E6%85%95%E5%B0%BC%E9%BB%91%E5%B7%A5%E4%B8%9A%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":3,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E5%BE%B7%E5%9B%BD%E6%9F%8F%E6%9E%97%E5%B7%A5%E4%B8%9A%E5%A4%A7%E5%AD%A6.jpg","text":"柏林工业大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%BE%B7%E5%9B%BD%E6%9F%8F%E6%9E%97%E5%B7%A5%E4%B8%9A%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":4,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E5%BE%B7%E5%9B%BD%E6%9F%8F%E6%9E%97%E8%87%AA%E7%94%B1%E5%A4%A7%E5%AD%A6.jpg","text":"柏林自由大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%BE%B7%E5%9B%BD%E6%9F%8F%E6%9E%97%E8%87%AA%E7%94%B1%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":5,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E5%BE%B7%E5%9B%BD%E6%B5%B7%E5%BE%B7%E5%A0%A1%E5%A4%A7%E5%AD%A6.jpg","text":"海德堡大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E5%BE%B7%E5%9B%BD%E6%B5%B7%E5%BE%B7%E5%A0%A1%E5%A4%A7%E5%AD%A6.mp4"},
            ],
            'f':[
              {"id":1,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%84%8F%E5%A4%A7%E5%88%A9%E4%BD%9B%E7%BD%97%E4%BC%A6%E8%90%A8%E5%A4%A7%E5%AD%A6.jpg","text":"佛罗伦萨大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%84%8F%E5%A4%A7%E5%88%A9%E4%BD%9B%E7%BD%97%E4%BC%A6%E8%90%A8%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":2,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%84%8F%E5%A4%A7%E5%88%A9%E5%A8%81%E5%B0%BC%E6%96%AF%E5%A4%A7%E5%AD%A6.jpg","text":"威尼斯大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%84%8F%E5%A4%A7%E5%88%A9%E5%A8%81%E5%B0%BC%E6%96%AF%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":3,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%84%8F%E5%A4%A7%E5%88%A9%E5%B8%95%E5%A4%9A%E7%93%A6%E5%A4%A7%E5%AD%A6.jpg","text":"帕多瓦大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%84%8F%E5%A4%A7%E5%88%A9%E5%B8%95%E5%A4%9A%E7%93%A6%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":4,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%84%8F%E5%A4%A7%E5%88%A9%E7%B1%B3%E5%85%B0%E5%A4%A7%E5%AD%A6.jpg","text":"米兰大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%84%8F%E5%A4%A7%E5%88%A9%E7%B1%B3%E5%85%B0%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":5,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%84%8F%E5%A4%A7%E5%88%A9%E7%BD%97%E9%A9%AC%E7%AC%AC%E4%B8%80%E5%A4%A7%E5%AD%A6.jpg","text":"罗马第一大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%84%8F%E5%A4%A7%E5%88%A9%E7%BD%97%E9%A9%AC%E7%AC%AC%E4%B8%80%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":6,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%84%8F%E5%A4%A7%E5%88%A9%E9%83%BD%E7%81%B5%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6.jpg","text":"都灵工业大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%84%8F%E5%A4%A7%E5%88%A9%E9%83%BD%E7%81%B5%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6.mp4"},
            ],
            'g':[
              {"id":1,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%8D%97%E6%B4%8B%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6.jpg","text":"南洋理工大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%8D%97%E6%B4%8B%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":2,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%9B%BD%E7%AB%8B%E5%A4%A7%E5%AD%A6.jpg","text":"国立大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%9B%BD%E7%AB%8B%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":3,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%96%B0%E5%8A%A0%E5%9D%A1%E7%90%86%E5%B7%A5%E5%AD%A6%E9%99%A2.jpg","text":"理工学院","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%96%B0%E5%8A%A0%E5%9D%A1%E7%90%86%E5%B7%A5%E5%AD%A6%E9%99%A2.mp4"},
              {"id":4,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%96%B0%E5%8A%A0%E5%9D%A1%E7%AE%A1%E7%90%86%E5%A4%A7%E5%AD%A6.jpg","text":"管理大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%96%B0%E5%8A%A0%E5%9D%A1%E7%AE%A1%E7%90%86%E5%A4%A7%E5%AD%A6.mp4"},
            ],
            'h':[
              {"id":1,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%96%B0%E8%A5%BF%E5%85%B0%E5%9C%A3%E7%BB%8F%E5%AD%A6%E9%99%A2.jpg","text":"圣经学院","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%96%B0%E8%A5%BF%E5%85%B0%E5%9C%A3%E7%BB%8F%E5%AD%A6%E9%99%A2.mp4"},
              {"id":2,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%96%B0%E8%A5%BF%E5%85%B0%E5%A5%A5%E5%85%8B%E5%85%B0%E5%A4%A7%E5%AD%A6.jpg","text":"奥克兰大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%96%B0%E8%A5%BF%E5%85%B0%E5%A5%A5%E5%85%8B%E5%85%B0%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":3,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%96%B0%E8%A5%BF%E5%85%B0%E5%A5%A5%E5%85%8B%E5%85%B0%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6.jpg","text":"奥克兰理工大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%96%B0%E8%A5%BF%E5%85%B0%E5%A5%A5%E5%85%8B%E5%85%B0%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":4,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%96%B0%E8%A5%BF%E5%85%B0%E6%80%80%E5%8D%A1%E6%89%98%E5%A4%A7%E5%AD%A6.jpg","text":"怀卡托大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%96%B0%E8%A5%BF%E5%85%B0%E6%80%80%E5%8D%A1%E6%89%98%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":5,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%96%B0%E8%A5%BF%E5%85%B0%E8%81%94%E5%90%88%E7%90%86%E5%B7%A5%E5%AD%A6%E9%99%A2.jpg","text":"联合理工学院","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%96%B0%E8%A5%BF%E5%85%B0%E8%81%94%E5%90%88%E7%90%86%E5%B7%A5%E5%AD%A6%E9%99%A2.mp4"},
            ],
            'i':[
              {"id":1,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E5%9B%BD%E7%AB%8B%E5%A4%A7%E5%AD%A6.jpg","text":"澳大利亚国立大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E5%9B%BD%E7%AB%8B%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":2,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E5%A2%A8%E5%B0%94%E6%9C%AC%E5%A4%A7%E5%AD%A6.jpg","text":"墨尔本大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%BE%B3%E6%B4%B2%E5%A2%A8%E5%B0%94%E6%9C%AC%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":3,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E6%82%89%E5%B0%BC%E5%A4%A7%E5%AD%A6.jpg","text":"悉尼大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%BE%B3%E6%B4%B2%E6%82%89%E5%B0%BC%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":4,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E6%96%B0%E5%8D%97%E5%A8%81%E5%B0%94%E5%A3%AB%E5%A4%A7%E5%AD%A6.jpg","text":"新南威尔士大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%BE%B3%E6%B4%B2%E6%96%B0%E5%8D%97%E5%A8%81%E5%B0%94%E5%A3%AB%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":5,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E8%8E%AB%E7%BA%B3%E4%BB%80%E5%A4%A7%E5%AD%A6.jpg","text":"莫纳什大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%BE%B3%E6%B4%B2%E8%8E%AB%E7%BA%B3%E4%BB%80%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":6,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E9%98%BF%E5%BE%B7%E8%8E%B1%E5%BE%B7%E5%A4%A7%E5%AD%A6.jpg","text":"阿德莱德大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E6%BE%B3%E6%B4%B2%E9%98%BF%E5%BE%B7%E8%8E%B1%E5%BE%B7%E5%A4%A7%E5%AD%A6.mp4"},
            ],
            'j':[
              {"id":1,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E8%A5%BF%E7%8F%AD%E7%89%99%E5%8A%A0%E6%B3%B0%E7%BD%97%E5%B0%BC%E8%A5%BF%E4%BA%9A%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6.jpg","text":"加泰罗尼西亚大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E8%A5%BF%E7%8F%AD%E7%89%99%E5%8A%A0%E6%B3%B0%E7%BD%97%E5%B0%BC%E8%A5%BF%E4%BA%9A%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":2,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E8%A5%BF%E7%8F%AD%E7%89%99%E5%B7%B4%E5%A1%9E%E7%BD%97%E9%82%A3%E5%A4%A7%E5%AD%A6.jpg","text":"巴塞罗那大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E8%A5%BF%E7%8F%AD%E7%89%99%E5%B7%B4%E5%A1%9E%E7%BD%97%E9%82%A3%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":3,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E8%A5%BF%E7%8F%AD%E7%89%99%E5%B7%B4%E6%96%AF%E5%85%8B%E5%A4%A7%E5%AD%A6.jpg","text":"巴斯克大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E8%A5%BF%E7%8F%AD%E7%89%99%E5%B7%B4%E6%96%AF%E5%85%8B%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":4,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E8%A5%BF%E7%8F%AD%E7%89%99%E7%93%A6%E4%BC%A6%E8%A5%BF%E4%BA%9A%E5%A4%A7%E5%AD%A6.jpg","text":"瓦伦西亚大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E8%A5%BF%E7%8F%AD%E7%89%99%E7%93%A6%E4%BC%A6%E8%A5%BF%E4%BA%9A%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":5,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E8%A5%BF%E7%8F%AD%E7%89%99%E8%90%A8%E6%8B%89%E6%9B%BC%E5%8D%A1%E5%A4%A7%E5%AD%A6.jpg","text":"萨拉曼卡大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E8%A5%BF%E7%8F%AD%E7%89%99%E8%90%A8%E6%8B%89%E6%9B%BC%E5%8D%A1%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":6,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E5%B0%94%E5%8D%A1%E6%8B%89%E5%A4%A7%E5%AD%A6.jpg","text":"阿尔卡拉大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E5%B0%94%E5%8D%A1%E6%8B%89%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":7,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A9%AC%E5%BE%B7%E9%87%8C%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6.jpg","text":"马德里理工大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A9%AC%E5%BE%B7%E9%87%8C%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6.mp4"},
            ],
            'k':[
              {"id":1,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E9%A6%99%E6%B8%AF%E4%B8%AD%E6%96%87%E5%A4%A7%E5%AD%A6.jpg","text":"香港中文大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E9%A6%99%E6%B8%AF%E4%B8%AD%E6%96%87%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":2,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E9%A6%99%E6%B8%AF%E5%9F%8E%E5%B8%82%E5%A4%A7%E5%AD%A6.jpg","text":"城市大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E9%A6%99%E6%B8%AF%E5%9F%8E%E5%B8%82%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":3,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E9%A6%99%E6%B8%AF%E5%A4%A7%E5%AD%A6.jpg","text":"香港大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E9%A6%99%E6%B8%AF%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":4,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E9%A6%99%E6%B8%AF%E6%B5%B8%E4%BC%9A%E5%A4%A7%E5%AD%A6.jpg","text":"浸会大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E9%A6%99%E6%B8%AF%E6%B5%B8%E4%BC%9A%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":5,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E9%A6%99%E6%B8%AF%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6.jpg","text":"科技大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E9%A6%99%E6%B8%AF%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%A6.mp4"},
            ],
            'l':[
              {"id":1,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E8%8D%B7%E5%85%B0%E8%8E%B1%E9%A1%BF%E5%A4%A7%E5%AD%A6.jpg","text":"莱顿大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E8%8D%B7%E5%85%B0%E8%8E%B1%E9%A1%BF%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":2,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E8%8D%B7%E5%85%B0%E9%98%BF%E5%A7%86%E6%96%AF%E7%89%B9%E4%B8%B9%E5%A4%A7%E5%AD%A6.jpg","text":"阿姆斯特丹大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E8%8D%B7%E5%85%B0%E9%98%BF%E5%A7%86%E6%96%AF%E7%89%B9%E4%B8%B9%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":3,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E8%8D%B7%E5%85%B0%E9%98%BF%E5%A7%86%E6%96%AF%E7%89%B9%E4%B8%B9%E8%87%AA%E7%94%B1%E5%A4%A7%E5%AD%A6.jpg","text":"阿姆斯特丹自由大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E8%8D%B7%E5%85%B0%E9%98%BF%E5%A7%86%E6%96%AF%E7%89%B9%E4%B8%B9%E8%87%AA%E7%94%B1%E5%A4%A7%E5%AD%A6.mp4"},
              {"id":4,"imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/img/%E8%8D%B7%E5%85%B0%E9%A9%AC%E6%96%AF%E7%89%B9%E9%87%8C%E8%B5%AB%E7%89%B9%E5%A4%A7%E5%AD%A6.jpg","text":"马斯特里赫特大学","videoSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/%E8%8D%B7%E5%85%B0%E9%A9%AC%E6%96%AF%E7%89%B9%E9%87%8C%E8%B5%AB%E7%89%B9%E5%A4%A7%E5%AD%A6.mp4"},
             ],

        }

      }
    },
    components:{timeCont,pop},
    computed:{
      listU:{
        get:function() {
          return this.listIndex;
        },
        set:function(val,newv){
          return val;
        }
      },
      time(){
        let date =new Date().getTime();
        console.log("time"+this.endTime);
        return this.endTime*60*1000+date;
      },
      endTime:{
        get:function(){
          return  this.$store.state.countime;
        },
        set:function(val){
          console.log("set"+val)
          return val;
        }

      },
      ...mapState({
        countime(state){
          return state;
        }
      })
    },

    methods:{
      backto(){
        this.$router.push({
          path:'/index'
        })
      },
      callback(){
        let timestamp=new Date().getTime();
        console.log(this.time)
        if(this.time <= timestamp){
          this.isShow=true;
        }
      },
      getTime(){
        let a= document.cookie;
        var param={"userid":""};
        if(a && a!=""){
          let b=a.split(',')[0];
          param.userid= b.split('=')[1];
        }
        var _this=this;
        this.$http.get('http://112.74.25.26/user/timeout',{params:param}).then((res)=>{
          //console.log(res);
          this.timenum=parseInt(res.data.msg);
          debugger
          //console.log(this.$store);
          this.$store.dispatch('setT', { countime:this.timenum });
          var _this=this;

          let currenttime=new Date();

          currenttime.setTime(currenttime.getTime()+this.timenum*60*1000);
          //console.log(currenttime);
          let endt=currenttime.getTime();
          //console.log(1+endt);
          this.endTime=this.timenum;
          console.log("endtime"+this.endTime)
        }).catch((err)=>{
          console.log(err)
        })
      },
      handleClickItem(item){
          console.log(item);
          let _dom=document.getElementById('videoDom');
          _dom.src=item.videoSrc;
          _dom.autoplay=true;
      },
      onchange(e){
        this.listU=this.lists[e];
        this.listIndex=this.lists[e];
      }
    },
    mounted(){
      this.getTime();
      this.endTime=this.$store.state.countime;
      var _this=this
      this.$nextTick(function () {
        this.timmer=setInterval(function(){
          _this.timenum=_this.timenum-1
          var now =_this.timenum;
          _this.$store.dispatch('settime', { countime:now });
        }, 60000);
      })
    }
  }
</script>
<style lang="less">
  .videowrap{
    width:100%;
    height:100%;
    background: url('http://p9zd0n0di.bkt.clouddn.com/video/video_bg.png')no-repeat center center;
    background-size: 100% 100%;
    min-width: 860px;
    min-height: 650px;
    .countStyle{
      display: block;
      position: fixed;
      width:120px;height:30px;
      bottom:10px;
      right:10px;
      color:#fff;
      font-size:12px;
    }
    .backto{
      position:absolute;
      left:50px;
      top:45px;
      width:80px;height:35px;
      cursor: pointer;
      img{
        width:80px;height:35px;
      }
    }
    .videoBox{
      width:93%;
      height:60%;
      position:absolute;
      left:50%;
      top:50%;
      transform: translate(-50%,-50%);
      text-align: center;

      .cvideocont_l{
        float:left;
        width:66%;
        height:100%;
        border:1px solid #ffffff;margin-right:10px;
        background:url("http://p9zd0n0di.bkt.clouddn.com/video/playicon.png") no-repeat center center #000;
        background-size:70px 70px;
        cursor: pointer;
        video{
          width:100%;
          height: 100%;
        }
      }
      .cvideocont_r{
        float:right;width:30%;
        height:100%;
        .r_title{
          width:100%;height:40px;
          border-bottom:2px solid #368cf8;
          .ivu-select{
            width: 100%!important;
            .ivu-select-selection{
              background-color:transparent !important;
            }
          }
          span{
            color:#ffffff;
            font-size:16px;
          }
        }
        .r_list{
          padding-top:20px;
          height:90%;
          list-style: none;
          text-align: left;
          overflow:auto;
          li{
            width:100%;height:23%;
            line-height: 22%;
            border-bottom:1px solid #2f7bda;
            margin-bottom: 10px;
            cursor: pointer;
            img{
              width:30%;height:80%;
            }
            span{
              color:#fff;
              font-size:18px;
            }
          }
        }
    }
    }
  }
</style>
