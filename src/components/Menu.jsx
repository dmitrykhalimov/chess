import React, { Component } from 'react';
import {connect} from 'react-redux'
import Levels from './Levels'

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <button onClick={this.props.startGame}>Новая игра</button>
        <h3>Уровень компьютера</h3>
        <Levels />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    highlightedCell: state.highlightedCell,
    possibleMovies: state.possibleMovies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    startGame: () => dispatch({type: 'INIT'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);