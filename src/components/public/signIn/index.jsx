import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from './Form';
import signInRequest from '../../../actions/auth';

const SignIn = ({
  isFetching,
  payload,
  error,
  signInRequest,
}) => {
  if (isFetching) {
    return <div>Loading</div>;
  }
  if (payload) {
    return <div>Here comes some data</div>;
  }
  if (error) {
    return <div>Error comes here thou</div>;
  }

  return <Form signInRequest={signInRequest} />;
};

const mapStateToProps = ({ auth }) => ({
  ...auth,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  signInRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
