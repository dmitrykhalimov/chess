import React, { Component } from 'react';
import {connect} from 'react-redux'

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <button onClick={this.props.startGame}>Новая игра</button>
        <h3>Уровень компьютера</h3>

        <form className="menu__levels">
          <input className="visually-hidden" type="radio" id="1" name="level" />
          <label for="1">1</label>

          <input className="visually-hidden" type="radio" id="2" name="level" />
          <label for="2">2</label>

          <input className="visually-hidden" type="radio" id="3" name="level" />
          <label for="3">3</label>

          <input className="visually-hidden" type="radio" id="4" name="level" />
          <label for="4">4</label>

          <input className="visually-hidden" type="radio" id="5" name="level" />
          <label for="5">5</label>
        </form>
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