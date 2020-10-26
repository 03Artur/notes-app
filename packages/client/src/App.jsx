import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import { REFRESH_TOKEN_KEY } from './constants';
import { useDispatch } from 'react-redux';
import { refreshAuth } from './actions/authActionCreators';

const HomePage = lazy(() => import('./pages/HomePage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem(REFRESH_TOKEN_KEY)) {
      dispatch(
        refreshAuth({
          refreshToken: localStorage.getItem(REFRESH_TOKEN_KEY),
        }),
      );
    }
  }, []);

  return (
    <Router>
      <Suspense fallback={'Loading...'}>
        <Switch>
          <PrivateRoute path="/" exact component={HomePage} />
          <Route path={['/login', '/signup']} component={AuthPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
