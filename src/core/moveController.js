import {game, move} from './engine';
import {possibleMovies} from './possibleMovies';
import {highlightCell} from './highlightCell';

const moveController = (payload) => {
  const {selectedCellAddress, selectedCellFigure, highlightedCell} = payload;

  if (highlightedCell && possibleMovies(highlightedCell).find((el) => el === selectedCellAddress)) {
    game.move(highlightedCell, selectedCellAddress);

    return {
      highlightedCell: '',
      possibleMovies: [],
      turn: 'black',
      pieces: game.board.configuration.pieces,
    }
  }

  return {
    highlightedCell: highlightCell(selectedCellAddress, selectedCellFigure),
    possibleMovies: possibleMovies(selectedCellAddress)
  }
}

export {moveController};