import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import SortableResultBar from "./SortableResultBar";
import MovieList from "./Movies/MovieList";


export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieList: []
    };
  }

  componentWillMount() {
    fetch('http://react-cdp-api.herokuapp.com/movies')
      .then(response => response.json())
      .then(jsonResponse => this.setState({movies: jsonResponse.data}))
  }

  search = input => {
    let movies = this.state.movies;

    let result = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(input.toLowerCase())
    });
    this.setState({movieList: result});
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar search={this.search} />
        <SortableResultBar/>
        <MovieList movies={this.state.movieList}/>
      </React.Fragment>
    );
  }
}
