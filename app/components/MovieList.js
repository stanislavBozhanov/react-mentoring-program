import React, { Component } from 'react';
import Movie from "./Movie";


export default class MovieList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.movies.map((movie) => <Movie key={movie.name} movie={movie} />)}
        </ul>
      </div>
    )
  }
}
