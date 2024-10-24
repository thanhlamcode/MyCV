/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Divider, Form, Input } from "antd";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";

const RegisterForm = ({ toggleAuthMode, handleSubmitRegister }) => {
  return (
    <>
      <h2>Signup</h2>
      <Form layout="vertical" onFinish={handleSubmitRegister}>
        <Form.Item
          name="emailAddress"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please create a password!" }]}
        >
          <Input.Password placeholder="Create password" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
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
        style={{ background: "#4267B2", color: "white" }}
      >
        Signup with Facebook
      </Button>
      <Button icon={<GoogleOutlined />} block className="social-login-btn">
        Signup with Google
      </Button>
    </>
  );
};

export default RegisterForm;
