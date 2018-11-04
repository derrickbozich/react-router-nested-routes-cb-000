import React from 'react'

const MoviesList = ({movies}) => {
  const moviesList = movies.map(({id, title}) => {
    <li><Link to={/movies/`${id}`}</li>
  })
  return(
    <div>
      <h1>Movies List</h1>
    </div>
  )
}

export default MoviesList
