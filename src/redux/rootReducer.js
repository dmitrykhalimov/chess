import { highlightCell } from "../core/highlightCell";

const initalState = {
  player: 'white',
  highlightedCell: ''
};

export default function rootReducer(state = initalState, action) {
  switch(action.type) {
    case 'SELECT_CELL':
      console.log(action.payload)
      return {
        highlightedCell: highlightCell(action.payload.cellName, action.payload.cellFigure, state.player),
      }
    default: 
      return state
  }
}