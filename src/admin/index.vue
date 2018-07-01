<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">天行者后台管理</div>
        <!--  <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              Item 4
            </MenuItem>
          </div>-->
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']" v-on:on-select="itemSelect">
            <Submenu name="1" >
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
               用户管理
              </template>
              <MenuItem name="1-1">用户列表</MenuItem>
              <MenuItem name="1-2">用户搜索</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                权限管理
              </template>
              <MenuItem name="2-1">权限列表</MenuItem>
            </Submenu>

          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>主页</BreadcrumbItem>
            <BreadcrumbItem>用户管理</BreadcrumbItem>
           <!-- <BreadcrumbItem>Layout</BreadcrumbItem>-->
          </Breadcrumb>
          <Content v-show='itemShow == "1-1"' :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <Table :columns="columns1" :data="data1"></Table>
            <Page :total="dataCount" :page-size="pageSize" show-total ></Page>
          </Content>
          <Content v-show='itemShow == "1-2"' :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <Input v-model="search" icon="ios-search" placeholder="请输入用户名" style="width: 200px"></Input>
            <Button @click="searchUser">搜索</Button>
            <Table :columns="columns1" :data="data2"></Table>
          </Content>
          <Content v-show='itemShow == "2-1"' :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            列表22
          </Content>
          <Modal  v-model="modal" width="420"
                  class-name="vertical-center-modal"
                  :closable="false">
            <div class="userLine"><span>用户权限</span>
              <Select v-model="userPrivilige" style="width:200px;">
              <Option v-for="(item,index) in privileges" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select><a class="modify_btn" @click="modifyP">修改</a></div>
            <div class="userLine"><span>体验时长</span><Input v-model="userTime" style="width:200px;"></Input><a class="modify_btn" @click="modifyT">修改</a></div>
            <div class="userLine"><span>修改密码</span><Input placeholder="请输入要重置的密码" v-model="userPassword" style="width:200px;"></Input><a class="modify_btn" @click="modifyPass">修改</a></div>

          </Modal>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
      data(){
        return {
          modal:false,
          userPrivilige:"",
          userId:"",
          userTime:'',
          userPassword:'',
          itemShow:"1-1",
          search:"",
          ajaxHistoryData:[],
          // 初始化信息总条数
          dataCount:0,
          // 每页显示多少条
          pageSize:10,
          privileges:[
            {
              value: 'user',
              label: '用户'
            },
            {
              value: 'admin',
              label: '管理员'
            },
            {
              value: 'vip',
              label: 'vip'
            },
          ],
          columns1: [
            {
              title: 'id',
              key: 'userid',
            },
            {
              title: '用户名',
              key: 'username'
            },
            {
              title: '权限',
              key: 'level'
            },
            {
              title: '体验时间',
              key: 'timeout'
            },
            {
              title:'操作',
              key:'operate',
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.showdetail(params)
                      }
                    }
                  }, '详情'),
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        this.deleteUser(params)
                      }
                    }
                  }, '删除')
                ]);
              }
            }
          ],
          data1: [],
          data2:[]
        }
      },
    methods:{
      itemSelect(name){
        this.itemShow = name;
      },
      showdetail(params){
          this.modal=true;
          debugger
          if(params.row){
            let a =params.row;
            this.userId=a.id;
            switch (a.level){
              case "admin":
                this.userPrivilige="admin";
                break;
              case "vip":
                this.userPrivilige="vip";
                break;
              case "user":
                this.userPrivilige="user";
                break;
            }

            if(a.timeout){
              this.userTime=a.timeout;
            }


          }
      },
      modifyP(){
        this.$Modal.confirm({
          title: '消息提示',
          content: '<p>是否修改当前用户权限</p>',
          onOk: () => {
            var level;
            let b =this.userPrivilige;
            switch(b){
              case "admin":
                level=1;
                break;
              case "user":
                level=0;
                break;
              case "vip":
                level=2;
                debugger
                break;
            }
            debugger
            this.$http.put("http://112.74.25.26/user",{"userid":this.userId,"level":level}).then((res)=>{
              this.$Message.info('修改用户权限成功');
            }).catch((err)=>{
              console.log(err)
            })

          },
        })
      },
      modifyT(){
        this.$Modal.confirm({
          title: '消息提示',
          content: '<p>是否修改当前用户体验时长</p>',
          onOk: () => {
            var time=this.userTime;
            this.$http.put("http://112.74.25.26/user/timeout",{"userid":this.userId,"time":time}).then((res)=>{
              this.$Message.info('修改用户权限成功');
            }).catch((err)=>{
              console.log(err)
            })

          },
        })
      },
      modifyPass(){
        this.$Modal.confirm({
          title: '消息提示',
          content: '<p>是否修改当前用户密码</p>',
          onOk: () => {
            var pass=this.userPassword;
            this.$http.put("http://112.74.25.26/user/password",{"userid":this.userId,"password":pass}).then((res)=>{
              this.$Message.info('修改用户密码成功');
            }).catch((err)=>{
              console.log(err)
            })

          },
        })
      },
      searchUser(){
        if(this.search == "" ){
          this.$Message.warning('搜索条件不可为空');
          return ;
        }
        this.$http.get("http://112.74.25.26/user/search",{params:{param:this.search}}).then((res)=>{
          this.data2=res.data;
        }).catch((err)=>{
            console.log(err)
        })
      },
      deleteUser(info){
        this.$Modal.confirm({
          title: '消息提示',
          content: '<p>是否删除当前用户</p>',
          onOk: () => {
            this.$http.delete("http://112.74.25.26/user",{params:{userid:info.row.userid}}).then((res)=>{
              this.$Message.info('删除成功');
            }).catch((err)=>{
              console.log(err)
            })

          },
        })

      }


    },
    mounted(){
        this.$http.get("http://112.74.25.26/user/list").then(
          (res)=>{
            this.data1=res.data.userList;
            debugger
          }
        ).catch((err)=>{
          debugger
        })
    }
  }
</script>
<style lang="less">
  @import '../assets/less/admin/index.less';
</style>
