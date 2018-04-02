import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CXENavBar from './Components/CXENavBar';
import { BrowserRouter as Router } from 'react-router-dom'
import RightBar from './Components/RightBar';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <CXENavBar>
          </CXENavBar>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">CXE Monitor</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
