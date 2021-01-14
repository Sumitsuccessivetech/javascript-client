import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthLayout } from '../layouts';

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    render={(matchProps) => (
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <AuthLayout>
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Component {...matchProps} />
      </AuthLayout>
    )}
  />
);
AuthRoute.propTypes = {
  component: PropTypes.object.isRequired,
};
export default AuthRoute;
