/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Divider, Form, Input } from "antd";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";

const LoginForm = ({ handleSubmitLogin, toggleAuthMode }) => {
  return (
    <>
      <h2>Login</h2>
      <Form layout="vertical" onFinish={handleSubmitLogin}>
        <Form.Item
          name="emailAddress"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
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
          Don't have an account? <a onClick={() => toggleAuthMode()}>Signup</a>
        </div>
      </Form>
      <Divider>Or</Divider>
      <Button
        icon={<FacebookOutlined />}
        block
        className="social-login-btn"
        style={{ background: "#4267B2", color: "white" }}
      >
        Login with Facebook
      </Button>
      <Button icon={<GoogleOutlined />} block className="social-login-btn">
        Login with Google
      </Button>
    </>
  );
};

export default LoginForm;
