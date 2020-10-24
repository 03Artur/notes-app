import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import { REFRESH_TOKEN_KEY } from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { refreshAuth } from './actions/authActionCreators';

const HomePage = lazy(() => import('./pages/HomePage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));

function App() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    if (!user && refreshToken) {
      dispatch(
        refreshAuth({
          refreshToken,
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
