import React from 'react'

const MoviesList = ({movies}) => {
  const moviesList = movies.map(({id, title}) => {
    <li><Link to={/movies/`${id}`} >`${title}`</Link></li>
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
