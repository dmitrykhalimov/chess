import {game, move} from './engine';
import {possibleMovies} from './possibleMovies';
import {highlightCell} from './highlightCell';

const moveController = (payload, turn, player) => {
  const {selectedCellAddress, selectedCellFigure, highlightedCell} = payload;
  console.log(payload);
  // console.log(highlightCell(selectedCellAddress, selectedCellFigure, turn));

  if (highlightedCell && possibleMovies(highlightedCell).find((el) => el === selectedCellAddress)) {
    
    game.move(highlightedCell, selectedCellAddress,);

    return {
      highlightedCell: '',
      possibleMovies: [],
      turn: 'black',
      pieces: game.board.configuration.pieces,
    }
  }

  return {
    highlightedCell: highlightCell(selectedCellAddress, selectedCellFigure, player),
    possibleMovies: possibleMovies(selectedCellAddress)
  }
}

export {moveController};