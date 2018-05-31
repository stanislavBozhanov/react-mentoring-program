import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from "../actions/actions";


class SearchBar extends Component {
  searchText = React.createRef();

  render() {
    let input;
    return (
      <div className="search-bar">
        <span>netflixroulette</span>
        <h2>Find your movie</h2>
        <input type="text" name="searchText" ref={this.searchText}/>
        <div>
          <span>Search by</span>
          <button>Title</button>
          <button>Genre</button>
          <button onClick={() => this.props.search(this.searchText.current.value)}>Search</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search
  }
};

export default connect(mapDispatchToProps)(SearchBar);
