import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Intro from './Components/Intro/Intro';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import Transition from './Components/Transition/Transition';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro /> {/* Rendering the Intro chunk */}
        <Transition title="Projects" />
        <Projects /> {/* Render the Projects chunk */}
        <Transition title="Resumes" />
        <Resume /> {/* Render the Resume chunk */}
      </header>
      <footer>
        <p className="EndCredits">&copy; 2023 Christopher James Porter</p>
      </footer>
    </div>
  );
}

export default App;
