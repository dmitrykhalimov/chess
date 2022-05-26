import React, { Component } from 'react';
import Cell from './Cell';



const CELLS = [1, 2, 3, 4, 5, 6, 7, 8];

class Row extends Component {
  constructor(props) {
    super(props);
    this.rowName = props.rowName;
    this.figures = props.figures;
  }

  componentDidUpdate() {
    console.log(`Row ${this.rowName} updated`)
  }

  render() {
    return (
      <div className={`row`}>
        {/* ух какая штука, зарефактори меня */}
        {CELLS.map((item) => item).reverse().map((cellName) => {
          return <Cell 
            key={`${this.rowName}${cellName}`}
            cellName={cellName}
            rowName={this.rowName}
            figures={this.figures}
          />
        })}
      </div>
    );
  }
}

export default Row;