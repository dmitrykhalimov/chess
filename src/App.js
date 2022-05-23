import Board from './components/Board';
import './App.css';

import { Game, move, status, moves, aiMove, getFen } from 'js-chess-engine'
const game = new Game()
console.log(game);

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
