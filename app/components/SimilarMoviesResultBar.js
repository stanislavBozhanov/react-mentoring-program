import React, { Component } from 'react';


export default class SimilarMoviesResultBar extends Component {
  render() {
    return (
      <div>
        <span>{this.props.infoText}</span>
      </div>
    )
  }
}
