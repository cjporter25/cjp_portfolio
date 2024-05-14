import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Intro from './Components/Intro/Intro';
import Projects from './Components/Projects/Projects';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro />
        <Projects /> {/* Render the Projects component here */}
      </header>
    </div>
  );
}

export default App;
