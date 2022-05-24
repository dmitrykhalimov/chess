// определяет цвет клетки

import {getMovies} from './engine';

const possibleMovies = (cellAddress) => {
  const movies = getMovies();

  console.log(movies);

  return movies[cellAddress] ? movies[cellAddress] : [];
}

export {possibleMovies};