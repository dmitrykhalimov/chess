import React, { Component } from 'react';
import Row from './Row';
import { filterRowFigures } from '../core/filterRowFigures'

const ROWS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H'
]

class Board extends Component {
  constructor(props) {
    super(props);
    this.figures = filterRowFigures(props.boardConfig.pieces);
  }

  render() {
    return (
      <div className={`board`}>
        {ROWS.map((rowName) => {
          return <Row 
            key={`row${rowName}`}
            rowName={rowName}
            figures={this.figures[rowName]}
          />
        })}
      </div>
    );
  }
}

export default Board;