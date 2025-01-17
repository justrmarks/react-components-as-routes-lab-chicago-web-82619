import React from 'react';
import { movies } from '../data';

const Movies = () => {

let movieList = movies.map(movie=> {
  return (
    <div>
      Title: {movie.title} Time: {movie.time}
      <ul>
        {movie.genres.map(genre=> <li>{genre}</li>)}
      </ul>
    </div>)
})

  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movieList}
    </div>
  );
};

export default Movies;
