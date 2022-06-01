import { highlightCell } from "../core/highlightCell";
import { possibleMovies} from "../core/possibleMovies";
import { moveController} from "../core/moveController";
import { getPiecesConfiguration, initAIMove, getHistory, getMovies, startGame } from "../core/engine"

const initalState = {
  levelAI: 2,
  player: 'white',
  highlightedCell: '',
  possibleMovies: [],
  turn: 'white',
  history: [],
};

export default function rootReducer(state = initalState, action) {
  switch(action.type) {
    case 'SELECT_CELL':
      console.log('Выбрана ячейка');
      return {
        ...state,
        ...moveController(action.payload),
        history: getHistory().map((item) => item),
      };
      // return moveController(action.payload.cellName, action.payload.cellFigure, action.payload.highlightedCell)
    case 'INIT':
      startGame();
      return {
        ...state,
        history: [],
        pieces: getPiecesConfiguration()
      }
    // case 'INC':
      // const titkins = state.history.map((item) => item);
      // titkins.push('333')
      // return Object.assign({}, state, {history: titkins})
    case 'AI_TURN':
      console.log(state.levelAI)
      return {
        ...state,
        turn: 'white',
        pieces: initAIMove(state.levelAI),
        history: getHistory().map((item) => item),
      }
    case 'CHANGE_AI_LEVEL':
      return {
        ...state,
        levelAI: action.payload
      }
    default: 
      return state
  }
}