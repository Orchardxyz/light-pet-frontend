import React, { Component } from 'react';
import { Layout, Menu, Dropdown, Avatar, Icon } from 'antd';
import Link from 'umi/link';
import styles from './index.css';
import logo from '../assets/logo.png';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

export default class BasicLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const DropdownList = (
      <Menu className="drop-list">
        <Menu.Item key="logout">退出登录</Menu.Item>
      </Menu>
    );
    console.log(this.props);
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Link to="/">
            <div className={styles.logo}>
              <img alt="logo" src={logo} />
              <h1>Light Pet</h1>
            </div>
          </Link>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['user']}>
            <Menu.Item key="user">
              <Link to="user">
                <Icon type="user" />
                <span>用户管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="topic">
              <Link to="topic">
                <Icon type="audio" />
                <span>话题管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="annoucement">
              <Link to="annoucement">
                <Icon type="notification" />
                <span>发布公告</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="pet"
              title={
                <span>
                  <Icon type="smile" />
                  <span>宠物管理</span>
                </span>
              }
            >
              <Menu.Item key="healthProject">
                <Link to="/pet/healthProject">
                <Icon type="medicine-box" />
                  <span>健康项目</span>
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className={styles.siteLayout}>
          <div className={styles.systemHeader}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <span className={styles.systemName}>轻宠社区小程序 后台管理系统</span>
            <Dropdown overlay={DropdownList}>
              <div className={styles.systmeAvatar}>
                <Avatar size="default" style={{ marginRight: 5 }} icon={<Icon type="user" />} />
                <span className={styles.username}>管理员</span>
              </div>
            </Dropdown>
          </div>
          <Content
            className={styles.systemContent}
            style={{
              margin: '24px 16px',
              padding: 12,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
