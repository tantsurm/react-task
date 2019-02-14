import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import Form from './Form';
import Spinner from '../../common/spinner';

import signInRequest, { nulifyAuthState } from '../../../actions/auth';
import { USER_LIST } from '../../../constants/routes';

const SignIn = ({
  isFetching,
  payload,
  error,
  signInRequest,
  nulifyAuthState,
}) => {
  if (isFetching) {
    return <Spinner />;
  }
  if (payload) {
    nulifyAuthState();
    return <Redirect to={USER_LIST.path} />;
  }
  if (error) {
    return <div>Error comes here thou</div>;
  }

  return <Form signInRequest={signInRequest} />;
};

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching,
  payload: state.auth.payload,
  error: state.auth.error,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  signInRequest,
  nulifyAuthState,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
