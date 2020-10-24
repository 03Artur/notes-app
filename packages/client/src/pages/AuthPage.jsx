import React, { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import LoginForm from '../components/LoginForm';
import { Row, Col, Divider, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import RegistrationForm from '../components/RegistrationForm';
import { Switch, Route, NavLink, useHistory } from 'react-router-dom';
import { loginRequest, signUpRequest } from '../actions/authActionCreators';

const { Title, Paragraph } = Typography;

function AuthPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          loginRequest,
          signUpRequest,
        },
        dispatch,
      ),
    [dispatch],
  );

  if (user) {
    history.replace('/');
  }

  return (
    <Row>
      <Col
        xs={{ span: 22, offset: 1 }}
        sm={{ span: 20, offset: 2 }}
        md={{ span: 18, offset: 3 }}
        lg={{ span: 16, offset: 4 }}
      >
        <Switch>
          <Route path="/login">
            <Divider>
              <Title level={1}>Sign in</Title>
            </Divider>
            <LoginForm
              onSubmit={(values) => {
                actions.loginRequest(values);
              }}
            />
            <Paragraph>
              <pre>
                <NavLink to="/signup">Create an account</NavLink>
              </pre>
            </Paragraph>
          </Route>
          <Route path="/signup">
            <Divider>
              <Title level={1}>Create your account</Title>
            </Divider>
            <RegistrationForm onSubmit={actions.signUpRequest} />
            <Paragraph>
              <pre>
                <NavLink to="/login">Have an account</NavLink>
              </pre>
            </Paragraph>
          </Route>
        </Switch>
      </Col>
    </Row>
  );
}

export default AuthPage;
