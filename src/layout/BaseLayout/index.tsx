import { Layout, Menu } from 'antd';
import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import styles from './index.module.less'

const BaseLayout = () => {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
};

export default BaseLayout;
