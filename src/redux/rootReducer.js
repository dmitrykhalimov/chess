import { highlightCell } from "../core/highlightCell";
import { possibleMovies} from "../core/possibleMovies";

const initalState = {
  player: 'white',
  highlightedCell: '',
  possibleMovies: [],
};

export default function rootReducer(state = initalState, action) {
  switch(action.type) {
    case 'SELECT_CELL':
      const highlightedCell = highlightCell(action.payload.cellName, action.payload.cellFigure, state.player);
      return {
        highlightedCell,
        possibleMovies: highlightedCell !== '' ? possibleMovies(action.payload.cellName) : [],
      }
    default: 
      return state
  }
}