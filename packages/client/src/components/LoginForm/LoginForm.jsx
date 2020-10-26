/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';

const LoginForm = ({ onSubmit }) => (
  <Form
    labelCol={{
      span: 4,
    }}
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

    <Form.Item wrapperCol={{ offset: 4 }}>
      <Button type="primary" htmlType="submit">
        Sign in
      </Button>
    </Form.Item>
  </Form>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
