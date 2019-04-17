import React, { Component } from 'react';
import TicTacToe from "./containers/tictactoe.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Game</h1>
          <TicTacToe/>
      </div>
    )
  }
}

export default App;
