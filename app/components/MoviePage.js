import React, { Component } from 'react';
import MovieInfo from "./MovieInfo";
import SimilarMoviesResultBar from "./SimilarMoviesResultBar";
import MovieList from "./MovieList";
import Footer from "./Footer";


export default class MoviePage extends Component {
  render() {
    return (
      <React.Fragment>
        <MovieInfo/>
        <SimilarMoviesResultBar/>
        <MovieList/>
        <Footer/>
      </React.Fragment>
    );
  }
}
