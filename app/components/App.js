import React, {Component} from 'react';
import HelloWorld1 from './HelloWorld1';
import helloworld2 from './helloworld2';
import HelloWorld3 from './HelloWorld3';
import HelloWorld4 from './HelloWorld4';


export default class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld1/>
        {helloworld2}
        <HelloWorld3/>
        <HelloWorld4/>
      </div>
    );
  }
}
