import React, { Component } from 'react';
import './App.css';
import CXENavBar from './Components/CXENavBar';
import { BrowserRouter as Router } from 'react-router-dom'
import RightBar from './Components/RightBar';
import ReportsList from './Components/ReportsList';
import { store as ReportsStore } from './Components/ReportsStore';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <CXENavBar>
          </CXENavBar>
          <RightBar title='Reports' listView={ReportsList} store={ReportsStore}>
          </RightBar>
        </div>
      </Router>
    );
  }
}

export default App;
