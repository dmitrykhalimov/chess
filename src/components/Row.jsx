import React, { Component } from 'react';
import Cell from './Cell';


const CELLS = [1, 2, 3, 4, 5, 6, 7, 8];

class Row extends Component {
  constructor(props) {
    super(props);
    this.rowName = props.rowName;
  }

  render() {
    return (
      <div className={`row`}>
        {CELLS.map((cellName) => {
          return <Cell 
            key={`${this.rowName}${cellName}`}
            cellName={cellName}
            rowName={this.rowName} 
          />
        })}
      </div>
    );
  }
}

export default Row;