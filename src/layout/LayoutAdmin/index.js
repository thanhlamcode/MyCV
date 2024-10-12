import React, { useState } from "react";
import { Layout, theme } from "antd";
import "./style.scss";
import { Outlet } from "react-router-dom";
import SiderAdmin from "../../components/Admin/Sider";
import HeaderAdmin from "../../components/Admin/Header";
const { Content } = Layout;

const LayoutAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh" }}>
      <SiderAdmin collapsed={collapsed} />
      <Layout>
        <HeaderAdmin
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          colorBgContainer={colorBgContainer}
        />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutAdmin;
