import { highlightCell } from "../core/highlightCell";
import { possibleMovies} from "../core/possibleMovies";
import { moveController} from "../core/moveController";

const initalState = {
  player: 'white',
  highlightedCell: '',
  possibleMovies: [],
  turn: 'white',
};

export default function rootReducer(state = initalState, action) {
  switch(action.type) {
    case 'SELECT_CELL':
      return {
        ...state,
        ...moveController(action.payload)
      };
      // return moveController(action.payload.cellName, action.payload.cellFigure, action.payload.highlightedCell)
    default: 
      return state
  }
}