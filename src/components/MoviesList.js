import React from 'react'
import { Link, Route } from 'react-router-dom';

const Sub = () => {
  return(
    <div>
      <h1>Sub Component</h1>
    </div>
  )
}

const MoviesList = ({match, movies}) => {
  debugger
  const moviesList = movies.map(({id, title}) => {
    return <li key={id}><Link to={`/movies/${id}`}> {title}</Link></li>
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
