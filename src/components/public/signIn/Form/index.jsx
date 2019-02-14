import React from 'react';

class Form extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit = (event) => {
    const { signInRequest } = this.props;
    const { email, password } = this.state;

    event.preventDefault();

    signInRequest(email, password);
  }

  handleEmailInput = ({ target }) => {
    this.setState({
      email: target.value,
    });
  }

  handlePasswordInput = ({ target }) => {
    this.setState({
      password: target.value,
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <form className="m-auto p-5 col-8 col-lg-6 text-center" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                value={email}
                onChange={this.handleEmailInput}
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={this.handlePasswordInput}
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
