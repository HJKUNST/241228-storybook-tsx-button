import React from 'react';
import { ThemeProvider } from 'react-jss';
import { theme } from './theme/types';
import { Button } from './components/Button';

function App() {
  return (
    <ThemeProvider theme = {theme}> {/* Wrapping hierarchy with ThemeProvider */}
      <div className='App'>
        <Button>Click Me</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;

/*
[Original]
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/