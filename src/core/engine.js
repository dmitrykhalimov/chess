import { Game, move, status, moves, aiMove, getFen } from 'js-chess-engine'

// инициализирует игру
const game = new Game();

// получает ходы
const getMovies = () => {
  return game.moves();
}

console.log(game.board.configuration);
console.log(getMovies());

export {game, getMovies};