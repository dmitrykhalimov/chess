import React, { Component } from 'react';
import Row from './Row';

const ROWS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G'
]

class Board extends Component {
  render() {
    return (
      <div className={`board`}>
        {ROWS.map((rowName) => {
          return <Row 
            key={`row${rowName}`}
            rowName={rowName}
          />
        })}
      </div>
    );
  }
}

export default Board;