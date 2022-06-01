import React, { Component } from 'react';
import {connect} from 'react-redux';
import kingWhite from '../images/king-white.svg'
import kingBlack from '../images/king-black.svg'
import kingSemi from '../images/king-semi.svg'

class Color extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.props.changeColor(evt.target.value);
  }

  render() {
    return (
      <div>
        <form className="menu__color">
          <input className="visually-hidden" onChange={this.handleChange} type="radio" id="white" value="white" name="color" checked={this.props.color === "white"}/>
          <label htmlFor="white">
            <img 
              src={kingWhite}
              alt='шахматная фигура'
            />
          </label>

          <input className="visually-hidden" onChange={this.handleChange} type="radio" id="random" value="random" name="color" checked={this.props.color === "random"}/>
          <label htmlFor="random">
            <img 
              src={kingSemi}
              alt='шахматная фигура'
            />
          </label>

          <input className="visually-hidden" onChange={this.handleChange} type="radio" id="black" value="black" name="color" checked={this.props.color === "black"}/>
          <label htmlFor="black">
            <img 
              src={kingBlack}
              alt='шахматная фигура'
            />
          </label>

        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    color: state.newGameColor,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeColor: (selectedColor) => dispatch({type: 'CHANGE_COLOR', payload: selectedColor}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color);