import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error('FALLBACK INFO', error, info);
  }

  render() {
    // #QUESTION: may this.props.children destructuring cause extra renders ?
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h1>Something went wrong! Sorry, dude!</h1>;
    }
    return children;
  }
}

export default ErrorBoundary;
