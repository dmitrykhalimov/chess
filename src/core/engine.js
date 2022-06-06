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

const getCurrentTurn = () => {
  return game.board.configuration.turn;
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
}

const exportParty = () => {
  return game.exportJson();
}



// console.log(game.board.configuration);
// console.log(getMovies());

export {
  game, 
  getMovies, 
  getPiecesConfiguration,
  getCurrentTurn,
  initAIMove,
  getHistory,
  exportParty,
  startGame
};