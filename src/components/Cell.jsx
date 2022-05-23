import React, { Component } from 'react';
import {cellColor} from '../core/cellColor';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.cellName = props.cellName;
    this.rowName = props.rowName;
    this.fullName = `${this.rowName}${this.cellName}`
  }

  render() {
    return (
      <div className={`cell ${cellColor(this.fullName) ? 'cell--white' : 'cell--black'}`}>
        {`${this.rowName}${this.cellName}`}
      </div>
    );
  }
}

export default Cell;