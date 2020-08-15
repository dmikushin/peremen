import React from 'react';
import NtpTimeSync from 'ntp-time-sync';
import logo from './logo.png';
import peremen from './peremen.mp3';
import './App.css';

function App() {
  function play() {
    const timeSync = NtpTimeSync.getInstance();
 
    timeSync.getTime().then(function (result) {
      console.log("current system time", new Date());
      console.log("real time", result.now);
      console.log("offset in milliseconds", result.offset);
    });

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
