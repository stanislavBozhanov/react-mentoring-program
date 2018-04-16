import React, {Component} from 'react';
import HelloWorldReactComponent from './HelloWorldReactComponent';
import helloWorldCreateElement from './helloWorldCreateElement';
import HelloWorldReactPureComponent from './HelloWorldReactPureComponent';
import HelloWorldFunctionalComponent from './HelloWorldFunctionalComponent';


export default class App extends Component {
  render() {
    return (
      <div>
        <HelloWorldReactComponent/>
        {helloWorldCreateElement}
        <HelloWorldReactPureComponent/>
        <HelloWorldFunctionalComponent/>
      </div>
    );
  }
}
