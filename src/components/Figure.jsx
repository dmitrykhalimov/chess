import React, { Component } from 'react';

import bishopWhite from '../images/bishop-white.svg';
import bishopBlack from '../images/bishop-black.svg';
import kingWhite from '../images/king-white.svg';
import kingBlack from '../images/king-black.svg';
import knightWhite from '../images/knight-white.svg';
import knightBlack from '../images/knight-black.svg';
import pawnWhite from '../images/pawn-white.svg';
import pawnBlack from '../images/pawn-black.svg';
import queenWhite from '../images/queen-white.svg';
import queenBlack from '../images/queen-black.svg';
import rookWhite from '../images/rook-white.svg';
import rookBlack from '../images/rook-black.svg';

const CODE_FIGURES = {
  'B': bishopWhite,
  'b': bishopBlack,
  'K': kingWhite,
  'k': kingBlack,
  'N': knightWhite,
  'n': knightBlack,
  'P': pawnWhite,
  'p': pawnBlack,
  'Q': queenWhite,
  'q': queenBlack,
  'R': rookWhite,
  'r': rookBlack,
}

class Figure extends Component {
  render() {
    return (
      <img 
        src={CODE_FIGURES[this.props.type]}
        alt='шахматная фигура'
      />
    );
  }
}

export default Figure;