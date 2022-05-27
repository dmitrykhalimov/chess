import Board from './components/Board';
import {connect} from 'react-redux'
import './App.css';
import {game} from './core/engine';


function App() {
  return (
    <div className="App">
      <Board boardConfig={game.board.configuration}/>
    </div>
  );
}

export default App;
