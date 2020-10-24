import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: {
    span: 4,
  },
};

const tailLayout = {
  wrapperCol: { offset: 4 },
};

const LoginForm = ({ onSubmit }) => {
  return (
    <Form
      {...layout}
      name="login"
      initialValues={{
        remember: true,
      }}
      onFinish={onSubmit}
    >
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your E-male!',
          },
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
        ]}
      >
        <Input placeholder="e-mail address" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder="password" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
