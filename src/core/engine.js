import { Game, move, status, moves, aiMove, getFen } from 'js-chess-engine'
import { translateHistory } from './translateHistory'

// инициализирует игру
let game;

// получает ходы
const getMovies = () => {
  return game.moves();
}

const getPiecesConfiguration = () => {
  return game.board.configuration.pieces;
}

const getHistory = () => {
  translateHistory(game.getHistory())
  return game.getHistory();
}

const initAIMove = (level) => {
  game.aiMove(level);
  return game.board.configuration.pieces;
}

const startGame = (playerColor, level) => {
  game = new Game();

  if (playerColor === 'black') {
    game.aiMove(level)
  }
}



// console.log(game.board.configuration);
// console.log(getMovies());

export {
  game, 
  getMovies, 
  getPiecesConfiguration, 
  initAIMove,
  getHistory,
  startGame
};