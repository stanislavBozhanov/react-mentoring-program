import React, {Component} from 'react';
import HelloWorldReactComponent from './HelloWorldReactComponent';
import helloWorldCreateElement from './helloWorldCreateElement';
import HelloWorldReactPureComponent from './HelloWorldReactPureComponent';
import HelloWorldFunctionalComponent from './HelloWorldFunctionalComponent';
import ErrorBoundary from './ErrorBoundary';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <HelloWorldReactComponent/>
        {helloWorldCreateElement}
        <HelloWorldReactPureComponent/>
        <HelloWorldFunctionalComponent/>
      </ErrorBoundary>
    );
  }
}
