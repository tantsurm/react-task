import React from 'react';
import { Route, Redirect } from 'react-router';

import storageKey from '../../../constants/storageKey';
// import { LANDING } from '../../../constants/routes'

const ProtectedRoute = ({ component: Component, path, access }) => (
  <Route
    path={path}
    render={(props) => {
      const token = localStorage.getItem(storageKey);

      if (access === 'public' || (token && access === 'user-only')) {
        return <Component {...props} />;
      }

      return <Redirect to="/" />;
    }}
  />
);

export default ProtectedRoute;
