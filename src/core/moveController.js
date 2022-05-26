import {game, move} from './engine';
import {possibleMovies} from './possibleMovies';
import {highlightCell} from './highlightCell';

console.log(possibleMovies)

const moveController = (payload) => {
  const {selectedCellAddress, selectedCellFigure, highlightedCell} = payload;

  if (highlightedCell && possibleMovies(highlightedCell).find((el) => el === selectedCellAddress)) {
    console.log('бантик');
    game.move('A2', 'A3')
    console.log(game.board.configuration.pieces)
    // move(highlightedCell, selectedCellAddress);

    return {
      highlightedCell: '',
      possibleMovies: [],
      turn: 'black',
      pieces: game.board.configuration.pieces,
    }
  }
  // if (highlightedCell && possibleMovies(highlightedCell).find((el) => el === cellAddress)) {
  //   move(highlightedCell, cellAddress);
  //   return {
  //     highlightedCell: '',
  //     possibleMovies: [],
  //     turn: 'black'
  //   }
  // };

  // console.log(highlightedCell, cellFigure, cellAddress);

  return {
    highlightedCell: highlightCell(selectedCellAddress, selectedCellFigure),
    possibleMovies: possibleMovies(selectedCellAddress)
  }
}

export {moveController};