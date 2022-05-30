import { highlightCell } from "../core/highlightCell";
import { possibleMovies} from "../core/possibleMovies";
import { moveController} from "../core/moveController";
import { getPiecesConfiguration, initAIMove, getHistory, getMovies } from "../core/engine"

const initalState = {
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
      return {
        ...state,
        pieces: getPiecesConfiguration()
      }
    // case 'INC':
      // const titkins = state.history.map((item) => item);
      // titkins.push('333')
      // return Object.assign({}, state, {history: titkins})
    case 'AI_TURN':
      return {
        ...state,
        turn: 'white',
        pieces: initAIMove(),
        history: getHistory().map((item) => item),
      }
    default: 
      return state
  }
}