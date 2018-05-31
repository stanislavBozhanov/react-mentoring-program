import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from "../actions/actions";


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
          <button onClick={() => this.props.searchMovies(this.searchText.current.value)}>Search</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
};

const mapDispatchToProps = dispatch => {
  return {
    searchMovies: text => dispatch(searchMovies(text))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
