/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Form, Input, Button, Divider } from "antd";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import "./Auth.css";

function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="auth-card">
          {isSignIn ? (
            <>
              <h2>Login</h2>
              <Form layout="vertical">
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>
                <div className="forgot-password">
                  <a href="#">Forgot password?</a>
                </div>
                <Button type="primary" htmlType="submit" block>
                  Login
                </Button>
                <div className="switch-mode">
                  Don’t have an account? <a onClick={toggleAuthMode}>Signup</a>
                </div>
              </Form>
              <Divider>Or</Divider>
              <Button
                icon={<FacebookOutlined />}
                block
                className="social-login-btn"
              >
                Login with Facebook
              </Button>
              <Button
                icon={<GoogleOutlined />}
                block
                className="social-login-btn"
              >
                Login with Google
              </Button>
            </>
          ) : (
            <>
              <h2>Signup</h2>
              <Form layout="vertical">
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please create a password!" },
                  ]}
                >
                  <Input.Password placeholder="Create password" />
                </Form.Item>
                <Form.Item
                  name="confirm-password"
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                  ]}
                >
                  <Input.Password placeholder="Confirm password" />
                </Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Signup
                </Button>
                <div className="switch-mode">
                  Already have an account? <a onClick={toggleAuthMode}>Login</a>
                </div>
              </Form>
              <Divider>Or</Divider>
              <Button
                icon={<FacebookOutlined />}
                block
                className="social-login-btn"
                style={{ background: "#4267B2" }}
              >
                Signup with Facebook
              </Button>
              <Button
                icon={<GoogleOutlined />}
                block
                className="social-login-btn"
              >
                Signup with Google
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
