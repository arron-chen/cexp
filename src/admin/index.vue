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
          itemShow:"1-1",
          search:"",
          ajaxHistoryData:[],
          // 初始化信息总条数
          dataCount:0,
          // 每页显示多少条
          pageSize:10,
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
                        this.show(params.index)
                      }
                    }
                  }, 'View'),
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
                  }, 'Delete')
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
