<template>
    <div class="devewrap">
      <div class="devecont_l">
          <ul>
            <li>作品集</li>
            <li>实习展示</li>
          </ul>
      </div>
      <div class="devecont_r">
          <div class="devcont_r_l">
            <ul>
              <li>
                <div class="item_img"><img src="http://p9zd0n0di.bkt.clouddn.com/develop/develop.jpg"></div>
                <div class="item_text">
                  <h3>王思聪</h3>
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
        tabs: 2
      }
    },
    methods: {
      handleTabsAdd () {
        this.tabs ++;
      }
    }
  }
</script>
<style lang="less">
  .devewrap{
    width:100%;
    height:100%;
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
          &:first-child{
            background-color: #fff;
          }
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
          }
        }
      }
    }
  }
</style>
