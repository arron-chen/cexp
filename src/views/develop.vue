<template>
    <div class="devewrap">
      <count></count>
      <div class="backto"><img src="http://media.tianxingzhe.vip/video/backto.png" @click="backto"></div>
      <div class="devecont_l">
          <ul>
            <li v-for="(item,index) in tabs" :class="{active:index == num}" @click="handleClickItem(index)">{{item.text}}</li>
          </ul>
      </div>
      <keep-alive>
      <div class="devecont_r" v-show="num == 0">
          <div class="devcont_r_l">
            <ul v-show="num1 == 0">
              <li v-for="(item,index) in content0" @click="handleClickTo(item.children)">
                <div class="item_img">
                  <img :src="item.imgSrc">
                  <!--<img v-for="(img,ind) in item.children"-->
                       <!--v-preview="img.url"-->
                       <!--:src="img.url"-->
                       <!--:key="ind"-->
                       <!--preview-title-enable="true"-->
                       <!--preview-nav-enable="true">-->
                </div>
                <div class="item_text">
                  <h3>{{item.name}}</h3>
                  <p>录取院校:{{item.school}}<br>专业:{{item.major}}</p></div>
              </li>
            </ul>
            <ul v-show="num1 == 1">
              <li v-for="(item,index) in content1" @click="handleClickTo(item.children)">
                <div class="item_img"><img :src="item.imgSrc"></div>
                <div class="item_text">
                  <h3>{{item.name}}</h3>
                  <p>录取院校:{{item.school}}<br>专业:{{item.major}}</p></div>
              </li>
            </ul>
            <ul v-show="num1 == 2">
              <li v-for="(item,index) in content2" @click="handleClickTo(item.children)">
                <div class="item_img"><img :src="item.imgSrc"></div>
                <div class="item_text">
                  <h3>{{item.name}}</h3>
                  <p>录取院校:{{item.school}}<br>专业:{{item.major}}</p></div>
              </li>
            </ul>
            <ul v-show="num1 == 3">
              <li v-for="(item,index) in content3" @click="handleClickTo(item.children)">
                <div class="item_img"><img :src="item.imgSrc"></div>
                <div class="item_text">
                  <h3>{{item.name}}</h3>
                  <p>录取院校:{{item.school}}<br>专业:{{item.major}}</p></div>
              </li>
            </ul>
            <ul v-show="num1 == 4">
              <li v-for="(item,index) in content4" @click="handleClickTo(item.children)">
                <div class="item_img"><img :src="item.imgSrc"></div>
                <div class="item_text">
                  <h3>{{item.name}}</h3>
                  <p>录取院校:{{item.school}}<br>专业:{{item.major}}</p></div>
              </li>
            </ul>
            <ul v-show="num1 == 5">
              <li v-for="(item,index) in content5" @click="handleClickTo(item.children)">
                <div class="item_img"><img :src="item.imgSrc"></div>
                <div class="item_text">
                  <h3>{{item.name}}</h3>
                  <p>录取院校:{{item.school}}<br>专业:{{item.major}}</p></div>
              </li>
            </ul>
            <ul v-show="num1 == 6">
              <li v-for="(item,index) in content6" @click="handleClickTo(item.children)">
                <div class="item_img"><img :src="item.imgSrc"></div>
                <div class="item_text">
                  <h3>{{item.name}}</h3>
                  <p>录取院校:{{item.school}}<br>专业:{{item.major}}</p></div>
              </li>
            </ul>
          </div>
        <div class="devcont_r_r">
            <ul>
             <li v-for="(item,index) in tabs1" @click="handleClickItem1(index)" :class="{active1:index == num1}">{{item.text}}</li>
            </ul>
      </div>
      </div>
      </keep-alive>
      <div class="devecont_r" v-show="num == 1">
        <div class="devcont_r_l">
          <ul>
            <li v-for="(item,index) in content21" @click="handleClickToVideo(item.children)">
              <div class="item_img"><img :src="item.imgSrc"></div>
              <div class="item_text">
                <h3>{{item.name}}</h3>
                <p>院校:{{item.school}}<br>专业:{{item.major}}</p></div>
            </li>
          </ul>
        </div>
       <!-- <div class="devcont_r_r">
          <ul>
            <li>全部</li><li>服装设计</li>
            <li>平面设计</li><li>工业设计</li><li>建筑设计</li><li>动漫设计</li><li>插画</li>
            <li>纯艺术</li>
          </ul>
        </div>-->
      </div>


    </div>
</template>
<script>
  import count from '../components/count';
  import Viewer from 'viewerjs';
  import 'viewerjs/dist/viewer.css';
  export default {
    data () {
      return {

        num:0,
        num1:0,
        tabs:[
          {"text":"作品集"},
          {"text":"服装设计时装秀"}
          ],
        tabs1:[
          {"text":"全部"},
          {"text":"服装设计"},
          {"text":"平面设计"},
          {"text":"工业设计"},
          {"text":"建筑设计"},
          {"text":"插画"},
          {"text":"纯艺术"},
          ],
        content0:[
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/chahua/f/img119.jpg",
            "name":"F同学",
            "school":"科廷大学",
            "major":"插画",
            "children": [
              {"url": "http://media.tianxingzhe.vip/develop/chahua/f/img119.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/f/img123.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/f/img129.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/f/img144.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/f/img147.jpg"},
    ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/chahua/l/img108.jpg",
            "name":"L同学",
            "school":"澳大利亚国立大学",
            "major":"插画",
            "children":[
              {"url": "http://media.tianxingzhe.vip/develop/chahua/l/img108.jpg"},
              {"url": "http://media.tianxingzhe.vip/develop/chahua/l/img110.jpg"},
              {"url": "http://media.tianxingzhe.vip/develop/chahua/l/img116.jpg"},
              {"url": "http://media.tianxingzhe.vip/develop/chahua/l/img160.jpg"},
              {"url": "http://media.tianxingzhe.vip/develop/chahua/l/img87.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/chahua/s/img218.jpg",
            "name":"S同学",
            "school":"奥克兰大学",
            "major":"插画",
            "children":[
              {"url":"http://media.tianxingzhe.vip/develop/chahua/s/img218.jpg"},
              {"url": "http://media.tianxingzhe.vip/develop/chahua/s/img235.jpg"},
              {"url": "http://media.tianxingzhe.vip/develop/chahua/s/img238.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/s/img240.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/s/img247.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/chahua/w/img153.jpg",
            "name":"W同学",
            "school":"阿德莱德大学",
            "major":"插画",
            "children":[
              {"url":"http://media.tianxingzhe.vip/develop/chahua/w/img153.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/w/img175.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/w/img190.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/w/img194.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/w/img196.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/chahua/y/img162.jpg",
            "name":"Y同学",
            "school":"堪培拉大学",
            "major":"插画",
            "children":[
              {"url":"http://media.tianxingzhe.vip/develop/chahua/y/img162.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/y/img173.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/y/img208.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/y/img211.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/y/img212.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/chahua/z/img156.jpg",
            "name":"Z同学",
            "school":"南澳大学",
            "major":"插画",
            "children":[
              {"url":"http://media.tianxingzhe.vip/develop/chahua/z/img156.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/z/img181.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/z/img184.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/z/img187.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/z/img243.jpg"},
            ]
          },
        ],
        content1:[
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/cloths/c/img111.jpg",
            "name":"C同学",
            "school":"科尔丁设计学院",
            "major":"服装设计",
            "children":[
              {"url": "http://media.tianxingzhe.vip/develop/cloths/c/img111.jpg"},
              {"url":   "http://media.tianxingzhe.vip/develop/cloths/c/img113.jpg"},
              {"url":   "http://media.tianxingzhe.vip/develop/cloths/c/img116.jpg"},
              {"url":  "http://media.tianxingzhe.vip/develop/cloths/c/img118.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/cloths/n/img40.jpg",
            "name":"N同学",
            "school":"蒙特利尔大学",
            "major":"服装设计",
            "children":[
              {"url":"http://media.tianxingzhe.vip/develop/cloths/n/img40.jpg"},
              {"url":  "http://media.tianxingzhe.vip/develop/cloths/n/img42.jpg"},
              {"url":  "http://media.tianxingzhe.vip/develop/cloths/n/img45.jpg"},
              {"url": "http://media.tianxingzhe.vip/develop/cloths/n/img48.jpg"},
              {"url": "http://media.tianxingzhe.vip/develop/cloths/n/img50.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/cloths/q/img85.jpg",
            "name":"Q同学",
            "school":"爱丁堡艺术学院",
            "major":"服装设计",
            "children":[
              {"url":"http://media.tianxingzhe.vip/develop/cloths/q/img85.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/cloths/q/img88.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/cloths/q/img90.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/cloths/q/img95.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/cloths/q/img90.jpg"},
              {"url":"http://p}zd0n0di.bkt.clouddn.com/develop/cloths/q/img93.jpg"}
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/cloths/w/img100.jpg",
            "name":"W同学",
            "school":"约克大学",
            "major":"服装设计",
            "children":[
              {"url":"http://media.tianxingzhe.vip/develop/cloths/w/img98.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/cloths/w/img100.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/cloths/w/img103.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/cloths/w/img105.jpg"},
              {"url": "http://media.tianxingzhe.vip/develop/cloths/w/img108.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/cloths/s/img53.jpg",
            "name":"S同学",
            "school":"维也纳应用艺术学院",
            "major":"服装设计",
            "children":[
              {"url":"http://media.tianxingzhe.vip/develop/cloths/s/img53.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/cloths/s/img55.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/cloths/s/img58.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/cloths/s/img61.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/cloths/s/img64.jpg"},
              {"url":"http://p}zd0n0di.bkt.clouddn.com/develop/cloths/s/img66.jpg"}
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/cloths/z/img69.jpg",
            "name":"Z同学",
            "school":"兰考斯特大学",
            "major":"服装设计",
            "children":[
              {"url":"http://media.tianxingzhe.vip/develop/cloths/z/img469jpg"},
              {"url": "http://media.tianxingzhe.vip/develop/cloths/z/img72.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/cloths/z/img75.jpg"},
              {"url": "http://media.tianxingzhe.vip/develop/cloths/z/img77.jpg"},
              {"url": "http://media.tianxingzhe.vip/develop/cloths/z/img83.jpg"},
            ]
          },
        ],
        content2:[
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/plane/h/img158.jpg",
            "name":"H同学",
            "school":"宾夕法尼亚大学",
            "major":"平面设计",
            "children": [
              {"url":"http://media.tianxingzhe.vip/develop/plane/h/img158.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/plane/h/img160.jpg"},
              {"url": "http://media.tianxingzhe.vip/develop/plane/h/img171.jpg"},
              {"url": "http://media.tianxingzhe.vip/develop/plane/h/img184.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/plane/h/img195.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/plane/l/img103.jpg",
            "name":"L同学",
            "school":"杜克大学",
            "major":"平面设计",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/plane/l/img103.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/plane/l/img109.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/plane/l/img111.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/plane/l/img113.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/plane/l/img293.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/plane/l/img293.jpg",
            "name":"L同学",
            "school":"康耐尔大学",
            "major":"平面设计",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/plane/l/img335.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/plane/l/img346.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/plane/l/img377.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/plane/l/img391.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/plane/l/img91.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/plane/x/img472.jpg",
            "name":"X同学",
            "school":"多伦多大学",
            "major":"平面设计",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/plane/x/img472.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/plane/x/img482.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/plane/x/img491.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/plane/x/img495.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/plane/x/img505.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/plane/y/img129.jpg",
            "name":"Y同学",
            "school":"学-萨凡纳艺术与设计学院",
            "major":"平面设计",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/plane/y/img129.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/plane/y/img135.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/plane/y/img147.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/plane/y/img151.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/plane/y/img155.jpg"},
            ]
          },

          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/plane/z/img70.jpg",
            "name":"Z同学",
            "school":"耶鲁大学",
            "major":"平面设计",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/plane/z/img70.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/plane/z/img72.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/plane/z/img74.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/plane/z/img76.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/plane/z/img79.jpg"},
            ]
          },

        ],
        content3:[
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/industry/c/img177.jpg",
            "name":"C同学",
            "school":"包斯豪大学",
            "major":"工业设计",
            "children": [
              {"url":"http://media.tianxingzhe.vip/develop/industry/c/img177.jpg"},
              {"url": "http://media.tianxingzhe.vip/develop/industry/c/img181.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/industry/c/img188.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/industry/c/img190.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/industry/c/img192.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/industry/d/img100.jpg",
            "name":"D同学",
            "school":"巴黎国家高等工业设计学院",
            "major":"工业设计",
            "children": [
              {"url":"http://media.tianxingzhe.vip/develop/industry/d/img100.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/industry/d/img103.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/industry/d/img109.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/industry/d/img153.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/industry/d/img97.jp}g"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/industry/f/img414.jpg",
            "name":"F同学",
            "school":"瑞典皇家美术学院",
            "major":"工业设计",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/industry/f/img414.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/industry/f/img415.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/industry/f/img426.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/industry/f/img439.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/industry/f/img440.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/industry/q/img239.jpg",
            "name":"Q同学",
            "school":"都灵理工学院",
            "major":"工业设计",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/industry/q/img239.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/industry/q/img241.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/industry/q/img262.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/industry/q/img268.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/industry/q/img319.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/industry/w/img348.jpg",
            "name":"W同学",
            "school":"罗马第一大学",
            "major":"工业设计",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/industry/w/img348.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/industry/w/img352.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/industry/w/img354.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/industry/w/img355.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/industry/w/img356.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/industry/x/img385.jpg",
            "name":"X同学",
            "school":"巴萨罗纳大学",
            "major":"工业设计",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/industry/x/img385.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/industry/x/img387.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/industry/x/img389.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/industry/x/img391.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/industry/x/img393.jpg"},
            ]
          },
        ],
        content4:[
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/build/cEISA%20Basel,%20Javier%20Subir%C3%A1%20Ruiz..jpg",
            "name":"C同学",
            "school":"皇家墨尔本大学",
            "major":"建筑设计",
            "children": [
          {"url":"http://media.tianxingzhe.vip/develop/build/cEL%20CAMINO%20DEL%20VINO.jpg"},
              {"url": "http://media.tianxingzhe.vip/develop/build/cENTRELAZAMIENTOS.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/build/cENTRELAZAMIENTOS.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/build/cEUtopia%20Ankara.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/build/cExperimental%20Explosion.jpg"},
                ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/build/dfichero-11461_11461.jpg",
            "name":"D同学",
            "school":"悉尼科技大学",
            "major":"建筑设计",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/build/dfichero-11461_11461.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/build/dfichero-12142_12142.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/build/dfichero-18501_18501.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/build/dfile-44771_44771.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/build/dflesh_tanbul.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/build/fARTISTIC%20AGORA.jpg",
            "name":"F同学",
            "school":"瑞典国立艺术设计学院",
            "major":"建筑设计",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/build/fARTISTIC%20AGORA.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/build/fArquitectura%20de%20la%20lluvia%252C%20Galer%C3%ADa%20multiprogram%C3%A1tica2.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/build/fBeirut%20Dat}a%20Platform%20-%20The%20New%20Library%20in%20Dialogue%20with%20the%20City.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/build/fBotany%20and}%20Gardening%20Center%20at%20Montjuic%20mountain.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/build/fBrotebruto.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/build/lCIAC_integreated%20center%20for%20cultural%20action.jpg",
            "name":"L同学",
            "school":"昆士兰科技大学",
            "major":"建筑设计",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/build/lCIAC_integreated%20center%20for%20cultural%20action.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/build/lCURATIVE%20PARASITE%20_%20Urban%20Experiments.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/build/lChoreographed%20Venetian%20Epic.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/build/lDESERT%20AIR%20WELL.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/build/ldepth-of-line_11755.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/build/wfichero-11556_11556.jpg",
            "name":"W同学",
            "school":"莫纳什大学",
            "major":"建筑设计",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/build/wfichero-1155}6_11556.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/build/wfichero-1161}7_11617.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/build/wfichero-1167}1_11671.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/build/wfichero-1169}8_11698.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/build/wfichero-1170}7_11707.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/build/xCENTER%20FOR%20MARINE%20RESEARCH%20AND%20DIFFUSION%20-%20PERU.jpg",
            "name":"X同学",
            "school":"苏黎世造型与艺术学院",
            "major":"建筑设计",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/build/xCENTER%20FOR%20MARINE%20RESEARCH%20AND%20DIFFUSION%20-%20PERU.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/build/xCENTRO%20DE%20ARTE,%20CULTURA%20E%20IDENTIDAD%20WAYUU,%20LUIS%20ALBERTO%20MEN%C3%89NDEZ%20S%C3%81NCHEZ..jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/build/xCarlos%20A.%20Bolanos%20A..jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/build/xCentro%20Enol%C2%A2gico%20en%20La%20Portera.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/build/xbuilt_earth.jpg"},
            ]
          },
        ],
        content5:[
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/chahua/f/img119.jpg",
            "name":"F同学",
            "school":"科廷大学",
            "major":"插画",
            "children": [
          {"url":"http://media.tianxingzhe.vip/develop/chahua/f/img119.jpg"},
              {"url": "http://media.tianxingzhe.vip/develop/chahua/f/img123.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/f/img129.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/f/img144.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/f/img147.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/chahua/l/img108.jpg",
            "name":"L同学",
            "school":"澳大利亚国立大学",
            "major":"插画",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/chahua/l/img108.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/chahua/l/img110.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/chahua/l/img116.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/l/img160.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/l/img87.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/chahua/s/img218.jpg",
            "name":"S同学",
            "school":"奥克兰大学",
            "major":"插画",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/chahua/s/img218.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/chahua/s/img235.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/chahua/s/img238.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/s/img240.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/s/img247.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/chahua/w/img153.jpg",
            "name":"W同学",
            "school":"阿德莱德大学",
            "major":"插画",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/chahua/w/img153.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/chahua/w/img175.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/chahua/w/img190.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/w/img194.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/w/img196.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/chahua/y/img162.jpg",
            "name":"Y同学",
            "school":"堪培拉大学",
            "major":"插画",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/chahua/y/img162.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/chahua/y/img173.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/chahua/y/img208.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/y/img211.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/y/img212.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/chahua/z/img156.jpg",
            "name":"Z同学",
            "school":"南澳大学",
            "major":"插画",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/chahua/z/img156.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/chahua/z/img181.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/chahua/z/img184.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/z/img187.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/chahua/z/img243.jpg"},
            ]
          },
        ],
        content6:[
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/yishu/c/img139.jpg",
            "name":"C同学",
            "school":"普瑞特艺术学院",
            "major":"纯艺术",
            "children": [
          {"url":"http://media.tianxingzhe.vip/develop/yishu/c/img139.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/yishu/c/img145.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/yishu/c/img148.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/yishu/c/img151.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/yishu/c/img158.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/yishu/h/img192.jpg",
            "name":"H同学",
            "school":"斯坦福大学",
            "major":"纯艺术",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/yishu/h/img192.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/yishu/h/img195.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/yishu/h/img198.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/yishu/h/img200.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/yishu/h/img203.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/yishu/w/img100.jpg",
            "name":"W同学",
            "school":"麻省理工学院",
            "major":"纯艺术",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/yishu/w/img100.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/yishu/w/img102.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/yishu/w/img104.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/yishu/w/img91.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/yishu/w/img94.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/yishu/x/img53.jpg",
            "name":"X同学",
            "school":"帕森设计学院",
            "major":"纯艺术",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/yishu/x/img53.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/yishu/x/img71.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/yishu/x/img74.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/yishu/x/img84.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/yishu/x/img86.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/yishu/y/img164.jpg",
            "name":"Y同学",
            "school":"米兰理工大学",
            "major":"纯艺术",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/yishu/y/img164.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/yishu/y/img167.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/yishu/y/img170.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/yishu/y/img173.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/yishu/y/img179.jpg"},
            ]
          },
          {
            "imgSrc":"http://media.tianxingzhe.vip/develop/yishu/z/img106.jpg",
            "name":"Z同学",
            "school":"加州艺术学院",
            "major":"纯艺术",
            "children": [
            {"url":"http://media.tianxingzhe.vip/develop/yishu/z/img106.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/yishu/z/img107.jpg"},
            {"url":"http://media.tianxingzhe.vip/develop/yishu/z/img110.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/yishu/z/img117.jpg"},
              {"url":"http://media.tianxingzhe.vip/develop/yishu/z/img123.jpg"},
            ]
          },
        ],
        content21:[
          {
            "imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/fu/fu1.jpg",
            "name":"毕业时装秀",
            "school":"伦敦大学",
            "major":"服装设计专业",
            "children":[
              "http://7xnt3p.com1.z0.glb.clouddn.com/%E6%A0%BC%E5%BC%8F%E5%B7%A5%E5%8E%82%E4%BC%A6%E6%95%A6%E5%A4%A7%E5%AD%A6%E6%9C%8D%E8%A3%85%E8%AE%BE%E8%AE%A1%E4%B8%93%E4%B8%9A%E6%AF%95%E4%B8%9A%E6%97%B6%E8%A3%85%E7%A7%802.mp4",
            ]
          },
          {
            "imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/fu/fu2.jpg",
            "name":"服装设计时装秀",
            "school":"加拿大预科",
            "major":"服装设计专业",
            "children":[
              "http://7xnt3p.com1.z0.glb.clouddn.com/%E6%A0%BC%E5%BC%8F%E5%B7%A5%E5%8E%82%E5%8A%A0%E6%8B%BF%E5%A4%A7%E9%A2%84%E7%A7%91%E6%9C%8D%E8%A3%85%E8%AE%BE%E8%AE%A1%E6%97%B6%E8%A3%85%E7%A7%802.mp4",
            ]
          },
          {
            "imgSrc":"http://7xnt3p.com1.z0.glb.clouddn.com/fu/fu3.jpg",
            "name":"毕业时装秀",
            "school":"英国剑桥大学",
            "major":"服装设计专业",
            "children":[
              "http://7xnt3p.com1.z0.glb.clouddn.com/%E6%A0%BC%E5%BC%8F%E5%B7%A5%E5%8E%82%E8%8B%B1%E5%9B%BD%E5%89%91%E6%A1%A5%E5%A4%A7%E5%AD%A6%E6%9C%8D%E8%A3%85%E8%AE%BE%E8%AE%A1%E6%AF%95%E4%B8%9A%E6%97%B6%E8%A3%85%E7%A7%802.mp4",
            ]
          },
        ],


      }
    },
    components:{count},
    methods: {
      handleTabsAdd () {
        this.tabs ++;
      },
      handleClickItem(index){
        this.num=index;
      },
      handleClickItem1(index){
        this.num1=index;
      },
      handleClickTo(children){
       let a =  JSON.stringify(children);
        this.$router.push({
          path:'/devshow',
          query:{"children":a}
        })
      },
      handleClickToVideo(children){
        this.$router.push({
          path:'/videoshow',
          query:children
        })
      },
      backto(){
        this.$router.push({
          path:'/index'
        })
      },
    },
    /*components:{timeCont,pop},*/
  }
</script>
<style lang="less">

  .devewrap{
    width:100%;
    height:100%;
    .countStyle{
      display: block;
      position: fixed;
      width:120px;height:30px;
      bottom:10px;
      right:10px;
      color:#000;
      font-size:12px;
    }
    .backto{
      position:absolute;
      left: 30px;
      top: 45px;
      width: 100px;
      height: 45px;
      cursor: pointer;
      z-index: 10;
      img{
        width:100px;height:45px;
      }
    }
    .devecont_l{
      width:15%;height:100%;
      float:left;
      background-color: #000;
      position: relative;
      ul{
        width:100%;
        height:100px;
        position: absolute;
        top: 45%;
        transform: translate(0,-50%);
        li{
          width:100%;
          height:50px;
          line-height: 50px;
          background-color: #b3b3b3;
          color:#000;
          text-align:center;
          cursor: pointer;
          font-size:18px;

        }
        .active{
          background-color: #fff;
        }


      }
    }
    .devecont_r{
      width:85%;height:100%;
      float:left;
      padding:40px 20px 40px 100px;
      .devcont_r_l{
        width:80%;
        height:100%;
        float:left;
        ul{
          list-style: none;
          width:100%;
          height:100%;

          li{
            width:25%;
            height:45%;
            float:left;
            margin:0 8% 40px 0;
            cursor: pointer;
            .item_img{
              width:100%;
              height:60%;
              overflow: hidden;
              img{width:100%;height:100%;}
            }
            .item_text{
              width:100%;
              height:40%;
              background-color: #000;
              color:#fff;
              padding:10px 0 0 10px;
              h3{
                font-size:16px;
                margin-bottom:20px;
              }
              p{
                font-size:14px;
              }
            }
          }

        }
      }
      .devcont_r_r{
        width:10%;
        height:100%;
        float:right;
        ul{
          list-style: none;
          li{
            width:100%;
            height:30px;
            line-height: 30px;
            border:1px solid #000;
            margin-top:5px;
            text-align: center;
            cursor: pointer;
          }
          .active1{
            background: #b3b3b3;
          }
        }
      }
    }
  }
</style>
