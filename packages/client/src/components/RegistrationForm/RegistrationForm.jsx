/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input } from 'antd';
import * as Yup from 'yup';

const passwordRule = {
  pattern: /(?=.*?\d)(?=.*?[a-z])(?=.*?[A-Z])^.{8,60}$/,
  message:
    'Your password must be at least 8 characters long, be of mixed case and also contain a digit or symbol!',
};

const passwordSchema = Yup.string().matches(passwordRule.pattern, passwordRule.message).required();

const RegistrationForm = (props) => {
  const { onSubmit } = props;

  return (
    <Form labelCol={{ span: 4 }} onFinish={onSubmit}>
      <Form.Item
        label="First name"
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please input your first name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last name"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your last name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          () => ({
            validator(rule, value) {
              return passwordSchema.validate(value);
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              // eslint-disable-next-line prefer-promise-reject-errors
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ xs: { offset: 4 } }}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

RegistrationForm.defaultProps = {
  // bla: 'test',
};

export default RegistrationForm;
