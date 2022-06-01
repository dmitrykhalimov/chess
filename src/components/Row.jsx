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

  prepareArray() {
    let board = CELLS.map((item) => item)
    
    if (this.props.player !== 'black') {
      board = board.reverse();
    };

    return board;
  }


  render() {
    return (
      <div className={`row`}>
        {/* ух какая штука, зарефактори меня */}
        {this.prepareArray().map((cellName) => {
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
    player: state.player,
    pieces: filterRowFigures(state.pieces),
  }
}

export default connect(mapStateToProps)(Row);