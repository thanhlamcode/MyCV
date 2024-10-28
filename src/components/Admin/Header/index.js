import { Button, Modal } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import { Link, useNavigate } from "react-router-dom";

function HeaderAdmin(props) {
  const { collapsed, setCollapsed, colorBgContainer } = props;
  const history = useNavigate();

  const handleRemoveToken = () => {
    localStorage.removeItem("token");
    history("/");
  };

  const handleLogOut = () => {
    Modal.confirm({
      title: "Bạn có chắc chắn muốn đăng xuất?",
      onOk: handleRemoveToken,
      footer: (_, { OkBtn, CancelBtn }) => (
        <>
          <CancelBtn />
          <OkBtn onClick={handleRemoveToken} />
        </>
      ),
    });
  };

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
          <Button style={{ position: "absolute", top: "20px", right: "110px" }}>
            Xem trang của bạn
          </Button>
        </Link>
        <Button style={{ position: "absolute", top: "20px", right: "10px" }}>
          Đăng xuất
        </Button>
        <Button
          onClick={() => {
            handleLogOut();
          }}
          style={{ position: "absolute", top: "20px", right: "10px" }}
        >
          Đăng xuất
        </Button>
      </Header>
    </>
  );
}

export default HeaderAdmin;
