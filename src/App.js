import React from 'react';
import logo from './logo.png';
import peremen from './peremen.mp3';
import './App.css';

function App() {
  function play() {
    document.getElementById('player').play();
  }

  return (
    <div className="App">
      <header className="App-header">
        <audio id="player" src={peremen}></audio>
        <a onClick={play}><img src={logo} className="App-logo" alt="logo" /></a>
      </header>
    </div>
  );
}

export default App;
