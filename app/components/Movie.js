import React, { Component } from 'react';


export default class Movie extends Component {
  render() {
    let movie = this.props.movie;
    return (
      <div>
        <img src={movie.poster_path} alt="Cover photo"/>
        <span>{movie.title}</span>
        <span>{movie.year}</span>
        {movie.genres.map(genre => <span key={genre}>{genre} </span>)}
      </div>
    )
  }
}
