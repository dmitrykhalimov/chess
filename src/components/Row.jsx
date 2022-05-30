import React, { Component } from 'react';
import Cell from './Cell';
import { filterRowFigures } from '../core/filterRowFigures'
import {connect} from 'react-redux'

const CELLS = [1, 2, 3, 4, 5, 6, 7, 8];

class Row extends Component {
  constructor(props) {
    super(props);
    this.rowName = props.rowName;
    this.pieces = props.pieces;
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
            pieces={this.props.pieces[this.rowName]}
          />
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pieces: filterRowFigures(state.pieces),
  }
}

export default connect(mapStateToProps)(Row);