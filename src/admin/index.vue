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
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
               用户管理
              </template>
              <MenuItem name="1-1">用户列表</MenuItem>
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
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            列表
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="less">
  @import '../assets/less/admin/index.less';
</style>
