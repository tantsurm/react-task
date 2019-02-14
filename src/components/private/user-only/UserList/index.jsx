import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { USER_LIST, USER } from '../../../../constants/routes';
import getUserList from '../../../../actions/userList';

import Spinner from '../../../common/spinner';
import PageController from './pageController';
import List from './List';

class UserList extends Component {
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
    const {
      page,
      match: { params },
      getUserList,
      isLoading,
    } = this.props;

    if (page !== Number(params.page) && page && params.page && !isLoading) {
      getUserList(params.page);
    }
  }

  getNextPage = () => {
    const { page, history } = this.props;

    history.push(`${USER_LIST.path}/${page + 1}`);
  };

  getPrevPage = () => {
    const { page, history } = this.props;

    history.push(`${USER_LIST.path}/${page + -1}`);
  };

  getSelectedPage = (id) => {
    const { history } = this.props;

    history.push(`${USER_LIST.path}/${id}`);
  }

  onUserClick = (id) => {
    const { history } = this.props;

    history.push(`${USER.path}/${id}`);
  }

  render() {
    const {
      userList,
      page,
      perPage,
      totalPages,
      isLoading,
      error,
    } = this.props;

    return (
      <div className="user-list">
        <List
          list={userList}
          getNextPage={this.getNextPage}
          getPrevPage={this.getPrevPage}
          perPage={perPage}
          isLast={!(totalPages - page)}
          isFirst={page === 1}
          isLoading={isLoading}
          handleClick={this.onUserClick}
        />
        {
          page && userList.length
            // eslint-disable-next-line max-len
            ? <PageController handleClick={this.getSelectedPage} page={page} totalPages={totalPages} />
            : null
        }
        {isLoading && <Spinner centered={false} />}
        {error && <p>{error}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.list.userList,
  page: state.list.pagination.page,
  perPage: state.list.pagination.per_page,
  totalPages: state.list.pagination.total_pages,
  isLoading: state.list.isLoading,
  error: state.list.error,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  getUserList,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
