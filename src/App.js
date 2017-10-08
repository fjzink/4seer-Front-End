import React, { Component } from 'react';
import './App.css'
import Column_1 from './components/Column_1'
import Column_2 from './components/Column_2'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">4seer</h1>
        </header>
        <Column_1 />
        <Column_2 />
      </div>
    );
  }
}

export default App;
