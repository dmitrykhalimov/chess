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
    if (this.props.turn === 'black') {
      this.props.initAITurn();
    }
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
    turn: state.turn,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initAITurn: () => {
      console.log('Ход AI');
      dispatch({type: 'AI_TURN'});
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);