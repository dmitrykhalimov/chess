import React, { Component } from 'react';
import {connect} from 'react-redux';
import Levels from './Levels';
import Color from './Color';
import { download } from '../core/download';


class Menu extends Component {
  constructor(props) {
    super(props);

    this.inputOpenFileRef = React.createRef()
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleFileChange(evt) {
    console.log(evt.target.files[0])
    let formData = new FormData();
     
    formData.append("photo", evt.target.files[0]);
    console.log(formData);
    
  }

  handleButtonClick() {
    this.inputOpenFileRef.current.click()
  }

  render() {
    return (
      <div className="menu">
        <div className="menu__wrapper">
          <button onClick={this.props.startGame}>Новая игра</button>
          <h3>Уровень компьютера</h3>
          <Levels />
          <h3>Выбор фигур</h3>
          <Color />
          <h3>Импорт экспорт</h3>
          <input type="file" ref={this.inputOpenFileRef} onChange={this.handleFileChange} style={{display: "none"}}/>
          <button onClick={download}>Экспорт</button>
          <button onClick={this.handleButtonClick}>Импорт</button>
        </div>
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
    loadGame: (jsonParty) => dispatch({type: 'LOAD_GAME'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);