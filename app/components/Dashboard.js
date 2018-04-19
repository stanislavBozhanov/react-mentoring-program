import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import SortableResultBar from "./SortableResultBar";
import MovieList from "./MovieList";
import Footer from "./Footer";


export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <SortableResultBar/>
        <MovieList/>
      </React.Fragment>
    );
  }
}
