import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getUserList from '../../../../actions/home';

import Spinner from '../../../common/spinner';
import UserList from './List';

class Home extends Component {
  componentDidMount() {
    const {
      getUserList,
      token,
      match: {
        params: {
          page = 1,
        },
      },
    } = this.props;

    getUserList(page, token);
  }

  componentDidUpdate() {
    const { page, match: { params }, getUserList } = this.props;
    console.log('COMPONENT DID UPDATE');
    if (page !== Number(params.page) && page !== null && params.page >= 1) {
      console.log('AND PULLED REQUEST');
      getUserList(params.page);
    }
  }

  getNextPage = () => {
    const { page, history } = this.props;

    history.push(`/list/${page + 1}`);
  };

  getPrevPage = () => {
    const { page, history } = this.props;

    history.push(`/list/${page + -1}`);
  };

  render() {
    const {
      userList,
      page,
      totalPages,
      isLoading,
      error,
      match,
    } = this.props;

    console.log('--MATCH--', match, page); // delete match
    if (userList.length) console.log('RECEIVED DATA', userList);

    return (
      <Fragment>
        <UserList
          list={userList}
          getNextPage={this.getNextPage}
          getPrevPage={this.getPrevPage}
          isLast={!(totalPages - page)}
          isFirst={page === 1}
        />
        {page && <span>{page} page</span>}
        {isLoading && <Spinner />}
        {error && <p>{error}</p>}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.list.userList,
  page: state.list.pagination.page,
  totalPages: state.list.pagination.total_pages,
  isLoading: state.list.isLoading,
  error: state.list.error,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  getUserList,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
