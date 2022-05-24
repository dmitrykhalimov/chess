import React, { Component } from 'react';
import {connect} from 'react-redux'
import {cellColor} from '../core/cellColor';
import Figure from './Figure';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.cellName = props.cellName;
    this.rowName = props.rowName;
    this.figures = props.figures;
    
    this.fullName = `${this.rowName}${this.cellName}`
    this.cellFigure = this.figures[this.fullName]

    this.state = {
      isHighlighted: false
    }
  }

  render() {
    const colorClass = cellColor(this.fullName) ? 'cell--white' : 'cell--black';
    const highlightClass = this.props.highlightedCell === this.fullName ? 'cell--highlighted' : '';
    const possibleMovies = this.props.possibleMovies.find((el) => el === this.fullName) ? 'cell--possible' : '';

    return (
      <div 
        className={`cell ${colorClass} ${highlightClass} ${possibleMovies}`}
        onClick={() => this.props.selectCell(this.fullName, this.cellFigure)}
      >
        <span>{this.fullName}</span>
        {this.figures[this.fullName] ? <Figure type={this.figures[this.fullName]} /> : ''}
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
    selectCell: (cellName, cellFigure) => dispatch({type: 'SELECT_CELL', payload: {cellName, cellFigure}}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);