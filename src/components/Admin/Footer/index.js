import { Footer } from "antd/es/layout/layout";

function FooterAdmin() {
  const footerStyle = {
    textAlign: "center",
    color: "#000",
    backgroundColor: "#fff",
  };
  return (
    <>
      <Footer style={footerStyle}>
        © 2024. All rights reserved by thanhlamcode
      </Footer>
    </>
  );
}

export default FooterAdmin;
