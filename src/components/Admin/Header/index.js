import { Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

function HeaderAdmin(props) {
  const { collapsed, setCollapsed, colorBgContainer } = props;

  return (
    <>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <Link to="/detail/thanhlam">
          <Button style={{ position: "absolute", top: "20px", right: "10px" }}>
            Xem trang của bạn
          </Button>
        </Link>
      </Header>
    </>
  );
}

export default HeaderAdmin;
