// pages/Login.tsx
import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import AuthLayout from "./AuthLayout";

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onFinish = (values: any) => {
    setLoading(true);
    console.log("Received values of form: ", values);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <AuthLayout
      title="Login"
      footerText="Don't have an account?"
      footerLinkText="Register Now"
      footerLinkPath="/signup"
    >
      <Form
        name="login_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="auth-form"
      >
        <Form.Item
          name="username"
          rules={[
            { required: true, message: "Please input your username or email!" },
          ]}
        >
          <label className="form_label">Username or Email Address</label>
          <Input
            prefix={<UserOutlined className="form-icon" />}
            placeholder="Enter your username or email"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <label className="form_label">Password</label>
          <Input.Password
            prefix={<LockOutlined className="form-icon" />}
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            size="large"
            iconRender={(visible) => (
              <span
                onClick={togglePasswordVisibility}
                className="password-toggle"
              >
                {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </span>
            )}
          />
        </Form.Item>

        <div className="form-options">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="remember-me"> Remember Me</Checkbox>
          </Form.Item>
          <a className="forgot-password" href="/forgot-password">
            Forgot Password?
          </a>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="auth-button"
            loading={loading}
            size="large"
          >
            LOG IN
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default Login;
