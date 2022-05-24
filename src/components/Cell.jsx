import React, { Component } from 'react';
import {cellColor} from '../core/cellColor';
import Figure from './Figure';

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
        <span>{this.fullName}</span>
        {this.figures[this.fullName] ? <Figure type={this.figures[this.fullName]} /> : ''}
      </div>
    );
  }
}

export default Cell;