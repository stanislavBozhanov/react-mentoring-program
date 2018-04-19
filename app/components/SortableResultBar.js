import React, { Component } from 'react';
import SimilarMoviesResultBar from "./SimilarMoviesResultBar";


export default class SortableResultBar extends Component {
  render() {
    return (
      <div>
        <span>{this.props.infoText}</span>
        <div>
          <span>Sort by</span>
          <button>release date</button>
          <button>rating</button>
        </div>
      </div>
    );
  }
}
