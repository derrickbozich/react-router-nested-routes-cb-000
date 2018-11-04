import React from 'react'
import { Link } from 'react-router-dom';


const Movie = ({match}) => {
  return(
    <div>
      <h1>Movie Component</h1>
      <Link to={`${match.url}/new_route`}> New Route </Link>
    </div>
  )
}

export default Movie
