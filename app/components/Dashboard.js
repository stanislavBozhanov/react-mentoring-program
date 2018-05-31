import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from "./SearchBar";
import SortableResultBar from "./SortableResultBar";
import MovieList from "./Movies/MovieList";
import { fetchMovies } from "../actions/actions";


class Dashboard extends Component {
  componentWillMount() {
    this.props.dispatch(fetchMovies());
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <SortableResultBar/>
        <MovieList />
      </React.Fragment>
    );
  }
}

export default connect()(Dashboard);
