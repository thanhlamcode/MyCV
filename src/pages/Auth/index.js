/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { login } from "../../service/auth";
import { message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../../components/Auth/Login";
import RegisterForm from "../../components/Auth/Register";
import "./Auth.css";

function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();
  const location = useLocation(); // Lấy thông tin từ useLocation

  const navigate = useNavigate();

  // Kiểm tra nếu có thông báo từ PrivateRoute và hiển thị
  useEffect(() => {
    if (location.state?.message) {
      messageApi.open({
        type: "warning",
        content: location.state.message, // Hiển thị thông báo từ PrivateRoute
      });
    }
  }, [location.state, messageApi]);

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Đăng nhập thất bại!",
    });
  };

  const handleSubmitLogin = async (e) => {
    console.log(e);
    const respone = await login(e);
    if (respone.code === 200) {
      navigate("/admin/profile", {
        state: { message: "Đăng nhập thành công!" },
      });
    } else {
      error();
    }
  };

  return (
    <div className="auth-wrapper">
      {contextHolder}
      <div className="auth-container">
        <div className="auth-card">
          {isSignIn ? (
            <LoginForm
              handleSubmitLogin={handleSubmitLogin}
              toggleAuthMode={toggleAuthMode}
            />
          ) : (
            <RegisterForm toggleAuthMode={toggleAuthMode} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
