import React from 'react';
import { useNavigate } from 'react-router';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const LayoutHeader = () => {
  const navigate = useNavigate();
  const onMenuChange = (item: any) => {
    switch (item.key) {
      case '业务':
        navigate('/bussiness');
        break;
      case '关于':
        navigate('/about', { replace: true, state: { id: '666' } });
        break;
      default:
        navigate('/');
    }
  };
  return (
    <Header style={{ background: '#fff', position: 'fixed', zIndex: 1, width: '100%', border: 0 }}>
      <Menu mode="horizontal" onClick={onMenuChange}>
        <Menu.Item key="首页">首页</Menu.Item>
        <Menu.Item key="业务">业务</Menu.Item>
        <Menu.Item key="关于">关于</Menu.Item>
      </Menu>
    </Header>
  );
};

export default LayoutHeader;
