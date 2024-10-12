import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function SiderAdmin(props) {
  const { collapsed } = props;
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
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "profile",
              icon: <VideoCameraOutlined />,
              label: <Link to="profile"> Profile</Link>,
            },
            {
              key: "1",
              icon: <UserOutlined />,
              label: <Link to="resume"> Resume</Link>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
    </>
  );
}

export default SiderAdmin;
