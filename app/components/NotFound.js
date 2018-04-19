import React, { Component } from 'react';
import Footer from "./Footer";


export default class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <span>404 Not found</span>
        <Footer/>
      </React.Fragment>
    );
  }
}
