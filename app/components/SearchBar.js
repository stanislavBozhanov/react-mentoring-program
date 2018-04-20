import React, { Component } from 'react';


export default class SearchBar extends Component {
  searchText = React.createRef();

  searchMovies = () => {
    this.props.search(this.searchText.current.value)
  };

  render() {
    return (
      <div className="search-bar">
        <span>{this.props.appName}</span>
        <h2>Find your movie</h2>
        <input type="text" name="searchText" ref={this.searchText}/>
        <div>
          <span>Search by</span>
          <button>Title</button>
          <button>Genre</button>
          <button onClick={this.searchMovies}>Search</button>
        </div>
      </div>
    )
  }
}
