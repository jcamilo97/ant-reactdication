import React, { Component } from 'react';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import SiderMenu from './components/SiderMenu';
import { getMenuData } from './common/menu';
import logo from './logo.svg';
import './App.css';
const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;

class App extends Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  

  render() {
    return (
      <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <SiderMenu
          logo={logo}
          // 不带Authorized参数的情况下如果没有权限,会强制跳到403界面
          // If you do not have the Authorized parameter
          // you will be forced to jump to the 403 interface without permission
         // Authorized={Authorized}
          menuData={getMenuData()}
          collapsed={this.state.collapsed}
          location={{hash: "",pathname: "/home",search: ""}}
          isMobile={this.state.isMobile}
          onCollapse={this.handleMenuCollapse}
      />

      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
  
    );
  }
}

export default App;
