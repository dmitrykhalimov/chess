import Board from './components/Board';
import Turns from './components/Turns'
import {connect} from 'react-redux'
import './App.css';
import {game} from './core/engine';


function App(props) {
  // const {history} = props;
  return (
    <div className="App">
      <Turns history={props.history}/>
      <Board boardConfig={game.board.configuration}/>
      <div className="controls">
        Тут ходы
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    history: state.history,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateState: () => dispatch({type: 'INC'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);