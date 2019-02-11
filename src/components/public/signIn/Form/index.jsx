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
      <form onSubmit={this.handleSubmit}>
        <h1>Sign in before continue:</h1>
        <hr />
        <input type="text" value={email} onChange={this.handleEmailInput} />
        <input type="password" value={password} onChange={this.handlePasswordInput} />
        <hr />
        <button type="submit">Sign in!</button>
      </form>
    );
  }
}

export default Form;
