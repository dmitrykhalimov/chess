import React, { Component } from 'react';
import Row from './Row';
import { filterRowFigures } from '../core/filterRowFigures'
import {connect} from 'react-redux'

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

  componentDidUpdate() {
    console.log(`Board updated`)
  }
  
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

function mapStateToProps(state) {
  return {
    pieces: filterRowFigures(state.pieces),
  }
}

export default connect(mapStateToProps)(Board);