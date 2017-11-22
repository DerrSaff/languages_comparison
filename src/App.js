import React, { Component } from 'react';
import Selector from './Selector'
import './App.css';
import ComparisonTable from './ComparisonTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Selector />
        <ComparisonTable/>
      </div>
    );
  }
}

export default App;
