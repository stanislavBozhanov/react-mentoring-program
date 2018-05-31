import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from "./Movie";


class MovieList extends Component {
  render() {
    return (
      <div>
        <ul>
          { this.props.movies ?
            this.props.movies.map((movie) => <Movie key={movie.id} movie={movie} />) :
            'No similar movies found.'
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFiltered
  }
}

export default connect(mapStateToProps)(MovieList);
