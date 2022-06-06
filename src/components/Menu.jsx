import React, { Component } from 'react';
import {connect} from 'react-redux';
import Levels from './Levels';
import Color from './Color';
import { download } from '../core/download';


class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu__wrapper">
          <button onClick={this.props.startGame}>Новая игра</button>
          <h3>Уровень компьютера</h3>
          <Levels />
          <h3>Выбор фигур</h3>
          <Color />
          <h3>Импорт экспорт</h3>
          <button onClick={download}>Экспорт</button>
          <button onClick={download}>Импорт</button>
        </div>
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