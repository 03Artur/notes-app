import React, { useCallback } from 'react';
import {
  Row, Col, Divider, Typography,
} from 'antd';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { loginRequest } from '../actions/authActionCreators';

const { Title, Paragraph } = Typography;

function Login() {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (values) => {
      dispatch(loginRequest(values));
    },
    [dispatch, loginRequest],
  );

  return (
    <Row>
      <Col
        xs={{ span: 22, offset: 1 }}
        sm={{ span: 20, offset: 2 }}
        md={{ span: 18, offset: 3 }}
        lg={{ span: 16, offset: 4 }}
      >
        <Divider>
          <Title level={1}>Sign in</Title>
        </Divider>
        <LoginForm onSubmit={handleSubmit} />
        <Paragraph>
          <pre>
            <NavLink to="/signup">Create an account</NavLink>
          </pre>
        </Paragraph>
      </Col>
    </Row>
  );
}

export default Login;
