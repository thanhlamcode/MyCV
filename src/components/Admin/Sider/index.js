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
          defaultSelectedKeys={["profile"]}
          items={[
            {
              key: "profile",
              icon: <VideoCameraOutlined />,
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
              icon: <UploadOutlined />,
              label: <Link to="resume"> Resume</Link>,
            },
            {
              key: "contacts",
              icon: <UploadOutlined />,
              label: <Link to="contacts"> Contacts</Link>,
            },
          ]}
        />
      </Sider>
    </>
  );
}

export default SiderAdmin;
