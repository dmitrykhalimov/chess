import { highlightCell } from "../core/highlightCell";
import { possibleMovies} from "../core/possibleMovies";
import { moveController} from "../core/moveController";
import { getPiecesConfiguration, initAIMove, getHistory, getMovies, startGame } from "../core/engine"

const initalState = {
  levelAI: 2,
  newGameColor: 'black',
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
      startGame(state.newGameColor, state.levelAI);
      return {
        ...state,
        history: getHistory().map((item) => item),
        player: state.newGameColor,
        pieces: getPiecesConfiguration()
      }
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
    case 'CHANGE_COLOR':
      return {
        ...state,
        newGameColor: action.payload
      }
    default: 
      return state
  }
}