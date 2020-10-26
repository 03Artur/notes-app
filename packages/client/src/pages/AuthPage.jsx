import React from 'react';
import { useSelector } from 'react-redux';
import {
  Switch, Route, useHistory,
} from 'react-router-dom';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import { userSelector } from '../selectors';

function AuthPage() {
  const history = useHistory();
  const user = useSelector(userSelector);

  if (user) {
    history.replace('/');
    return null;
  }

  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
    </Switch>
  );
}

export default AuthPage;
