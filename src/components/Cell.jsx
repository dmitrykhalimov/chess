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
    return (
      <div 
        className={`cell ${cellColor(this.fullName) ? 'cell--white' : 'cell--black'} ${this.props.highlightedCell === this.fullName ? 'cell--highlighted' : ''}`}
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
    highlightedCell: state.highlightedCell
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectCell: (cellName, cellFigure) => dispatch({type: 'SELECT_CELL', payload: {cellName, cellFigure}}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);