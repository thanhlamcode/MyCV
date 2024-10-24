import React, { useState } from "react";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import SiderAdmin from "../../components/Admin/Sider";
import HeaderAdmin from "../../components/Admin/Header";
import FooterAdmin from "../../components/Admin/Footer";
import "./style.scss";
const { Content } = Layout;

const LayoutAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div className="admin">
      <Layout style={{ height: "100%" }}>
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
          <FooterAdmin />
        </Layout>
      </Layout>
    </div>
  );
};
export default LayoutAdmin;
