<template>
    <div class="devewrap">
      <div class="backto"><img src="http://p9zd0n0di.bkt.clouddn.com/video/backto.png" @click="backto"></div>
      <div class="devecont_l">
          <ul>
            <li v-for="(item,index) in tabs" :class="{active:index == num}" @click="handleClickItem(index)">{{item.text}}</li>
          </ul>
      </div>
      <div class="devecont_r" v-show="num == 0">
          <div class="devcont_r_l">
            <ul v-show="num1 == 0">
              <li v-for="(item,index) in content1" @click="handleClickTo(item.children)">
                <div class="item_img"><img :src="item.imgSrc"></div>
                <div class="item_text">
                  <h3>{{item.name}}</h3>
                  <p>录取院校:{{item.school}}<br>专业:{{item.major}}</p></div>
              </li>
            </ul>
            <ul v-show="num1 == 1">
              <li v-for="(item,index) in content2">
                <div class="item_img"><img :src="item.imgSrc"></div>
                <div class="item_text">
                  <h3>{{item.name}}</h3>
                  <p>录取院校:{{item.school}}<br>专业:{{item.major}}</p></div>
              </li>
            </ul>
            <ul v-show="num1 == 2">
              <li v-for="(item,index) in content1">
                <div class="item_img"><img :src="item.imgSrc"></div>
                <div class="item_text">
                  <h3>{{item.name}}</h3>
                  <p>录取院校:{{item.school}}<br>专业:{{item.major}}</p></div>
              </li>
            </ul>
            <ul v-show="num1 == 3">
              <li v-for="(item,index) in content1">
                <div class="item_img"><img :src="item.imgSrc"></div>
                <div class="item_text">
                  <h3>{{item.name}}</h3>
                  <p>录取院校:{{item.school}}<br>专业:{{item.major}}</p></div>
              </li>
            </ul>
            <ul v-show="num1 == 4">
              <li v-for="(item,index) in content1">
                <div class="item_img"><img :src="item.imgSrc"></div>
                <div class="item_text">
                  <h3>{{item.name}}</h3>
                  <p>录取院校:{{item.school}}<br>专业:{{item.major}}</p></div>
              </li>
            </ul>
            <ul v-show="num1 == 5">
              <li v-for="(item,index) in content1">
                <div class="item_img"><img :src="item.imgSrc"></div>
                <div class="item_text">
                  <h3>{{item.name}}</h3>
                  <p>录取院校:{{item.school}}<br>专业:{{item.major}}</p></div>
              </li>
            </ul>
            <ul v-show="num1 == 6">
              <li v-for="(item,index) in content1">
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
      <div class="devecont_r" v-show="num == 1">
        <div class="devcont_r_l">
          <ul>
            <li>
              <div class="item_img"><img src="http://p9zd0n0di.bkt.clouddn.com/develop/develop.jpg"></div>
              <div class="item_text">
                <h3>王思聪2</h3>
                <p>录取院校:多伦多大学<br>专业:服装设计</p></div>
            </li><li>
            <div class="item_img"><img src="http://p9zd0n0di.bkt.clouddn.com/develop/develop.jpg"></div>
            <div class="item_text">
              <h3>王思聪</h3>
              <p>录取院校:多伦多大学<br>专业:服装设计</p></div>
          </li>
            <li>
              <div class="item_img"><img src="http://p9zd0n0di.bkt.clouddn.com/develop/develop.jpg"></div>
              <div class="item_text">
                <h3>王思聪</h3>
                <p>录取院校:多伦多大学<br>专业:服装设计</p></div>
            </li>
            <li>
              <div class="item_img"><img src="http://p9zd0n0di.bkt.clouddn.com/develop/develop.jpg"></div>
              <div class="item_text">
                <h3>王思聪</h3>
                <p>录取院校:多伦多大学<br>专业:服装设计</p></div>
            </li>
            <li>
              <div class="item_img"><img src="http://p9zd0n0di.bkt.clouddn.com/develop/develop.jpg"></div>
              <div class="item_text">
                <h3>王思聪</h3>
                <p>录取院校:多伦多大学<br>专业:服装设计</p></div>
            </li>
            <li>
              <div class="item_img"><img src="http://p9zd0n0di.bkt.clouddn.com/develop/develop.jpg"></div>
              <div class="item_text">
                <h3>王思聪</h3>
                <p>录取院校:多伦多大学<br>专业:服装设计</p></div>
            </li>

          </ul>
        </div>
        <div class="devcont_r_r">
          <ul>
            <li>全部</li><li>服装设计</li>
            <li>平面设计</li><li>工业设计</li><li>建筑设计</li><li>动漫设计</li><li>插画</li>
            <li>纯艺术</li>
          </ul>
        </div>
      </div>


    </div>
</template>
<script>
  export default {
    data () {
      return {
        num:0,
        num1:0,
        tabs:[
          {"text":"作品集"},
          {"text":"实习展示"}
          ],
        tabs1:[
          {"text":"全部"},
          {"text":"服装设计"},
          {"text":"平面设计"},
          {"text":"工业设计"},
          {"text":"建筑设计"},
          {"text":"动漫设计"},
          {"text":"插画"},
          {"text":"纯艺术"},
          ],
        content1:[
          {
            "imgSrc":"http://p9zd0n0di.bkt.clouddn.com/develop/chahua/img93.jpg",
            "name":"万思聪",
            "school":"多伦多大学",
            "major":"插画",
            "children":[
              "http://p9zd0n0di.bkt.clouddn.com/develop/chahua/img87.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/chahua/img90.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/chahua/img93.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/chahua/img108.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/chahua/img110.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/chahua/img116.jpg"]
          },
          {
            "imgSrc":"http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img42.jpg",
            "name":"同学B",
            "school":"巴黎大学",
            "major":"服装设计",
            "children":[
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img40.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img45.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img48.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img50.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img53.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img55.jpg"
            ]
          },
          {
            "imgSrc":"http://p9zd0n0di.bkt.clouddn.com/develop/industry/img97.jpg",
            "name":"同学C",
            "school":"麻省理工",
            "major":"工业设计",
            "children":[
              "http://p9zd0n0di.bkt.clouddn.com/develop/industry/img97.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/industry/img100.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/industry/img103.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/industry/img109.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/industry/img153.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/industry/img159.jpg"
            ]
          },
          {
            "imgSrc":"http://p9zd0n0di.bkt.clouddn.com/develop/industry/img109.jpg",
            "name":"李煜",
            "school":"圣彼得堡大学",
            "major":"建筑设计",
            "children":[
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img40.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img45.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img48.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img50.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img53.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img55.jpg"
            ]
          },
          {
            "imgSrc":"http://p9zd0n0di.bkt.clouddn.com/develop/chahua/img116.jpg",
            "name":"张冲",
            "school":"东京大学",
            "major":"动漫设计",
            "children":[
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img40.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img45.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img48.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img50.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img53.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img55.jpg"
            ]
          },
          {
            "imgSrc":"http://p9zd0n0di.bkt.clouddn.com/develop/industry/img153.jpg",
            "name":"沈火火",
            "school":"哥伦比亚大学",
            "major":"工业设计",
            "children":[
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img40.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img45.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img48.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img50.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img53.jpg",
              "http://p9zd0n0di.bkt.clouddn.com/develop/cloths/img55.jpg"
            ]
          },
        ],
        content2:[
          {
            "imgSrc":"http://p9zd0n0di.bkt.clouddn.com/develop/develop.jpg",
            "name":"陈里",
            "school":"多伦多大学",
            "major":"服装设计",
            "children":{}
          },
          {
            "imgSrc":"http://p9zd0n0di.bkt.clouddn.com/develop/develop.jpg",
            "name":"同学Bx",
            "school":"多伦多大学",
            "major":"服装设计",
            "children":{}
          },
          {
            "imgSrc":"http://p9zd0n0di.bkt.clouddn.com/develop/develop.jpg",
            "name":"同学cv",
            "school":"多伦多大学",
            "major":"服装设计",
            "children":{}
          },
          {
            "imgSrc":"http://p9zd0n0di.bkt.clouddn.com/develop/develop.jpg",
            "name":"万思聪2",
            "school":"多伦多大学",
            "major":"服装设计",
            "children":{}
          },
          {
            "imgSrc":"http://p9zd0n0di.bkt.clouddn.com/develop/develop.jpg",
            "name":"万思聪q3",
            "school":"多伦多大学",
            "major":"服装设计",
            "children":{}
          },
          {
            "imgSrc":"http://p9zd0n0di.bkt.clouddn.com/develop/develop.jpg",
            "name":"万思聪5",
            "school":"多伦多大学",
            "major":"服装设计",
            "children":{}
          },
        ]
      }
    },
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
        this.$router.push({
          path:'/devshow',
          query:children
        })
      },
      backto(){
        this.$router.push({
          path:'/index'
        })
      },
    }
  }
</script>
<style lang="less">

  .devewrap{
    width:100%;
    height:100%;
    .backto{
      position:absolute;
      left: 30px;
      top: 45px;
      width: 80px;
      height: 35px;
      cursor: pointer;
      z-index: 10;
      img{
        width:80px;height:35px;
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
          text-align: center;
          cursor: pointer;

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
