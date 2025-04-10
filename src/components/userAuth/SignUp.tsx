// pages/Signup.tsx
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import AuthLayout from "./AuthLayout";
import "./style.css";
const SignUp: React.FC = () => {
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
      title="Create Account"
      footerText="Already have an account?"
      footerLinkText="Sign In"
      footerLinkPath="/login"
    >
      <Form name="signup_form" onFinish={onFinish} className="auth-form">
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <label className="form_label">Email Address</label>
          <Input
            prefix={<MailOutlined className="form-icon" />}
            placeholder="Enter your email"
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
            placeholder="Create a password"
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

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="auth-button"
            loading={loading}
            size="large"
          >
            CREATE ACCOUNT
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default SignUp;
