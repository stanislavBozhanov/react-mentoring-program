import React, { Component } from 'react';


export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // log errors to error reporting service
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h1>An error occurred!</h1>
          <details>
            {this.state.error && this.state.errorInfo.toString()}
            <br/>
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
