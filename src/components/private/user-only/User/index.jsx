import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './index.css';

import Spinner from '../../../common/spinner';
import getSingleUser from '../../../../actions/singleUser';

class User extends Component {
  componentDidMount() {
    const { match: { params: { id = 1 } }, getSingleUser, token } = this.props;

    getSingleUser(id, token);
  }

  render() {
    const { isFetching, payload, error } = this.props;

    if (isFetching) {
      return <Spinner />;
    }

    if (payload) {
      return (
        <div className="container user mt-3 jumbotron">
          <div className="row justify-content-around align-items-center">
            <img src={payload.avatar} className="user__avatar rounded-circle" alt="avatar" />
            <h1 className="user__name">{`${payload.first_name}  ${payload.last_name}`}</h1>
          </div>
          <hr className="my-4" />
          <p className="p-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex exercitationem quae harum iste enim quas ipsam sint adipisci? Necessitatibus eos ratione vero illum impedit numquam corrupti saepe ipsum recusandae!</p>
        </div>
      );
    }

    if (error) {
      return (
        <div>
          <p>Some error occurred {error}</p>
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = state => ({
  isFetching: state.user.isFetching,
  payload: state.user.payload,
  error: state.user.error,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  getSingleUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(User);
