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
  componentWillMount() {}

  componentDidUpdate() {
    console.log(`Board updated`)
    if (this.props.turn !== this.props.player) {
      setTimeout(this.props.initAITurn, 500);
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
    player: state.player,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initAITurn: () => {
      dispatch({type: 'AI_TURN'});
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);