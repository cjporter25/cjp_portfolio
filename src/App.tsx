import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Intro from './Components/Intro/Intro';

 //<img src={logo} className="App-logo" alt="logo" />
 // <a className="App-link" href="https://reactjs.org"
 //         target="_blank" rel="noopener noreferrer">
 //         Projects
 // </a>



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro />
        
      </header>
    </div>
  );
}

export default App;
