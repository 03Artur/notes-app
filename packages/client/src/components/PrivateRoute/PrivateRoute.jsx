/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../../selectors';

function PrivateRoute({ redirectTo, ...rest }) {
  const user = useSelector(userSelector);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    user ? <Route {...rest} /> : <Redirect to={redirectTo} />
  );
}
PrivateRoute.propTypes = {
  redirectTo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

PrivateRoute.defaultProps = {
  redirectTo: '/login',
};

export default PrivateRoute;
