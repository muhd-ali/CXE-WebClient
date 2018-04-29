import React, { Component } from 'react';
import './App.css';
import CXENavBar from './Components/CXENavBar';
import { BrowserRouter as Router } from 'react-router-dom'
import RightBar from './Components/RightBar';
import ReportsList from './Components/ReportsList';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <CXENavBar>
          </CXENavBar>
          <RightBar title='Reports' listView={ReportsList}>
          </RightBar>
        </div>
      </Router>
    );
  }
}

export default App;
