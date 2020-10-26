import React, { useCallback } from 'react';
import {
  Row, Col, Divider, Typography,
} from 'antd';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';
import { signUpRequest } from '../actions/authActionCreators';

const { Title, Paragraph } = Typography;

function Login() {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (values) => {
      dispatch(signUpRequest(values));
    },
    [dispatch, signUpRequest],
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
        <RegistrationForm onSubmit={handleSubmit} />
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
