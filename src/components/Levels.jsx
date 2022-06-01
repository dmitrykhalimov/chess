import React, { Component } from 'react';
import {connect} from 'react-redux'

class Levels extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.props.changeLevel(Number(evt.target.value));
  }

  render() {
    return (
      <div>
        <form className="menu__levels">
          <input className="visually-hidden" key="level0" onChange={this.handleChange} type="radio" id="0" value="0" name="level" checked={this.props.level === 0}/>
          <label htmlFor="0">0</label>

          <input className="visually-hidden" key="level1" onChange={this.handleChange} type="radio" id="1" value="1"name="level" checked={this.props.level === 1}/>
          <label htmlFor="1">1</label>

          <input className="visually-hidden" key="level2" onChange={this.handleChange} type="radio" id="2" value="2" name="level" checked={this.props.level === 2}/>
          <label htmlFor="2">2</label>

          <input className="visually-hidden" key="level3" onChange={this.handleChange} type="radio" id="3" value="3" name="level" checked={this.props.level === 3}/>
          <label htmlFor="3">3</label>

        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    level: state.levelAI,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeLevel: (selectedLevel) => dispatch({type: 'CHANGE_AI_LEVEL', payload: selectedLevel}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Levels);