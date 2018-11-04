// ./src/containers/MoviesPage.js
import React from 'react';
import { connect } from 'react-redux';
import MoviesList from '../components/MoviesList';
import Movie from '../components/MoviesList';
import { Link, Route } from 'react-router-dom';

const MoviesPage = ({ match, movies }) =>
  <div>
    <MoviesList movies={movies} />
    <Route path={`/movies/:movieId`} component={Movie} />
  </div>;

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MoviesPage);
