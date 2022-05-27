import { highlightCell } from "../core/highlightCell";
import { possibleMovies} from "../core/possibleMovies";
import { moveController} from "../core/moveController";
import { getPiecesConfiguration, initAIMove } from "../core/engine"

const initalState = {
  player: 'white',
  highlightedCell: '',
  possibleMovies: [],
  turn: 'white',
};

export default function rootReducer(state = initalState, action) {
  switch(action.type) {
    case 'SELECT_CELL':
      console.log('Выбрана ячейка');
      return {
        ...state,
        ...moveController(action.payload)
      };
      // return moveController(action.payload.cellName, action.payload.cellFigure, action.payload.highlightedCell)
    case 'INIT':
      return {
        ...state,
        pieces: getPiecesConfiguration()
      }
    case 'AI_TURN':
      return {
        ...state,
        turn: 'white',
        pieces: initAIMove()
      }
    default: 
      return state
  }
}