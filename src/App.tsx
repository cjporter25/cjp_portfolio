import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Intro from './Components/Intro/Intro';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro /> {/* Rendering the Intro chunk */}
        <Projects /> {/* Render the Projects chunk */}
        <Resume /> {/* Render the Resume chunk */}
      </header>
      <footer>
        <p className="EndCredits">&copy; 2023 My Website</p>
      </footer>
    </div>
  );
}

export default App;
