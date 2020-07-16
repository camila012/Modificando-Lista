import React,{useState} from 'react';
import ModifyUsers from './ModifyUsers';
import Comments from './Comments';
import { Layout, Menu, Breadcrumb} from 'antd';
import { UserOutlined } from '@ant-design/icons';



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



const Navigations = () => {
  //layout
  const [collapsed,setCollapsed] = useState(false);
  const onCollapse = collapsed => setCollapsed(collapsed);

  
  
  
  
  
  return (
    
    
    
    <Layout style={{ minHeight: '100vh' }}>
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
    <div className="logo" />
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
    <Menu.Item key="3">Tom</Menu.Item>
    <Menu.Item key="4">Bill</Menu.Item>
    <Menu.Item key="5">Alex</Menu.Item>
    </SubMenu>
    </Menu>
    </Sider>
    <Layout className="site-layout">
    <Header className="site-layout-background" style={{ padding: 0 }} /> 
    <Content style={{ margin: '0 16px' }}>
    <Breadcrumb className="Header" style={{ margin: '16px 0'}}>
    <Breadcrumb.Item>User List</Breadcrumb.Item>
    </Breadcrumb>
    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
    <ModifyUsers/>
    </div>
    </Content>
    
    <Footer>
      <div>
      <Comments/>
      </div>
    </Footer>
    </Layout>
    </Layout>
    
    
    );
  }
  
  
  export default Navigations;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  