import React, { Component } from 'react';


export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <span>{this.props.appName}</span>
        <h2>Find your movie</h2>
        <input type="text"/>
        <div>
          <span>Search by</span>
          <button>Title</button>
          <button>Genre</button>
          <button>Search</button>
        </div>
      </div>
    )
  }
}
