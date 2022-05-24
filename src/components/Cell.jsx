import React, { Component } from 'react';
import {cellColor} from '../core/cellColor';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.cellName = props.cellName;
    this.rowName = props.rowName;
    this.figures = props.figures;
    this.fullName = `${this.rowName}${this.cellName}`

    this.state = {
      isHighlighted: false
    }
    // this.highlightSelected = this.highlightSelected.bind(this);
  }

  // highlightSelected() => {

  // }

  render() {
    return (
      <div 
        className={`cell ${cellColor(this.fullName) ? 'cell--white' : 'cell--black'} ${this.state.isHighlighted ? 'cell--highlighted' : ''}`}
        onClick={() => this.setState({isHighlighted: true})}
      >
        {this.fullName}
        {this.figures[this.fullName] ? <p>{this.figures[this.fullName]}</p> : ''}
      </div>
    );
  }
}

export default Cell;