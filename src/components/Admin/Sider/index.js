import React from "react";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  ProfileOutlined,
  FieldTimeOutlined,
  UserOutlined,
  VideoCameraOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

function SiderAdmin(props) {
  const { collapsed } = props;
  const location = useLocation(); // Get the current path

  // Create a mapping from paths to menu keys
  const pathToKeyMap = {
    "/admin/profile": "profile",
    "/admin/features": "features",
    "/admin/project": "project",
    "/admin/resume": "resume",
    "/admin/contacts": "contacts",
  };

  // Get the key that corresponds to the current path
  const selectedKey = pathToKeyMap[location.pathname] || "profile"; // Default to "profile" if path not found

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div className="wrap-logo">
          <img
            src="https://res.cloudinary.com/dqlfxshkl/image/upload/v1723993959/rzppkaxfeummeyzemn8b.png"
            alt="logo"
          />
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[selectedKey]} // Use selectedKey instead of defaultSelectedKeys
          items={[
            {
              key: "profile",
              icon: <ProfileOutlined />,
              label: <Link to="profile"> Profile</Link>,
            },
            {
              key: "features",
              icon: <UserOutlined />,
              label: <Link to="features"> Features</Link>,
            },
            {
              key: "project",
              icon: <VideoCameraOutlined />,
              label: <Link to="project"> Project</Link>,
            },
            {
              key: "resume",
              icon: <FieldTimeOutlined />,
              label: <Link to="resume"> Resume</Link>,
            },
            {
              key: "contacts",
              icon: <ContactsOutlined />,
              label: <Link to="contacts"> Contacts</Link>,
            },
          ]}
        />
      </Sider>
    </>
  );
}

export default SiderAdmin;
