import { Game, move, status, moves, aiMove, getFen } from 'js-chess-engine'

// инициализирует игру
const game = new Game();

// получает ходы
const getMovies = () => {
  return game.moves();
}

const getPiecesConfiguration = () => {
  return game.board.configuration.pieces;
}

const initAIMove = () => {
  game.aiMove();
  return game.board.configuration.pieces;
}



// console.log(game.board.configuration);
// console.log(getMovies());

export {game, getMovies, move, getPiecesConfiguration, initAIMove};