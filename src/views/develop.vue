<template>
  <div class="devewrap">
    <div class="backto">
      <img src="http://media.tianxingzhe.vip/video/backto.png" @click="backto">
    </div>
    <div class="devecont_l">
      <ul>
        <li
          v-for="(item,index) in localData.develop.tabs"
          :key="index"
          :class="{active:index == num}"
          @click="handleClickItem(index)"
        >{{item.text}}</li>
      </ul>
    </div>
    <keep-alive>
      <div class="devecont_r" v-show="num == 0">
        <div class="devcont_r_l">
          <ul v-show="num1 == 0">
            <li
              v-for="(item,index) in localData.develop.content0"
              :key="index"
              @click="handleClickTo(item.children)"
            >
              <div class="item_img">
                <img :src="item.imgSrc">
              </div>
              <div class="item_text">
                <h3>{{item.name}}</h3>
                <p>
                  录取院校:{{item.school}}
                  <br>
                  专业:{{item.major}}
                </p>
              </div>
            </li>
          </ul>
          <ul v-show="num1 == 1">
            <li
              v-for="(item,index) in localData.develop.content1"
              :key="index"
              @click="handleClickTo(item.children)"
            >
              <div class="item_img">
                <img :src="item.imgSrc">
              </div>
              <div class="item_text">
                <h3>{{item.name}}</h3>
                <p>
                  录取院校:{{item.school}}
                  <br>
                  专业:{{item.major}}
                </p>
              </div>
            </li>
          </ul>
          <ul v-show="num1 == 2">
            <li
              v-for="(item,index) in localData.develop.content2"
              :key="index"
              @click="handleClickTo(item.children)"
            >
              <div class="item_img">
                <img :src="item.imgSrc">
              </div>
              <div class="item_text">
                <h3>{{item.name}}</h3>
                <p>
                  录取院校:{{item.school}}
                  <br>
                  专业:{{item.major}}
                </p>
              </div>
            </li>
          </ul>
          <ul v-show="num1 == 3">
            <li
              v-for="(item,index) in localData.develop.content3"
              :key="index"
              @click="handleClickTo(item.children)"
            >
              <div class="item_img">
                <img :src="item.imgSrc">
              </div>
              <div class="item_text">
                <h3>{{item.name}}</h3>
                <p>
                  录取院校:{{item.school}}
                  <br>
                  专业:{{item.major}}
                </p>
              </div>
            </li>
          </ul>
          <ul v-show="num1 == 4">
            <li
              v-for="(item,index) in localData.develop.content4"
              :key="index"
              @click="handleClickTo(item.children)"
            >
              <div class="item_img">
                <img :src="item.imgSrc">
              </div>
              <div class="item_text">
                <h3>{{item.name}}</h3>
                <p>
                  录取院校:{{item.school}}
                  <br>
                  专业:{{item.major}}
                </p>
              </div>
            </li>
          </ul>
          <ul v-show="num1 == 5">
            <li
              v-for="(item,index) in localData.develop.content5"
              :key="index"
              @click="handleClickTo(item.children)"
            >
              <div class="item_img">
                <img :src="item.imgSrc">
              </div>
              <div class="item_text">
                <h3>{{item.name}}</h3>
                <p>
                  录取院校:{{item.school}}
                  <br>
                  专业:{{item.major}}
                </p>
              </div>
            </li>
          </ul>
          <ul v-show="num1 == 6">
            <li
              v-for="(item,index) in localData.develop.content6"
              :key="index"
              @click="handleClickTo(item.children)"
            >
              <div class="item_img">
                <img :src="item.imgSrc">
              </div>
              <div class="item_text">
                <h3>{{item.name}}</h3>
                <p>
                  录取院校:{{item.school}}
                  <br>
                  专业:{{item.major}}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="devcont_r_r">
          <ul>
            <li
              v-for="(item,index) in localData.develop.tabs1"
              :key="index"
              @click="handleClickItem1(index)"
              :class="{active1:index == num1}"
            >{{item.text}}</li>
          </ul>
        </div>
      </div>
    </keep-alive>
    <div class="devecont_r" v-show="num == 1">
      <div class="devcont_r_l">
        <ul>
          <li
            v-for="(item,index) in localData.develop.content21"
            :key="index"
            @click="handleClickToVideo(item.children)"
          >
            <div class="item_img">
              <img :src="item.imgSrc">
            </div>
            <div class="item_text">
              <h3>{{item.name}}</h3>
              <p>
                院校:{{item.school}}
                <br>
                专业:{{item.major}}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import localData from "@/util/localData.js";
export default {
  data() {
    return {
      num: 0,
      num1: 0,
      localData: undefined
    };
  },
  beforeMount() {
    this.localData = localData;
  },
  methods: {
    handleTabsAdd() {
      this.tabs++;
    },
    handleClickItem(index) {
      this.num = index;
    },
    handleClickItem1(index) {
      this.num1 = index;
    },
    handleClickTo(children) {
      let a = JSON.stringify(children);
      this.$router.push({
        path: "/devshow",
        query: { children: a }
      });
    },
    handleClickToVideo(children) {
      this.$router.push({
        path: "/videoshow",
        query: children
      });
    },
    backto() {
      this.$router.push({
        path: "/index"
      });
    }
  }
};
</script>
<style lang="less">
.devewrap {
  width: 100%;
  height: 100%;
  .backto {
    position: absolute;
    left: 30px;
    top: 45px;
    width: 100px;
    height: 45px;
    cursor: pointer;
    z-index: 10;
    img {
      width: 100px;
      height: 45px;
    }
  }
  .devecont_l {
    width: 15%;
    height: 100%;
    float: left;
    background-color: #000;
    position: relative;
    ul {
      width: 100%;
      height: 100px;
      position: absolute;
      top: 45%;
      transform: translate(0, -50%);
      li {
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: #b3b3b3;
        color: #000;
        text-align: center;
        cursor: pointer;
        font-size: 18px;
      }
      .active {
        background-color: #fff;
      }
    }
  }
  .devecont_r {
    width: 85%;
    height: 100%;
    float: left;
    padding: 40px 20px 40px 100px;
    .devcont_r_l {
      width: 80%;
      height: 100%;
      float: left;
      ul {
        list-style: none;
        width: 100%;
        height: 100%;

        li {
          width: 25%;
          height: 45%;
          float: left;
          margin: 0 8% 40px 0;
          cursor: pointer;
          .item_img {
            width: 100%;
            height: 60%;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .item_text {
            width: 100%;
            height: 40%;
            background-color: #000;
            color: #fff;
            padding: 10px 0 0 10px;
            h3 {
              font-size: 16px;
              margin-bottom: 20px;
            }
            p {
              font-size: 14px;
            }
          }
        }
      }
    }
    .devcont_r_r {
      width: 10%;
      height: 100%;
      float: right;
      ul {
        list-style: none;
        li {
          width: 100%;
          height: 30px;
          line-height: 30px;
          border: 1px solid #000;
          margin-top: 5px;
          text-align: center;
          cursor: pointer;
        }
        .active1 {
          background: #b3b3b3;
        }
      }
    }
  }
}
</style>
