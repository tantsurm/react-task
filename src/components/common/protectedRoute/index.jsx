import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

import { confirmAuth, denyAuth } from '../../../actions/authCheckout';

import storageKey from '../../../constants/storageKey';
import { LANDING } from '../../../constants/routes';
import { bindActionCreators } from 'redux';

const ProtectedRoute = ({
  component: Component,
  path,
  access,
  confirmAuth,
  denyAuth,
}) => (
  <Route
    path={path}
    render={(props) => {
      const token = localStorage.getItem(storageKey);

      if (token) {
        confirmAuth();
      }

      if (access === 'public' || (token && access === 'user-only')) {
        return <Component {...props} token={token} />;
      }

      denyAuth();
      return <Redirect to={LANDING.path} />;
    }}
  />
);

const mapDispatchToProps = dispatch => bindActionCreators({
  confirmAuth,
  denyAuth,
}, dispatch);

export default connect(null, mapDispatchToProps)(ProtectedRoute);
