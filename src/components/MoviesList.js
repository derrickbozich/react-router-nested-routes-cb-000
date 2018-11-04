import React from 'react'
import { Link, Route } from 'react-router-dom';

const MoviesList = ({movies}) => {
  const moviesList = movies.map(({id, title}) => {
    return <li><Link to={/movies/`${id}`} >`${title}`</Link></li>
  })
  return(
    <div>
      <h1>Movies List</h1>
      <ul>
        {moviesList}
      </ul>
    </div>
  )
}

export default MoviesList
