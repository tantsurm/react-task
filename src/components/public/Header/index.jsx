import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import storageKey from '../../../constants/storageKey';

import { denyAuth } from '../../../actions/authCheckout';
import * as routes from '../../../constants/routes';

class Header extends Component {
  handleLogOut = () => {
    const { denyAuth, history } = this.props;

    localStorage.removeItem(storageKey);
    denyAuth();
    history.push(routes.LANDING.path);
  }

  render() {
    const { isAuthorized } = this.props;

    return (
      <header className="text-center">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
          <Link className="navbar-brand" to={routes.LANDING.path}>Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={routes.USER_LIST.path}>User List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={routes.USER.path}>User</Link>
              </li>
            </ul>
            {
              isAuthorized
                ? <button type="button" className="btn btn-outline-primary font-weight-bold ml-auto" onClick={this.handleLogOut}>Log Out</button>
                : null
            }
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: state.authStatus.isAuthorized,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  denyAuth,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
