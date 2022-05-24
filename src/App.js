import Board from './components/Board';
import './App.css';

import { Game, move, status, moves, aiMove, getFen } from 'js-chess-engine'
const game = new Game()
console.log(game.board.configuration);

function App() {
  return (
    <div className="App">
      <Board boardConfig={game.board.configuration}/>
    </div>
  );
}

export default App;
