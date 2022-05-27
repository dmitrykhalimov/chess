import React, { Component } from 'react';
import {connect} from 'react-redux'
import {cellColor} from '../core/cellColor';
import Figure from './Figure';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.cellName = props.cellName;
    this.rowName = props.rowName;
    this.pieces = props.pieces;
    
    this.cellAddress = `${this.rowName}${this.cellName}`
    this.cellFigure = this.pieces[this.cellAddress]

    this.state = {
      isHighlighted: false
    }
  }

  componentDidUpdate() {
    console.log(this.pieces);
  }

  render() {
    const colorClass = cellColor(this.cellAddress) ? 'cell--white' : 'cell--black';
    const highlightClass = this.props.highlightedCell === this.cellAddress ? 'cell--highlighted' : '';
    const possibleMovies = this.props.possibleMovies.find((el) => el === this.cellAddress) ? 'cell--possible' : '';

    return (
      <div 
        className={`cell ${colorClass} ${highlightClass} ${possibleMovies}`}
        onClick={() => this.props.selectCell(this.cellAddress, this.cellFigure, this.props.highlightedCell)}
      >
        <span>{this.cellAddress}</span>
        {this.props.pieces[this.cellAddress] ? <Figure type={this.props.pieces[this.cellAddress]} /> : ''}
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
    selectCell: (selectedCellAddress, selectedCellFigure, highlightedCell) => dispatch({type: 'SELECT_CELL', payload: {selectedCellAddress, selectedCellFigure, highlightedCell}}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);