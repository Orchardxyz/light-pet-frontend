// import React, { Component } from 'react';
// import { Layout, Menu, Dropdown, Avatar, Icon } from 'antd';
// import styles from './index.css';
// import logo from '../assets/logo.png';
// const { Sider, Content } = Layout;

// export default class index extends Component {
//   state = {
//     collapsed: false,
//   };

//   toggle = () => {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     });
//   };

//   render() {
//     const DropdownList = (
//       <Menu className="drop-list">
//         <Menu.Item key="logout">退出登录</Menu.Item>
//       </Menu>
//     );
//     console.log(this.props);
//     return (
//       <Layout style={{ minHeight: '100vh' }}>
//         <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
//           <div className={styles.logo}>
//             <img alt="logo" src={logo} />
//             <h1>Light Pet</h1>
//           </div>

//           <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
//             <Menu.Item key="1">
//               <Icon type="user" />
//               <span>用户管理</span>
//             </Menu.Item>
//             <Menu.Item key="2">
//               <Icon type="audio" />
//               <span>话题管理</span>
//             </Menu.Item>
//             <Menu.Item key="3">
//               <Icon type="notification" />
//               <span>发布公告</span>
//             </Menu.Item>
//           </Menu>
//         </Sider>
//         <Layout className={styles.siteLayout}>
//           <div className={styles.systemHeader}>
//             <Icon
//               className={styles.trigger}
//               type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
//               onClick={this.toggle}
//             />
//             <span className={styles.systemName}>轻宠社区小程序 后台管理系统</span>
//             <Dropdown overlay={DropdownList}>
//               <div className={styles.systmeAvatar}>
//                 <Avatar size="default" style={{ marginRight: 5 }} icon={<Icon type="user" />} />
//                 <span className={styles.username}>管理员</span>
//               </div>
//             </Dropdown>
//           </div>
//           <Content
//             className={styles.systemContent}
//             style={{
//               margin: '24px 16px',
//               padding: 12,
//               minHeight: 280,
//             }}
//           >
//             Content
//           </Content>
//         </Layout>
//       </Layout>
//     );
//   }
// }
