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
    
    this.cellAddress = `${this.rowName}${this.cellName}`
    this.cellFigure = this.figures[this.cellAddress]

    this.state = {
      isHighlighted: false
    }
  }

  componentDidUpdate() {
    console.log(`Row ${this.rowName} updated`)
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
        {this.figures[this.cellAddress] ? <Figure type={this.figures[this.cellAddress]} /> : ''}
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